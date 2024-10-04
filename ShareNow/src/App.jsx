import './App.css'
import { useEffect, useRef ,useState } from 'react'
import { filesend } from './ServerApi/api';
function App() {
const inputFileRef = useRef();
const logo = `https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg`
const [file,setFile]=useState('')
const [result,setResult]=useState('')
const uploadfile = ()=>{
   inputFileRef.current.click();
  }

  useEffect(()=>{
 const  fileUploads=async()=>{
  if(file){
    const data = new FormData();
    data.append("name",file.name);
    data.append("file",file);

  let response =   await filesend(data);
  setResult(response.path);
    
  }
}
fileUploads()
  },[file])
  console.log(file);
  return (
    <div className='container'>
   
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>File Share Here !</h1>
         <p>upload and share the download link</p>
         <button onClick={()=>(uploadfile())}>Upload</button>
         <input type='file'
         style={{display:"none"}}
          ref={inputFileRef}
          onChange={(e)=>setFile(e.target.files[0])}

         />
         <a href={result} target='_black'>{result}</a>
         </div>
    </div>
  
  )
}

export default App
