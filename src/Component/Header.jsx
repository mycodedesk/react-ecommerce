import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartData = useSelector((state) => state.Cart.cartData)
    return (
        <Navbar  style={{ background: 'black' }}>
            <Container className='road'>
                <Navbar.Brand href="#home" style={{ color: 'white' }}> Modi Mobiles </Navbar.Brand>
                <span><p style={{ color: 'white', cursor:'pointer'}}>Your cart <span>{cartData.length}</span></p></span>
            </Container>
        </Navbar>
    )
}

export default Header


