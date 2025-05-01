const adminModel = require("../Model/adminModel");
const TaskModel = require("../Model/TaskModel");
const UserModel = require("../Model/UserModel");


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

const UserInsert = async(req,res)=>{
   const {name,email,designation,number,password} = req.body;
   try {
    const user = await UserModel.create({
        name:name,
        email:email,
        designation:designation,
        number:number,
        password:password

    })
    res.status(200).send({msg:"User Successfully Added"});
   } catch (error) {
    console.log(error)
   }
}

const UserDisplay = async(req,res)=>{
    const  User = await UserModel.find();
    res.status(200).send(User);
}




const AssignTask = async(req,res)=>{
    const {name,title,description,date}= req.body;
    try {
        const Task = await TaskModel.create({
            name:name,
            title:title,
            description:description,
            date:date
        })
        res.status(200).send({msg:"Task Assing to user Successfully"})
    } catch (error) {
        console.log(error)
    }
}


const TaskDsiplay = async(req,res)=>{
    const Task = await TaskModel.find();
    res.status(200).send(Task);
}


const TaskDelete = async(req,res)=>{
    const {id} =req.body;
   const Data = await TaskModel.findByIdAndDelete(id);
   res.status(200).send({msg:"Your Task Is Deleted Successfully"});
}



const ShowUpdateFromData = async(req,res)=>{
    const {id} = req.body;
    try {
        const Taskupdate = await TaskModel.findById(id);
        res.status(200).send(Taskupdate);
        // console.log(Taskupdate);
    } catch (error) {
        console.log(error);
    }
}


const UpdateTask = async(req,res)=>{
    const {_id} = req.body;
    try {
        const Data = await TaskModel.findByIdAndUpdate(_id, req.body);
        res.status(200).send({msg:"Your Data Is Successfully Updated"});
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    Adminlogin,
    UserInsert,
    UserDisplay,
    AssignTask,
    TaskDsiplay,
    TaskDelete,
    ShowUpdateFromData,
    UpdateTask
}