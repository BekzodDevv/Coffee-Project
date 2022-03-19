import React from 'react'


const Carousell = ({Star, image}) => {
    return (

        <div className="card p-4">
            <div className="card-header  d-flex align-items-center justify-content-center">
                <div className="img mx-auto">
                    <img src={image} className="imagess img-fluid w-100 h-100" alt="image" />
                </div>
                <div className="fs166 ps-4">
                    Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..
                </div>
            </div>
            <div className="card-body d-flex align-items-center justify-content-between">
                <div className="">
                    <div className="fs18 text-white">
                        John Smith
                    </div>
                    <div className="fs14 mt-2">
                        Designer
                    </div>
                </div>
                <div className="mt-3 d-flex align-items-center me-4">
                    <img src={Star} className="img-fluid w-100 h-100" alt="star" />
                    <img src={Star} className="img-fluid w-100 h-100" alt="star" />
                    <img src={Star} className="img-fluid w-100 h-100" alt="star" />
                    <img src={Star} className="img-fluid w-100 h-100" alt="star" />
                    <img src={Star} className="img-fluid w-100 h-100" alt="star" />
                </div>
            </div>
        </div>


    )
}

export default Carousell