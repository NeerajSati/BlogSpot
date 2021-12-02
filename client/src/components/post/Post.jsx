import React from 'react'
import './post.css'
import postimg from '../../img/user.png'
function post() {
    return (
        <div className="post">
            <img className="postImg" src={postimg} alt="PostImage"></img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">HTML</span>
                <span className="postCat">CSS</span>
            </div>
            <span className="postTitle">
                New React Announcement
            </span>
            <br/>
            <span className="postDate">
                11 Hour ago
            </span>
        </div>
        <p className="postDesc">
        loprem iopsum metri metrh heris rfjdhu dnsuf ejuidb afnhuffenf skeunqwfd cbyebfk jnfuf
        jwufbwfjwf jnfuhfuf fwuhfuhfu ujfwuf ufwufhuh ufwufwfn nwufw ufwufwhf ufwufhwuhf fewuf
        jfnbdujwfb nfuuf iufwnfuw  heris rfjdhu dnsuf ejuidb afnhuffenf skeunqwfd cbyebfk jnfuf
        jwufbwfjwf jnfuhfuf fwuhfuhfu ujfwuf ufwufhuh ufwufwfn nwufw ufwufwhf ufwufhwuhf fewuf
        jfnbdujwfb nfuuf iufwnfuw  heris rfjdhu dnsuf ejuidb afnhuffenf skeunqwfd cbyebfk jnfuf
        jwufbwfjwf jnfuhfuf fwuhfuhfu ujfwuf ufwufhuh ufwufwfn nwufw ufwufwhf ufwufhwuhf fewuf
        jfnbdujwfb nfuuf iufwnfuw  heris rfjdhu dnsuf ejuidb afnhuffenf skeunqwfd cbyebfk jnfuf
        jwufbwfjwf jnfuhfuf fwuhfuhfu ujfwuf ufwufhuh ufwufwfn nwufw ufwufwhf ufwufhwuhf fewuf
        jfnbdujwfb nfuuf iufwnfuw</p>
        </div>
    )
}

export default post
