import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Poduct from './Poduct'
import Cart from './Cart'
import Summary from './Summary'

const Home = () => {

    return (
        <Row className='p-1'>
            <Col lg="8" sm={12} style={{ overflow: 'auto' }} >
                <Card >
                    <Card.Body >
                        <Card.Title className='box'>Hurrey ! sale is live now</Card.Title>
                        <Poduct />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4" sm={12} >
                <Row>
                    <Col lg="12" sm={12} >
                        <Card >
                            <Card.Body style={{ height: '40vh', overflow: 'auto' }}>
                                <Card.Title>Cart</Card.Title>
                                <Cart />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg="12" sm={12} >
                        <Card >
                            <Card.Body style={{ height: '60vh', overflow: 'auto' }}>
                                <Card.Title>Summary</Card.Title>
                                <Summary />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Home