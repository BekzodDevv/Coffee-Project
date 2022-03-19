import React from 'react'

const Section8Card = ({ image }) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <div className="card-header">
                    <div className="">
                        <img src={image} className="img-fluid" alt="news1" />
                    </div>
                </div>
                <div className="card-body ">
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <div className="fs1888 text-white">
                            <span className="fs18">By:</span> rasaline
                        </div>
                        <div className="fs18 text-white">
                            23.01.2021
                        </div>
                    </div>
                    <div className="fs20 text-white mt-3">
                        Ideal cocktails from barmen....
                    </div>
                    <div className="fs16arrow mt-5">
                        Read More &#x2192;

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section8Card