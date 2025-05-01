const adminModel = require("../Model/adminModel");


const Adminlogin = async(req,res)=>{
    const {email, password}=req.body;
    const Admin = await adminModel.findOne({email:email});
    try {
        if(!Admin){
            res.status(400).send({msg:"Invalid Email"});
        }
        else if(Admin.password != password){
            res.status(400).send({msg:"Invalid Password"});

        }
        res.status(200).send({msg:"Your Are login Succefully", Admin:Admin});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    Adminlogin
}