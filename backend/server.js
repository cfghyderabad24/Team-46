const exp=require('express');
const path=require('path')
const cors=require('cors')
const app=exp();
app.use(cors());
//body parser
app.use(exp.json())
//place react build in http web server
app.use(exp.static(path.join(__dirname,'../frontend/build')))
require('dotenv').config()
const mongoClient=require('mongodb').MongoClient
//connect to mongo db server
mongoClient.connect(process.env.URL)
.then(client=>{
    //get database
    const blogDbObj=client.db('JPMC')
    //create collection object
    const donorsCollection=blogDbObj.collection('donors')
    //share collection objects to api's
    app.set('donorsCollection',donorsCollection)

    //verify
    console.log("DB connected successfully")

})
.catch(err=>{
    console.log("Error in db connectivity",err)
})



//import api's
const adminApp=require('./APIs/admin-api')
const donorApp=require('./APIs/donor-api')

//handover requests to specific route based on starting of the path
app.use('/admin-api',adminApp)
app.use('/donor-api',donorApp)

//errror handling middleware
app.use((err,req,res,next)=>{
    res.send({status:'Error',message:err.message})
})

//get port number from env
const port=process.env.PORT

//assign port number to http server
app.listen(port,()=>console.log(`http server on port ${port}`))