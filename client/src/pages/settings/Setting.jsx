import './setting.css'
import img from '../../img/user.png'
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import {Context} from '../../context/Context'
import {useContext,useState} from 'react'
export default function Setting() {
    const origin = "http://localhost:5000/images/";

    const[file,setFile] = useState(null);
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id
        }
        if(file){
            const data = new FormData();
            console.log(FormData);
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload",data)
            } catch (error) {
                dispatch({type:"UPDATE_FAILURE"})
            }
            try{
            const res = await axios.put("/users/"+user._id,updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
            }catch(err){
                dispatch({type:"UPDATE_FAILURE"})
            }
        }
    }

    return (
        <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Profile Picture</span>
                <span className="settingDeleteTitle" onClick={handleDelete}>Delete Account</span>
            </div>
            <form className="settingForm"  onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src={(file ? URL.createObjectURL(file) : (origin + user.profilePic)) || img} alt="ProfileImage"/>
                <label htmlFor="fileInput"><i className=" settingPPIcon fa far fa-user-circle"></i></label>
                <input type="file" id="fileInput" style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])} ></input>
            </div>
            <button className="settingSubmit" type="submit">Submit</button>
            
            {success && <span className="settingSpan">Profile Pic Updated Successfully!</span>}
            </form>
        </div>
        <Sidebar/>
        </div>
    )
}
