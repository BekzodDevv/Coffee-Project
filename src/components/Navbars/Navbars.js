import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink
} from "reactstrap";
import Logo from "./../../images/Logo.svg";
import Search from "./../../images/search.svg";
import Shopping from "./../../images/shopping.svg";
import { Scrollchor } from 'react-scrollchor';





const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)


    return (
        <navbar>
            <Navbar
                expand="md"
                light
            >
                <Scrollchor to="#header">
                    <NavbarBrand className="mx-5 d-none logo">
                        <img src={Logo} className=" mx-auto" alt="search" />
                    </NavbarBrand>
                </Scrollchor>

                <NavbarToggler
                    className="me-2 ms-auto text-white bg-white"
                    onClick={toggle}
                >

                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav onClick={toggle} className="mx-auto cursor text-center " navbar>
                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#header" className="text-white navbarfs18">
                                    Home
                                </Scrollchor>
                            </NavLink>
                        </NavItem>

                        <NavItem >
                            <NavLink>
                                <Scrollchor to="#section1" className="text-white navbarfs18">
                                    About
                                </Scrollchor>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#section2" className="text-white navbarfs18">
                                    Menu
                                </Scrollchor>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#section3" className="text-white navbarfs18">
                                    Reservation
                                </Scrollchor>
                            </NavLink>
                        </NavItem>


                        <Scrollchor to="#header">
                            <NavbarBrand className="mx-5">
                                <img src={Logo} className=" mx-auto" alt="search" />
                            </NavbarBrand>
                        </Scrollchor>


                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#section4" className="text-white navbarfs18">
                                    Pages
                                </Scrollchor>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#section5" className="text-white navbarfs18">
                                    Shop
                                </Scrollchor>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Scrollchor to="#section6" className="text-white navbarfs18">
                                    Contact
                                </Scrollchor>
                            </NavLink>
                        </NavItem>


                        <div className="itemss d-flex align-items-center justify-content-center">
                            <NavItem className="text-black text-dark">
                                <img src={Search} className="search img-fluid me-2" alt="search" />
                            </NavItem>

                            <NavItem>
                                <img src={Shopping} className="shopping img-fluid" alt="search" />
                            </NavItem>
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </navbar>
    )
}

export default Navbars
