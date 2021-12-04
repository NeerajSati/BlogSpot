import './singlePost.css'
import {axiosInstance} from '../../config';
import {useContext, useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import {Context} from '../../context/Context'

export default function SinglePost() {
    const {user} = useContext(Context);
    const origin = "https://nodeblogspot.herokuapp.com/images/";
    let {postid} = useParams();
    const [post,setPost]= useState({});
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    const [updateMode,setUpdateMode]= useState(false);
    useEffect(() => {
        const getPost = async() =>{
            const res = await axiosInstance.get("/posts/"+postid);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[postid])
    const handleDelete = async()=>{
        try {
            await axiosInstance.delete(`/posts/${post._id}`,{data: {username:user.username}})
            window.location.replace("/")
        } catch (error) {
            
        }
    }
    const handleUpdate = async()=>{
        try {
            await axiosInstance.put(`/posts/${post._id}`,{username:user.username, title, desc})
            setUpdateMode(false);
        } catch (error) {
            
        }
    }
    return (
        <div className="singlepost" >
        <div className="singlePostWrapper" >
        {post.photo && (<img src={origin + post.photo} onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/2500/1667"}} alt="PostImage" className="singlePostImage"></img>)}
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