const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

const createDonor=async(req,res)=>{
    //get user or author collection object
    const donorObj=req.app.get('donorsCollection')
    //get user or author details
    let uesrObj=req.body;
        //check if exixted
        let donor=await usersCollectionObj.findOne({username:userObj.username})
        //if already existed
        if(donor!==null){
            return res.send("user already existed")
        }
    
    //check if author
   
    //hash password
    const hashedPassword=await bcryptjs.hash(userObj.password,7)
    //replace 
    userObj.password=hashedPassword;
    
        await donorsCollection.insertOne(userObj);
        console.log(res)
        res.send("donor created")
    

    
}
const donorLogin=async(req,res)=>{
    //get user or author collection object
    const donorObj=req.app.get('donorsCollection')
    let userObj=req.body;
    //check if user
    
        let dbUser=await usersCollectionObj.findOne({username:userObj.username})
        if(dbUser===null){
            return res.send({message:"Invalid username"});
        }
        else{
            let status=await bcryptjs.compare(userObj.password,dbUser.password)
            if(status===false){
                return res.send({message:"Invalid Password"})
            }
            else{
                //craete jwt token
                const signedToken=jwt.sign({username:dbUser.username},env.SECRET_KEY,{expiresIn:20});
                delete dbUser.password;
                res.send({message:"LoggedIn successfully",token:signedToken,user:dbUser})
            }
        }

    

}

module.exports={createDonor,donorLogin};