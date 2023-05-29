import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import Products from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux';
import { add_Cart } from '../Redux/action/Cart';

const Poduct = () => {

    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.Cart.cartData)

    const addToCart = (product) => {
        let newCart = [...cartData];
        let currentItem = newCart.find((item) => product.id === item.id);

        if (!currentItem) {
            currentItem = {...product};
            newCart.push(currentItem);
        } else{
            alert('Already Add to Cart')
        }
        dispatch(add_Cart(newCart))
    };

    return (
        <>
            <Row className='p-1' xs={12} md={12} lg={12} >
                {
                    Products?.map((val, i) => (
                        <Col xs lg="4" sm={12} className='mt-2' key={i} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" className="img-fluid" src={val.images[0]} style={{ height: '200px' } } />
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.description.substring(0, 40) + '.....'}
                                    </Card.Text>
                                    <button type="button" className="btn btn-outline-success" onClick={() => addToCart(val)}>Add to Cart</button>
                                    <span> </span>
                                    <button type="button" className="btn btn-outline-success" onClick={() => addToCart(val)}>Buy Now</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Poduct