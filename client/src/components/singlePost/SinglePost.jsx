import './singlePost.css'
import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import {Context} from '../../context/Context'

export default function SinglePost() {
    const {user} = useContext(Context);
    const origin = "http://localhost:5000/images/";
    let {postid} = useParams();
    const [post,setPost]= useState({});
    const [title,setTitle]= useState("");
    const [categories,setCategories]= useState([]);
    const [desc,setDesc]= useState("");
    const [updateMode,setUpdateMode]= useState(false);
    useEffect(() => {
        const getPost = async() =>{
            const res = await axios.get("/posts/"+postid);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setCategories(res.data.categories);
        }
        getPost();
    },[postid])
    const handleDelete = async()=>{
        try {
            await axios.delete(`/posts/${post._id}`,{data: {username:user.username}})
            window.location.replace("/")
        } catch (error) {
            
        }
    }
    const handleUpdate = async()=>{
        try {
            await axios.put(`/posts/${post._id}`,{username:user.username, title, desc})
            setUpdateMode(false);
        } catch (error) {
            
        }
    }
    return (
        <div className="singlepost" >
        <div className="singlePostWrapper" >
        {post.photo && (<img src={origin + post.photo} alt="PostImage" className="singlePostImage"></img>)}
            {updateMode? <input type="text" autoFocus className="singlePostTitleInput" value={title} onChange={(e)=>setTitle(e.target.value)}/> 
                        :    <h1 className="singlePostTitle">{title}
                {post.username === user?.username && 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa fa-solid fa-pen-nib" onClick={()=>setUpdateMode(true)}></i>
                <i class="singlePostIcon fa fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
                }
                </h1>
        }
            <div className="singlePostInfo">
            <span className="singlePostAuthor">
            Author: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link>
            </span>
            <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}</span>
            {categories.map((c)=>(
                <Link to={`/?cat=${c}`} className="link"><span className="singlePostCat">{c} | </span></Link>
            ))}


            </div>
            {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> :
            <p className="singlePostDesc">
            {desc}</p>
            }
            {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
        </div>            
        </div>
    )
}