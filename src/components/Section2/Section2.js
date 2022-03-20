import React from 'react'
import Coffee4 from "./../../images/coffee4.webp"
import Coffee5 from "./../../images/coffee5.webp"
import Coffee6 from "./../../images/coffee6.webp"



const Section2 = () => {

    return (
        <section className="section2 mt-5 pt-5" id="section2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12 text-center ps-4">
                        <div className="row text-white">
                            <div className="col-md-6 mt-4">
                                <img src={Coffee4} className="img-fluid" alt="Coffee4" />
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <img src={Coffee5} className="img-fluid" alt="Coffee5" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <img src={Coffee6} className="img-fluid" alt="Coffee6" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6  col-md-12 mt-4">
                        <div className="section2__col">
                            <div class="row align-items-center">
                                <div class="section2__texts col-md-12 py-5 px-5">
                                    <div className="fs18 mt-5">
                                        Our history
                                    </div>
                                    <div className="fs48  my-4 text-white">
                                        Create a
                                         <br />
                                        new story with us
                                    </div>
                                    <div className="fs16 text-white">
                                        mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                                        atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Section2