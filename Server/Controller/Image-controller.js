const File = require("../models/file")
exports.uploadImage = async(req,res) => {
    // Your logic for handling image upload
const fileObj = {
  path:  req.file.path,
 name: req.file.originalname,
}
    try {
  const file = await File.create(fileObj);
      console.log(file);
      res.status(201).json({path:`http://localhost:8000/file/${file._id}`})
    } catch (error) {
      console.log("Error"+error.message);
      
      res.status(500).json({error:error.message});
    }
  
};
exports.downloadData = async(req,res)=>{


  try {
  const file= await File.findById(req.params.fileId);
  file.downloadContent++;
  await file.save();

  res.download(file.path,file.name);
    
  } catch (error) {
    console.log("error",error.message);
    return res.status(500).json({error:error.message})
    
  }
}
