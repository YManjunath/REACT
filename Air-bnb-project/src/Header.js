import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
        <Link to="/">
            <img className="header_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
            alt="airbnb-logo"
            />
        </Link>
            <div className="header_center">
                <input value="Start your search" type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                 <Avatar />
            </div>
        </div>
    )
}

export default Header;
