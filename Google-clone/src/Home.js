import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from './Search'


function Home() {
    return (
        <div className="home">

            <div className="home_header">
                <div className="header_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="header_right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar />
                </div>
            </div>

            <div className="home_body">
                <img 
                    className="home_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                    alt=""
                    />
            </div>

            <div className="home_inputContainer">
                <Search />
            </div>

        </div>
    )
}

export default Home
