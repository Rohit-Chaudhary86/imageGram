import express from 'express'
import connectDB from './config/dbConfig.js';

const PORT =3000;
const server=express();

server.get("/API",(req,res)=>{
    return res.json({API:"e3r34rf34r4"})
});

server.listen(PORT,()=>{
    console.log(`server is tunning on port ${PORT}`);
    connectDB();
}); 