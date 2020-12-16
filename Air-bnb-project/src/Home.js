import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
                    title="Entire Homes"
                    description="Comfertable private places, with room for friends and family"
                    price="$350/night"
                />
                <Card
                src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=480"
                    title="Cabins and Cottages"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="$500/night"    
                />
                <Card src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
                    title="Unique Stays"
                    description="Places that are more than just to sleep"
                    price="$450/night"    
                />
            </div>
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/00108da0-5bf3-4ea3-b92a-e16948f19c1e.jpg?im_w=960"
                    title="Vista Del Lago"
                    description="Places that are more than just to sleep"                
                    price="$700/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/7bdb9522-190e-4b86-b523-3ac7868c8978.jpg?im_w=960"
                    title="Tree House"
                    description="Places that are more than just to sleep"
                    price="$650/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/4302ba2c-3df6-487c-bec0-55fea12bb4ca.jpg?im_w=960"
                    title="Pugmarks"
                    description="Places that are more than just to sleep"
                    price="$550/night"

                />
            </div>
        </div>
    )
}

export default Home;


//npm i react-router-dom