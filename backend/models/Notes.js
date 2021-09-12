const mongoose=require("mongoose");

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    
    },
    tags:{
        type:String,
        defaultl:"General"
    },
    notesTime:{
        type:Date,
        default:Date.now
    }
  });
  module.exports=mongoose.model('Notebook',NotesSchema )