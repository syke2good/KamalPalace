import React from "react";
import styled from 'styled-components';
import foodYummy from '../assets/FoodYummy.png';


export default function Navbar() {
    return (
        <Nav>
            <div className="brand">
                <img src={foodYummy} alt="" />
                <div className="toogle"></div>
            </div>
            <ul className="links">
                <li>
                    <a href="#home" className="active"> Home</a>
                </li>
                <li>
                    <a href="#services">Our Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testomonials">Testomonials</a>
                </li>
                <li>
                    <a href="#products">Products</a>
                </li>
                <li>
                    <a href="#newsletter">Newsletter</a>
                </li>
            </ul>
        </Nav>
    );


}
const Nav = styled.nav`
    display: flex;
    justify-content: spacing-between;
    align-items: center;
    padding: 0 4vw;
.brand {
    img {
        margin-top: 1rem;
        cursor: pointer;
    }
    .toogle {
        display: none;
    }
}
.links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
        a{
            color: #fc4958;
            font weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            transition: 0.3s ease-in-out;
            &:hover {
                color: #f9c74f
            }
        }
        .active {
            color: #f9c74f
        }
    }
}
`;
