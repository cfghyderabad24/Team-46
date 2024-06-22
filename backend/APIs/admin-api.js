const express = require('express');
const nodemailer = require('nodemailer');
const adminApp = express.Router();

adminApp.get('/test-admin', (req, res) => {
    res.send({ message: "This from admin api" });
});

adminApp.post('/new-product', async (req, res) => {
    const productsCollection = req.app.get('productsCollection');
    let product = req.body;
    await productsCollection.insertOne(product);
    res.send({ message: "Product added" });
});

adminApp.post('/request-products', async (req, res) => {
    const { quantity, event } = req.body;
    const donorsCollection = req.app.get('donorsCollection');

    try {
        let remainingQuantity = quantity;
        const donors = await donorsCollection.find({ donated: true }).sort({ 
            updated_at: 1 }).toArray();

        for (const donor of donors) {
            if (remainingQuantity <= 0) break;

            let usedQuantity = 0;
            if (donor.products_remaining > remainingQuantity) {
                usedQuantity = remainingQuantity;
                await donorsCollection.updateOne(
                    { _id: donor._id },
                    { $inc: { products_remaining: -remainingQuantity } }
                );
                remainingQuantity = 0;
            } else {
                usedQuantity = donor.products_remaining;
                remainingQuantity -= donor.products_remaining;
                await donorsCollection.updateOne(
                    { _id: donor._id },
                    { $set: { products_remaining: 0 } }
                );
            }

            await sendEmail(donor.email, usedQuantity, event, donor.products_remaining - usedQuantity);
        }

        res.send({ message: 'Products requested successfully' });
    } catch (error) {
        console.error('Error in request-products endpoint:', error);
        res.status(500).send({ message: 'Failed to request products', error: error.message });
    }
});

async function sendEmail(email, usedQuantity, event, remainingQuantity) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Your Donation Has Been Used',
        text: `Dear Donor,

${usedQuantity} of your donated products have been used for the event: ${event}.
${remainingQuantity > 0 ? `You have ${remainingQuantity} products remaining for future use.` : 'All your donated products have been used.'}

Thank you for your contribution!

Best Regards,
Your Organization`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', email);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

adminApp.post('/test-email', async (req, res) => {
    const { email } = req.body;
    try {
        await sendEmail(email, 10, 'Test Event', 20);
        res.send({ message: 'Test email sent successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to send test email', error: error.message });
    }
});

module.exports = adminApp;
