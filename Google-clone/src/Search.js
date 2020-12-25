import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'


function Search({ hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    const[input,setInput] = useState("");
    const history = useHistory();

    const search = (e) =>{
        e.preventDefault();
        
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // push to /search page
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_icon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search}>Google Search</Button>
                    <Button variant="outlained">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_buttonsHidden" type="submit" onClick={search}>Google Search</Button>
                    <Button className="search_buttonsHidden" variant="outlained">I'm Feeling Lucky</Button>
                </div>
            )}

            

        </form>
    )
}

export default Search
