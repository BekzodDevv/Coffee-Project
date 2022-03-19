import React, { useState, useRef, useEffect } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown
} from "reactstrap";
import Logo from "./Logo.svg";
import Search from "./search.svg";
import Shopping from "./shopping.svg";




const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)


    return (
        <navbar>
            <Navbar
                expand="md"
                light
            >
                        <NavbarBrand className="mx-5 d-none logo">
                            <img src={Logo} className=" mx-auto" alt="search" />
                        </NavbarBrand>

                <NavbarToggler
                    className="me-2 ms-auto text-white bg-white"
                    onClick={toggle}
                >

                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav onClick={toggle} className="mx-auto cursor" navbar>
                        <NavItem>
                            <NavLink to="" >
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem >
                            <NavLink to="About" >
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="Menu" >
                                Menu
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="Reservation">
                                Reservation
                            </NavLink>
                        </NavItem>


                        <NavbarBrand className="mx-5">
                            <img src={Logo} className=" mx-auto" alt="search" />
                        </NavbarBrand>


                        <NavItem>
                            <NavLink to="Pages">
                                Pages
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="Shop">
                                Shop
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="Contact">
                                Contact
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
                    {/* <NavbarText className="">
                        Simple Text
                    </NavbarText> */}
                </Collapse>
            </Navbar>
        </navbar>
    )
}

export default Navbars
