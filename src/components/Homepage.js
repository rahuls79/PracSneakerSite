import "./Homepage.css";
import SneakerBody from "./SneakerBody";
import Header from "./Header";
import { useState } from "react";

const Homepage = () =>{

    const [cartValue,setCartValue] = useState(0);

    return(
        <>
        <div className = "homepage-layout">
            <Header cartValue = {cartValue}/>
            <SneakerBody setCartValue = {setCartValue}/>
        </div>
        
        </>

    )
}

export default Homepage;