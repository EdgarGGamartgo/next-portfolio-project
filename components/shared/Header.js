import Link from 'next/link'
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

const BsNavLink = props => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const BsNavBrand = () =>
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">Edgar Martinez</a>
    </Link>

const LoginLink = () =>
    <span className="nav-link port-navbar-link clickable">Login</span>

const LogoutLink = () =>
    <span className="nav-link port-navbar-link clickable">Logout</span>

export const Header = () => {

    const [isOpen, setOpen] = useState(false)


    const toggle = () => {
        setOpen(!isOpen)
    }

    return (
        // <>
        /* <p className='customClass'>I am a styled P element</p>
    <p className='customClassFromFile'>I am a styled P element</p> */
        /* <Link href='/'>
            {/* <a style={
            {
                'fontSize': '20px'
            }
        }> Home </a> */
        //     <a> Home </a>
        // </Link>
        // <Link href='/about'>
        //     <a> About </a>
        // </Link>
        // <Link href='/portfolios'>
        //     <a> Portfolios </a>
        // </Link>
        // <Link href='/blogs'>
        //     <a> Blogs </a>
        // </Link>
        // <Link href='/cv'>
        //     <a> CV </a>
        // </Link> 
        /* <style jsx global>
        {
            `
                 .customClass {
                     color: red
            }
            `
        }
    </style> */
        // </>
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md">
                <BsNavBrand />
                <NavbarToggler onClick={() => toggle()} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/blogs" title="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/cv" title="Cv" />
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="port-navbar-item">
                            <LoginLink />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <LogoutLink />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}