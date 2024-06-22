//create admin api app
const exp=require('express');
adminApp=exp.Router();


adminApp.get('/test-admin',(req,res)=>{
    res.send({message:"This from admin api"})
})
adminApp.post('/new-product',async(req,res)=>{
    //get user or author collection object
    const productsCollection=req.app.get('productsCollection')
    //get user or author details
    let userObj=req.body;
        //check if exixted
        let product=await productsCollectionObj.insertOne(userObj);
        if(product===true){
            res.send({message:"Product Added"})
        }
       else{
        res.send({message:"error"})
       }
        }
    
  
)

//export userApp
module.exports=adminApp;