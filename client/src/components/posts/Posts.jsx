import Post from '../post/Post'
import './posts.css'

function Posts({posts}) {
    return (
        <div className="posts">
        {posts.map(post=>(
            
            <Post post = {post}/>

        ))}
        </div>
    )
}

export default Posts
