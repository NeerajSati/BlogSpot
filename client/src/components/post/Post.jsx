import { Link } from "react-router-dom";
import "./post.css";
function post({ post }) {
  const origin = "https://nodeblogspot.herokuapp.com/images/";
  const random = Math.floor(Math.random() * 25 + 10);
  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="link">
          <img
            className="postImg"
            src={origin + post.photo}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/2500/16${random}`;
            }}
            alt="PostImage"
          ></img>
        </Link>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <Link to={`/?cat=${c}`} className="link">
              <span className="postCat">{c}</span>
            </Link>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <br />
        <Link className="link" to={`/?user=${post.username}`}>
          <span className="postDate">
            Author: {post.username} | {new Date(post.createdAt).toDateString()}
          </span>
        </Link>
      </div>
      <Link to={`/post/${post._id}`} className="link">
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
}

export default post;
