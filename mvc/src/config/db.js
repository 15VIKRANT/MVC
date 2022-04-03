const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://Vikrant:Vikrant1234@cluster0.perep.mongodb.net/test")
}

module.exports=connect;