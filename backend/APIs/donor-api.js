const exp=require('express');
const donorApp=exp.Router()
const  expressAsyncHandler=require('express-async-handler')
//import util obj
const {createDonor,donorLogin}=require('./util')
let donorsCollection;
donorApp.use((req,res,next)=>{
    donorsCollection=req.app.get("donorsCollection");
    next()
})
//define routes
//craetion
donorApp.post('/donor',createDonor)
//user login
userApp.post('/login',donorLogin)
//get all articles


module.exports=donorApp;