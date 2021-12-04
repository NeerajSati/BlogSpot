import './write.css';
import {axiosInstance} from '../../config';
import { useContext, useState } from 'react';
import {Context} from '../../context/Context'

export default function Write() {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const[file,setFile] = useState(null);
    const[cat,setCat] = useState([]);
    const {user} = useContext(Context);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const categories = cat.split(",");
        const newPost = {
            username: user.username,
            title,
            desc,
            categories
        }
        categories.map((c)=>{
            
        const newCat = {
            name: c,
        }
            try {

            axiosInstance.post("/categories/",newCat)
            } catch (error) {
                
            }
        })
        if(file){
            const data = new FormData();
            console.log(FormData);
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename;
            try {
                await axiosInstance.post("/upload",data)
            } catch (error) {
                
            }
            try{
            const res = await axiosInstance.post("/posts",newPost);
            window.location.replace("/post/"+res.data._id)
            }catch(err){

            }
        }
    }

    return (
        <div className="write">
        {
        file && <img className="writeImage" src={URL.createObjectURL(file)} alt="ContentImage"></img>
        }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: "none"}} onChange = {(e)=> setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
                    <button className="writeSubmit" type="submit">Publish</button>
                </div>
                <div className="writeFormGroup">
                <input type="text" placeholder="Categories (Separated by ,)" className="writeInput writeCat" onChange={e=>setCat(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Enter the blog..."
                                type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}>
                    </textarea>
                    
                </div>
            </form>
            
        </div>
    )
}
