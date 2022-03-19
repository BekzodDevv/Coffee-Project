import React from 'react'


const Cartt = ({ Toliq, Chala, CoffeePochka }) => {


    return (
        <>
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 text-center mx-auto  mt-5">
                <div className="card">
                    <div className="card-header text-center  pb-4">
                        <div className="text-center">
                            <img src={CoffeePochka} className="text-center pt-3" alt="CoffeePochka" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs16t my-4">
                                Coffee
                            </div>
                            <div className="ms-3">
                                <img src={Toliq} className="img-fluid" alt="Toliq" />
                                <img src={Toliq} className="img-fluid" alt="Toliq" />
                                <img src={Toliq} className="img-fluid" alt="Toliq" />
                                <img src={Toliq} className="img-fluid" alt="Toliq" />
                                <img src={Chala} className="img-fluid" alt="Chala" />
                            </div>
                        </div>
                        <div className="fs24 text-white">
                            brazil coffee gred
                        </div>
                        <div className="fs18 text-white mt-3">
                            Price - <span className="ccolor"> $320.00</span> / $358
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartt