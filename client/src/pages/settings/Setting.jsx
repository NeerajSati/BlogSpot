import './setting.css'
import img from '../../img/user.png'
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import {Context} from '../../context/Context'
import {useContext,useState} from 'react'
export default function Setting() {

    const[success,setSuccess] = useState(false);
    const {user,dispatch} = useContext(Context);
    const handleDelete = async()=>{
        try {
            await axios.delete(`/users/${user._id}`,{data: {userId:user._id}})
            dispatch({type:"LOGOUT"})
            window.location.replace("/")
        } catch (error) {
            
        }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
        } catch (error) {
            
        }
    }
    return (
        <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Profile Picture</span>
                <span className="settingDeleteTitle" onClick={handleDelete}>Delete Account</span>
            </div>
            <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src={user.profilePic || img} alt="ProfileImage"/>
                <label htmlFor="fileInput"><i className=" settingPPIcon fa far fa-user-circle"></i></label>
                <input type="file"  style={{display: 'none'}} ></input>
            </div>
            <button className="settingSubmit" onClick={handleSubmit}>Submit</button>
            
            {success && <span className="settingSpan">Profile Pic Updated Successfully!</span>}
            </form>
        </div>
        <Sidebar/>
        </div>
    )
}
