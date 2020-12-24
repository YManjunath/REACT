import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <span>{topic}</span>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar_top">
                <img 
                    src="https://i.pinimg.com/564x/0d/cf/ca/0dcfca60774fad81d4f4d7cd70449615.jpg" 
                    alt=""
                />
                <Avatar className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">1116</p>
                </div>
                <div className="sidebar__stat">
                    <p>views of your post</p>
                    <p className="sidebar__statNumber">481</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItems("Reactjs")}
                {recentItems("Programming")}
                {recentItems('Software engineer')}
                {recentItems('Machine Learning')}
                {recentItems('Data science')}
                {recentItems('AI')}
            </div>

        </div>
    )
}

export default Sidebar
