import React from 'react'
// import News1 from "../images/news1.webp"
// import News1 from "../images/banner.webp";


const Cart = ({ id, title, image }) => {
    return (
        <div className="carts col-md-4 col-sm-12 col-12" key={id}>
            <div className="card">
                <div className="card-header">
                    <div className="carts__titles d-flex align-items-center  mb-3">
                        <div className="carts__id fs24">0{id}</div>
                        <div className="carts__title ms-3 fs244">{title}</div>
                    </div>
                    <div className="carts__images">
                        <img src={image} className="carts__image img-fluid" alt="News1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart