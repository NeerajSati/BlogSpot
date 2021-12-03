import './singlePost.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
export default function SinglePost() {
    let {postid} = useParams();
    const [post,setPost]= useState({});
    useEffect(() => {
        const getPost = async() =>{
            const res = await axios.get("/posts/"+postid);
            setPost(res.data);
        }
        getPost();
    })
    return (
        <div className="singlepost" >
        <div className="singlePostWrapper" >
        {post.photo && (<img src={post.photo} alt="PostImage" className="singlePostImage"></img>)}
            
            <h1 className="singlePostTitle">{post.title}
            <div className="singlePostEdit">
            <i className="singlePostIcon fa fa-solid fa-pen-nib"></i>
            <i class="singlePostIcon fa fa-solid fa-trash"></i>
         </div>
            </h1>
            <div className="singlePostInfo">
            <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
            {post.desc}</p>
        </div>            
        </div>
    )
}