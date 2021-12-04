import './setting.css'
import {axiosInstance} from '../../config';
import Sidebar from '../../components/sidebar/Sidebar'
import {Context} from '../../context/Context'
import {useContext,useState} from 'react'
export default function Setting() {
    const origin = "https://nodeblogspot.herokuapp.com/images/";

    const[file,setFile] = useState(null);
    const[success,setSuccess] = useState(false);
    const {user,dispatch} = useContext(Context);
    const handleDelete = async()=>{
        try {
            await axiosInstance.delete(`/users/${user._id}`,{data: {userId:user._id}})
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
                await axiosInstance.post("/upload",data)
            } catch (error) {
                dispatch({type:"UPDATE_FAILURE"})
            }
            try{
            const res = await axiosInstance.put("/users/"+user._id,updatedUser);
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
                <img src={(file ? URL.createObjectURL(file) : (origin + user.profilePic))} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.pexels.com/photos/4588031/pexels-photo-4588031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} alt="ProfileImage"/>
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
