
const users=require('../model/userModel')


exports.createUser=async(req,res)=>{
    const {name,email,username}=req.body;
    if(!name,!email,!username){
        return res.status(400).json({
            status:"fail",
            message:'Name Email and User Name are require in this feelds'
        })
    }
    const newuser=await users.create({
        name:name,
        email:email,
        username:username
    })
    

    res.status(201).json({
        status:'succes',
        data:{
            user:newuser
        }
    })
}
exports.getUserList=async(req,res)=>{
    const Users=await users.find();
    res.status(200).json({
        status:'succes',
        data:{
            Users,
        }
    })
}

exports.getUser=async(req,res)=>{
    const id =req.params.id;
    const findUser= await users.findById(id);
    if(!findUser){
       return res.status(400).json({
            status:'fail',
            message:'User NOt fund'

        })
    }
        res.status(200).json({
            status:'Succes',
            data:{
                user:findUser
            }
        })
}

exports.UpdateUser=async(req,res)=>{
    const id=req.params.id;
    const findUser= await users.findById(id)
    if(!findUser){
       return res.status(400).json({
            status:'fail',
            message:`User ${id} Not Found'`
        })
    }
    const index=users.indexOf(findUser)
    Object.assign(findUser,req.body)
    users[index]=findUser;
    res.status(200).json({
        status:'succes',
        data:{
            user:findUser
        }
    })

}

exports.deleteUser=async(req,res)=>{
    const id =req.params.id
    const findUser= await users.findById(id)
    if(!findUser){
        return res.status(400).json({
            status:'fail',
            message:`User Not Found ${id}`
        })
    }

    res.status(200).json({
        status:'succes',
        data:{
            user:null
        }
    })
}