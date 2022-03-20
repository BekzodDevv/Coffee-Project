import React from 'react'
import Titles from '../Titles'



const Section7 = () => {

    return (
        <div className="container mt-5 pt-5">
            <section className="section7">
                <div className="row">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53786.00999201169!2d69.3117669778044!3d41.35522318016493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef33583720a2b%3A0x73201d38ca481045!2sMEGA%20PLANET!5e0!3m2!1sen!2s!4v1647674717777!5m2!1sen!2s"
                            width="100%" height="600px" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                    <div className="col-md-6 mt-4 align-self-center alitn-items-center">
                        <div className="mb-5">
                            <Titles title1="Reservation" title2="Booking a table" />
                        </div>

                        <div className="section7__inputs text-white">
                            <input
                                type="text"
                                placeholder='4 person'
                                className="section7__input d-block w-75 mx-auto mt-4 ps-3"
                            />

                            <input
                                type="text"
                                placeholder='12.25, 2020'
                                className="section7__input d-block  w-75 mx-auto mt-4 ps-3"
                            />

                            <input
                                type="text"
                                placeholder='11:00 AM'
                                className="section7__input d-block  w-75 mx-auto mt-4 ps-3"
                            />

                            <div className="mx-auto text-center">
                                <button className="buttonn my-5  text-white">
                                    BOOK S TABLE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Section7