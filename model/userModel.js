
const mongoose=require('mongoose')

const userSchema=  new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    }
})
const Users=mongoose.model("Users",userSchema);
module.exports=Users;