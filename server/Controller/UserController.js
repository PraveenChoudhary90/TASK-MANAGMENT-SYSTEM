const UserModel = require("../Model/UserModel");




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
           res.status(200).send({msg:"Your Are login Succefully", User:User});
       } catch (error) {
           console.log(error);
       }
}



module.exports ={
    Userlogin
}