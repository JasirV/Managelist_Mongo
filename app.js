const express=require('express');
const app=express();
const userRoutes=require('./Router/Router')

app.use(express.json())
app.use('/users',userRoutes)


module.exports=app;