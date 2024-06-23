const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createDonor = async (req, res) => {
    const donorsCollection = req.app.get('donorsCollection');
    let userObj = req.body;
    
    let donor = await donorsCollection.findOne({ username: userObj.username });
    if (donor !== null) {
        return res.send("User already exists");
    }

    const hashedPassword = await bcryptjs.hash(userObj.password, 7);
    userObj.password = hashedPassword;
    userObj.products_donated = userObj.products_donated || 0;
    userObj.products_remaining = userObj.products_donated;

    // Add current timestamp
    userObj.created_at = new Date();
    userObj.updated_at = new Date();
    userObj.donated = false;

    await donorsCollection.insertOne(userObj);
    res.send("Donor created");
};
const donorLogin = async (req, res) => {
    const donorsCollection = req.app.get('donorsCollection');
    let userObj = req.body;
    
    try {
        let dbUser = await donorsCollection.findOne({ username: userObj.username });
        if (!dbUser) {
            return res.status(401).send({ message: "Invalid username" });
        }
        
        let status = await bcryptjs.compare(userObj.password, dbUser.password);
        if (!status) {
            return res.status(401).send({ message: "Invalid password" });
        }
        
        const signedToken = jwt.sign({ username: dbUser.username }, process.env.SECRET_KEY, { expiresIn: '20m' });
        delete dbUser.password;
        res.send({ message: "Logged in successfully", token: signedToken, user: dbUser });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ message: "Internal server error" });
    }
};

const updateDonationAmount = async (req, res) => {
    const donorsCollection = req.app.get('donorsCollection');
    const {  additional_donation ,username  } = req.body;
    


    let donor = await donorsCollection.findOne({ username: username });
    if (donor === null) {
        return res.send({ message: "Donor not found" });
    }

    await donorsCollection.updateOne(
        { username: username },
        {
            $set:{donated: true},
            $set :{updated_at:new Date()},
            $inc: {
                products_donated: additional_donation,
                products_remaining: additional_donation
            }
        }
    );

    res.send({ message: "Donation updated successfully" });
};

const productsFetch = async (req, res) => {
    const productsCollection = req.app.get('productsCollection');
    let products = await productsCollection.find().toArray();
    res.send(products);
};

module.exports = { createDonor, donorLogin, updateDonationAmount, productsFetch };
