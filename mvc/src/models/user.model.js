const mongoose= require("mongoose");

const userSchema= new mongoose.Schema(
    {
        //firstname:{type: String, required: true},
        //  lastname:{type: String, required: true}, 
        //  gender:{type: String, required: true},
        // dateOfbirth:{type:String, required: true},
        // type : {type:String,required:true,enum:["student", "admin" ,"instructor"]}

        title:{type: String, required: true},
        price:{type: String, required: true},
        img_url:{type: String, required: true}
    },
    {
        timestamps:true,
        versionKey:false,

    }
);

const User=mongoose.model("user",userSchema);
module.exports=User;