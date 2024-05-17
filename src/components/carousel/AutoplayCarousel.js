import React from "react";
import { cardDetails } from "./CarouselConfig";
import "../../styles/Carousel.css"
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {

    //lowkey this is such as sketchy way to do this but i don't care!
    const extendedCardDetails = [
        ...Object.values(cardDetails), 
        {...cardDetails[0]}, 
        {...cardDetails[1]}, 
        {...cardDetails[2]},
        {...cardDetails[3]}, 
        {...cardDetails[4]}, 
        {...cardDetails[5]}, 
        {...cardDetails[6]} 
    ]; 

    return (
        <div className="carousel-container">
            {/*<h1> Can Put Text Here </h1>*/}
            <div className="carousel-track">
                {extendedCardDetails.map((item, index) => (
                    <CarouselItem
                        key={index}
                        imgUrl={item.imgUrl}
                        imgTitle={item.title}
                    ></CarouselItem>
                ))}
            </div>
        </div>
    );
}
