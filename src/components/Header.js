import "./Header.css";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";


const Header = () =>{

    return(
        <>
        <div className = "header-content">
            <div className = "header-categories">
                <img src = {logo}></img>
                <button>Collections</button>
                <button>Men</button>
                <button>Women</button>
                <button>About</button>
                <button>Contact</button>
            </div>
            <div className = "header-profile">
                <img src = {cart} width = "40px" padding-right = "50px" className = "image-cart"></img>
                <img src = {avatar} width = "43px" padding-left = "25px" className = "image-avatar"></img>
            </div>
        </div>
        
        </>

    )
}

export default Header;