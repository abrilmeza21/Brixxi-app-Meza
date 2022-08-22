import React, { useState } from "react";

import {
    Container,
    LogoContainer,
    Wrapper,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
} from "./Navbar elements";
import {
    FaHeart,
    FaBars,
    FaTimes,
    FaHome,
    FaRainbow,
    FaPercent,
    FaSms,
} from "react-icons/fa";

import { CartWidjet } from "../Cart/cartWidget/CartWidget";
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    return (
        <Container>
            <Wrapper>

                <NavLink to="/">
                    <LogoContainer>
                        <FaHeart/>
                        <p>BRIXXI</p>
                        <p>Shop</p>
                    </LogoContainer>
                </NavLink>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink as={NavLink} to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHome />
                                    <h3>HOME</h3>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink as={NavLink} to = "/category/1" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaRainbow />
                                    <h3>CREMAS</h3>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink as={NavLink} to = "/category/2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaPercent />
                                    <h3>JABONES</h3>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink as={NavLink} to = "/category/3" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaSms />
                                    <h3>PROMOCIONES</h3>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink as={NavLink} to = "/cart" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div className="Cart">
                                <CartWidjet/>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                    </Menu>
            </Wrapper>
        </Container>
    );
};

export default NavBar;