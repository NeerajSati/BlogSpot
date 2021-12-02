import './setting.css'
import img from '../../img/dbg.jpg'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Setting() {
    return (
        <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src={img} alt="ProfileImage"/>
                <label htmlFor="fileInput"><i className=" settingPPIcon fa far fa-user-circle"></i></label>
                <input type="file"  style={{display: 'none'}} ></input>
            </div>
            <label>Username</label>
            <input type="text" placeholder="User"></input>
            <label>Email</label>
            <input type="email" placeholder="user@email.com"></input>
            <label>Password</label>
            <input type="password" ></input>
            <button className="settingSubmit">Submit</button>
            </form>
        </div>
        <Sidebar/>
        </div>
    )
}
