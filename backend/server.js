const exp = require('express');
const path = require('path');
const cors = require('cors');
const Razorpay = require('razorpay');
const app = exp();
app.use(cors());
app.use(exp.json());
app.use(exp.static(path.join(__dirname, '../frontend/build')));
require('dotenv').config();
const mongoClient = require('mongodb').MongoClient;
const uniqueId = require('uniqid');
const sha256 = require('sha256');

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

mongoClient.connect(process.env.URL)
  .then(client => {
    const blogDbObj = client.db('JPMC');
    const donorsCollection = blogDbObj.collection('donors');
    const productsCollection = blogDbObj.collection('products');
    app.set('donorsCollection', donorsCollection);
    app.set('productsCollection', productsCollection);

    console.log("DB connected successfully");
  })
  .catch(err => {
    console.log("Error in db connectivity", err);
  });

const adminApp = require('./APIs/admin-api');
const donorApp = require('./APIs/donor-api');

app.use('/admin-api', adminApp);
app.use('/donor-api', donorApp);

app.use((err, req, res, next) => {
  res.send({ status: 'Error', message: err.message });
});

const port = process.env.PORT;

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: uniqueId()
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`http server on port ${port}`));
