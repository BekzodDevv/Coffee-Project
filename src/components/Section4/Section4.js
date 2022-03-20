import React from 'react'
import Machina from "./../../images/machina.webp"




const Section4 = () => {


    return (
        <section className="container mt-5" id="section4">
            <div className="section4 py-4">
                <div className="row">
                    <div className="col-md-6 align-self-center alitn-items-center mx-auto text-center py-5 ">
                        <img src={Machina} className="img-fluid " alt="Machina" />
                    </div>
                    <div className="section4__col2 col-md-6 align-self-center alitn-items-center px-4 pt-2">
                        <div className="fs48 text-white">
                            Coffee  <br />
                            machine, buy for home
                        </div>
                        <div className="text-white mt-3 mb-2">
                            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula
                            volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib
                            maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri
                            ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                        </div>
                        <button className="buttonn mt-5 text-white">
                            Discover now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Section4