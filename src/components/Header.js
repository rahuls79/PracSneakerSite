import "./Header.css";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import p1 from "../images/image-product-1.jpg";


const Header = (props) =>{

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
                    <div className="dropdown">
                        <img src = {cart} width = "40px" padding-right = "50px" className = "image-cart"></img>
                        <div class="dropdown-content">
                            <h5>Cart</h5>
                            <div className="cart-details">
                                <div className="cart-image">
                                    <img src = {p1}/>
                                </div>
                                <div className="quantity">
                                    <p>{props.amount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <img src = {avatar} width = "43px" padding-left = "25px" className = "image-avatar"></img>
            </div>
        </div>
        
        </>

    )
}

export default Header;