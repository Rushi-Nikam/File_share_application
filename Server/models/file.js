const mongoose = require('mongoose');


const fileShema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    
    },
    downloadContent:{
        type:Number,
        reuqired:true,
        default:0
    }
})
const File = mongoose.model('file',fileShema);
module.exports = File;  