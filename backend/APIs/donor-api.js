const express = require('express');
const donorApp = express.Router();
const expressAsyncHandler = require('express-async-handler');
const { createDonor, donorLogin, updateDonationAmount } = require('./util');

let donorsCollection;
donorApp.use((req, res, next) => {
    donorsCollection = req.app.get("donorsCollection");
    next();
});

donorApp.post('/donor', createDonor);
donorApp.post('/login', donorLogin);
donorApp.put('/donate', updateDonationAmount);

module.exports = donorApp;
