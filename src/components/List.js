import React from 'react'

const List = ({ image, title, price }) => {
    return (
        <div className="section5__cols col-md-5  mx-auto mt-5 d-flex align-items-center">
            <div className="p-4 section5__colsss">
                <img src={image} className="img-fluid" alt="Bg1" />
            </div>
            <div className="section5__titles text-white fs244">
                {title}
            </div>
            <div className="fs188 ms-auto me-3">
                {price}
            </div>
        </div>
    )
}

export default List