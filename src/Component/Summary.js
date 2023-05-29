import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';

const Summary = () => {
    const cartData = useSelector((state) => state.Cart.cartData)
    
    const itemPrice = (quantity, price) => {
        return quantity * price;
      };

    const totalAmount = () => {
        return cartData.reduce(
          (total, item) => total + itemPrice(item.quantity, item.price),
          0
        );
      };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>item</th>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData?.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.title.substring(0, 20)}</td>
                                <td>
                                    <span style={{ marginLeft: '10px', marginRight: '10px' }}>{item.quantity}</span>
                                </td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <button type="button" className="btn btn-primary" >Go To Checkout</button>
            <span style={{ marginLeft: '150px' }}>Total {totalAmount()}</span>
        </>
    )
}

export default Summary