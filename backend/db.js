const mongoose=require("mongoose");
const mongoURI="mongodb+srv://couldbook:test@123@cluster0.cjulo.mongodb.net/CloudNote?retryWrites=true&w=majority"
const connectMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('caonnected to mongodb');
    })
}
module.exports=connectMongo;