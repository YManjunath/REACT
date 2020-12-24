import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className="widget">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Drop ")}
            {newsArticle("Beat ")}
            {newsArticle("spaceX ")}
        </div>
    )
}

export default Widget
