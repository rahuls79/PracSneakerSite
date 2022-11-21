import "./SneakerBody.css";
import p1 from "../images/image-product-1.jpg";
import p2 from "../images/image-product-2.jpg";
import p3 from "../images/image-product-3.jpg";
import p4 from "../images/image-product-4.jpg";
import cart from "../images/icon-cart.svg";
import React,{useState} from 'react';
import Preview from "./Preview";
import PreviewOption from "./PreviewOption";


const SneakerBody = ({setCartValue}) =>{

    const [initialState,updatedState] = useState(1);

   const onIncrement = () =>{
    updatedState(initialState+1)
   };

   const onDecrement = () =>{
    updatedState(initialState-1)
   };


   const addItem = (event) =>{
    const amount = 125 * initialState;
    setCartValue(amount);
    console.log(amount)
   }



//    const image1 = (event) =>{
//     event.preventDefault();
//     document.getElementById('preview').src = p1;
//    }
//    function image2(event){
//     event.preventDefault();
//     let img1= document.getElementById("preview");
//     img1.src = p2;
//    }

//    const image3 = (event) =>{
//     event.preventDefault();
//     document.getElementById('preview').src = p3;
//    }
//    const image4 = (event) =>{
//     event.preventDefault();
//     document.getElementById('preview').src = p4;
//    }
   
   const [prevSrc, setPrevSrc] = useState(p1);

    return(
        
        <>
        <div className = "sneaker-details">
            <div className = "sneaker-images">
                <div className = "prev-image">
                    {/* <img src = {p1} id="preview"></img> */}
                    <Preview prevSrc={prevSrc} />
                    
                </div>
                <div className = "image-options">
                <div id="carouselExampleSlidesOnly" className="carousel-slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={p1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={p2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={p3} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={p4} alt="Fourth slide" />
                        </div>
                    </div>
                </div>
                    <PreviewOption imageSrc={p1} setPrevSrc={setPrevSrc} />
                    <PreviewOption imageSrc={p2} setPrevSrc={setPrevSrc} />
                    <PreviewOption imageSrc={p3} setPrevSrc={setPrevSrc} />
                    <PreviewOption imageSrc={p4} setPrevSrc={setPrevSrc} />
                </div>
            </div>
            <div className = "sneaker-desc">
                <h5>SNEAKER COMPANY</h5>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber sole,
                    they'll withstand everything the weather has to offer. </p>
                <div className = "amount">
                    <h2>$125.00</h2> <span>50% OFF</span>
                </div>
                <p><s>$250.00</s></p>
                <div className = "button-values">
                    <div className = "value-select">
                        <button type="button" class="btn btn-light" onClick={onDecrement}>-</button>
                        <button type="button" class="btn btn-light" value="startValue">{initialState}</button>
                        <button type="button" class="btn btn-light" onClick={onIncrement}>+</button>
                    </div>
                    <div className = "add-value">
                        <button type="button" class="btn btn-warning" onClick={addItem}>Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>

    )
}

export default SneakerBody;