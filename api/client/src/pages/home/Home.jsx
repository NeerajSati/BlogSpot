import Header from '../../components/header/Header'
import {useEffect,useState} from 'react'
import {useLocation} from 'react-router'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css';
import {axiosInstance} from '../../config';

function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axiosInstance.get("/posts"+ search);
            setPosts(res.data)
        }
        fetchPosts();
    }, [search])
    return (
        <>
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}

export default Home;
