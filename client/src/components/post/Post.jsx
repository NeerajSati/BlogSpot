import {Link} from 'react-router-dom'
import './post.css'
function post({post}) {
    const origin = "http://localhost:5000/images/";
    return (
        <div className="post">
        
        {post.photo && (
            <img className="postImg" src={origin + post.photo} alt="PostImage"></img>
        )}
        <div className="postInfo">
            <div className="postCats">
                {post.categories.map((c)=>(
                    <span className="postCat">{c.name}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">
                {post.title}
            </span>
            </Link>
            
            <br/>
            <Link className="link" to={`/?user=${post.username}`}>
            <span className="postDate">
            Author: {post.username} | {new Date(post.createdAt).toDateString()}
            </span>
            </Link>
        </div>
        <p className="postDesc">
        {post.desc}</p>
        </div>
    )
}

export default post
