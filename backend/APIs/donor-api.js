//create admin api app
const exp=require('express');
donorApp=exp.Router();


donorApp.get('/test-donor',(req,res)=>{
    res.send({message:"This from donor api"})
})


//export userApp
module.exports=donorApp;