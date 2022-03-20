import React from 'react'
import Logo from "./../../images/Logo.svg";
import { Scrollchor } from 'react-scrollchor';


const Footer = () => {
    return (
        <footer className="footer container">
            {/* <div className="row m-5">
                <div className="col-md-12 d-flex justify-content-between align-items-center">

                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <Scrollchor to="#header" className="text-white">
                        Home
                    </Scrollchor>
                    <div className="footer__inputs d-flex align-items-center">
                        <input
                            type="text"
                            placeholder='Enter your email'
                            className="footer__input d-block w-100 mx-auto ps-3"
                        />
                        <div className="footer__arrow text-white">
                            &#x2192;
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="d-flex flex-wrap align-items-center justify-content-between my-5">
                <div className="">
                    <img src={Logo} className="img-fluid" alt="logo" />
                </div>
                <Scrollchor to="#header" className="text-white mx-2">
                    Home
                </Scrollchor>
                <Scrollchor to="#section1" className="text-white mx-2">
                    About
                </Scrollchor>
                <Scrollchor to="#section2" className="text-white mx-2">
                    Menu
                </Scrollchor>
                <Scrollchor to="#section3" className="text-white mx-2">
                    Reservation
                </Scrollchor>
                <Scrollchor to="#section4" className="text-white mx-2">
                    Pages
                </Scrollchor>
                <Scrollchor to="#section5" className="text-white mx-2">
                    Shop
                </Scrollchor>
                <Scrollchor to="#section6" className="text-white mx-2">
                    Contact
                </Scrollchor>
                <div className="footer__inputs d-flex align-items-center justify-content-center">
                    <input
                        type="text"
                        placeholder='Enter your email'
                        className="footer__input d-block w-100 mx-auto ps-3"
                    />
                    <div className="footer__arrow text-white">
                        &#x2192;
                    </div>
                </div>
            </div>
            {/* <div class="container">
                <div class="row row-cols-1 row-cols-lg-6">
                    <div class="col">
                        <div class="">
                            <div className="">
                                <img src={Logo} className="img-fluid" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                    <div class="col">
                        <div class=" border bg-light">Row column</div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer