const UserModel = require("../Model/UserModel");
const jwt =require("jsonwebtoken");
require("dotenv").config();

const Userlogin = async(req,res)=>{
    const {email, password}=req.body;
       const User = await UserModel.findOne({email:email});
       console.log(User);
       try {
           if(!User){
               res.status(400).send({msg:"Invalid Email"});
           }
           else if(User.password != password){
               res.status(400).send({msg:"Invalid Password"});
   
           }
           const token=jwt.sign({id:User._id }, process.env.JSON_WEB_TOKEN, { expiresIn: "2d" });
           res.status(200).send({token:token,msg:"Your Are login Succefully", User:User});
       } catch (error) {
           console.log(error);
       }
}



const UserAuthonticate = async(req,res)=>{
     const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
     try {
        const decodedToken = jwt.verify(token,  process.env.JSON_WEB_TOKEN);
        console.log(decodedToken.id);
      const User = await UserModel.findById(decodedToken.id).select("-password");

      console.log(User);

      res.status(200).send(User);
     
    } catch (error) {
         console.log(error);
     }
}

module.exports ={
    Userlogin,
    UserAuthonticate
}