import React,{useState, useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser)
    const[input, setInput] = useState("");
    const[posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc =>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            description: user.email,
            message:input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');

    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo'
                        color="#70B5F9"
                    />
                    <InputOptions Icon={YouTubeIcon} title='Video'
                        color="#E7A33E"
                    />
                    <InputOptions Icon={EventAvailableIcon} title='Event'
                        color="#COCBCD"
                    />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write'
                        color="#7FC15E"
                    />
                </div>
            </div>


            <FlipMove>
                {posts.map(({ id, data : { name, description, message, 
                    photoUrl }}) => (
            
                <Post 
                    key={id}
                    name={name}
                    description={description} 
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
           
        </div>
    )
}

export default Feed
