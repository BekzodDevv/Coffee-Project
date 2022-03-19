import React, { useState } from 'react'
import Cart from "../Cart";
import Coffee1 from "./../../images/coffee1.webp"
import Coffee2 from "./../../images/coffee2.webp"
import Coffee3 from "./../../images/coffee3.webp"


const Section1 = () => {
    const [sta, setSta] = useState([
        {
            "id": 1,
            "title": "Best Coffee Flavour",
            "image": `${Coffee1}`
        },
        {
            "id": 2,
            "title": "Place to get lost",
            "image": `${Coffee2}`
        },
        {
            "id": 3,
            "title": "Proper roesting",
            "image": `${Coffee3}`
        },
    ])


    return (
        <div className="section1 mt-5 pt-3" id="section1">
            <div className="container">
                <div className="row">
                    {sta.map(({ id, title, image }) => (
                        <Cart id={id} title={title} image={image} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Section1