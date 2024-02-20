const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:''})


const app=require('./app')

mongoose.connect('mongodb://127.0.0.1:27017/Data')
    .then((conn) => {
        console.log("Connection success");
    })
    .catch((err) => {
        console.error(err.message);
    });



const PORT=3000
app.listen(PORT,()=>console.log(`Server run to ${PORT}`))