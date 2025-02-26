import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true,
        minLength:5
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minLength:10,
        validate:{
            validator: function(emailvalue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailvalue);
            },
            message :"Invalid email format"
        }
    },
    password:{
     type:String,
     require:true,
     unique:true,
     minLength:8,
     validate:{
        validator: function(passvalue){
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/.test(passvalue);
        }
     }
    }
},{timestamps:true});

const user=mongoose.model("user",userSchema);  //create user collection
export default user;


