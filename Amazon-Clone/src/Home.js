import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt=""/>
            
            <div className="home_row">
                <Product 
                    id="1045201"
                    title="New Apple iPhone 11 (64GB) - Black"
                    image="https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY327_FMwebp_QL65_.jpg"
                    price="₹51,999"
                    rating={4}
                />

                <Product 
                    id="104520100045"
                    title="Samsung Galaxy A71 (Prism Crush Black, 8GB RAM, 128GB Storage)"
                    image="https://m.media-amazon.com/images/I/71Wh8ZPcGBL._AC_UY327_FMwebp_QL65_.jpg"
                    price="₹29,499.00"
                    rating={4}
                />
            </div>

            <div className="home_row">
            <Product 
                    id="1045201145"
                    title="Casio G-Shock Analog Black Dial Men's Watch - GST-B100-1ADR (G789)"
                    image="https://m.media-amazon.com/images/I/71lW6xkYRHL._AC_UL480_FMwebp_QL65_.jpg"
                    price="₹20,995.00"
                    rating={5}
                />

                <Product 
                    id="10452010021"
                    title="Apple AirPods with Charging Case"
                    image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY327_FMwebp_QL65_.jpg"
                    price="₹12,490.00"
                    rating={4}
                />
                  <Product 
                    id="10452001458"
                    title="Lenovo IdeaPad Flex 5 AMD Ryzen 5 4500U 14-inch FHD IPS 2-in-1 Convertible Laptop (8GB/512GB SSD/Windows 10)"
                    image="https://m.media-amazon.com/images/I/717PHDbymML._AC_UY327_FMwebp_QL65_.jpg"
                    price="₹58,998.00"
                    rating={4}
                />
            </div>

            <div className="home_row">
                 <Product 
                    id="104522015"
                    title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver) (2020 Model)"
                    image="https://m.media-amazon.com/images/I/71KVQa4N4zL._AC_UY327_FMwebp_QL65_.jpg"
                    price="	₹ 1,33,490.00"
                    rating={4}
                 />
            </div>
         
        </div>
    )
}

export default Home
