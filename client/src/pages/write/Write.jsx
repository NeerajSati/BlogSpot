import './write.css';
import img from '../../img/dbg.jpg';
export default function Write() {
    return (
        <div className="write">
            <img className="writeImage" src={img} alt="ContentImage"></img>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                    <button className="writeSubmit">Publish</button>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Enter the blog..."
                                type="text" className="writeInput writeText">
                    </textarea>
                    
                </div>
            </form>
            
        </div>
    )
}
