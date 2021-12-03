import {Link} from 'react-router-dom'
import './post.css'
function post({post}) {
    return (
        <div className="post">
        {post.photo && (
            <img className="postImg" src={post.photo} alt="PostImage"></img>
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
            <span className="postDate">
                {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className="postDesc">
        {post.desc}</p>
        </div>
    )
}

export default post
