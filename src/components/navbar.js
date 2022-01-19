import React, { useState } from 'react'
import { Link } from 'gatsby'
import { container, navelems } from './navbar.module.css'
import { linktext } from './main.module.css'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../images/aq.png'

const Global = createGlobalStyle`
    body, html {
        overflow-x: hidden;
    }
`

const MenuIcon = styled.button`
        position: fixed;
        top: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.5rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 8;

    div {
        width: 1.5rem;
        height: 0.2em;
        background: black;
        border-radius: 2px;
        transform-origin: 1px;
        position: relative;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({nav}) => (nav ? '0' : '1')};
        }

        :nth-child(3) {
            transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`

const MenuLinks = styled.nav`
    display: flex;
    background: #ffd1aa;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    width: 25%;
    right: 0;
    transition: 300ms;
    transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};
    z-index: 5;

    ul {
        h4 {
            font-size: 2rem;
            transition: color 400ms;
            :hover {
                color: #ff8b27;
            }
        }
    }
`

const Navbar = () => {

    const [nav, showNav] = useState(false)

    return (
        <div className={container}>
            <Global />
            <div><Link to='/' className={linktext}><img src={logo} className='logo' /></Link></div>
            {/* <ul className={navelems}>
                    <Link to='/' className={linktext}><h4>Home</h4></Link>
                    <Link to='/projects' className={linktext}><h4>{'\u00A0'}Projects</h4></Link>
                    <Link to='/hellothere' className={linktext}><h4>{'\u00A0'}About</h4></Link>
                </ul> */}

            <div>
                <MenuIcon onClick={() => showNav(!nav)}>
                    <div />
                    <div />
                    <div />
                </MenuIcon>
                <MenuLinks nav={nav}>
                    <ul>
                        <Link to='/' className={linktext}><h4>Home</h4></Link>
                        <Link to='/projects' className={linktext}><h4>Projects</h4></Link>
                        <Link to='/hellothere' className={linktext}><h4>About</h4></Link>
                    </ul>
                </MenuLinks>
            </div>


        </div>
    )
}

export default Navbar

// {'\u00A0'} does the same thing as nbsp