import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { add_Cart } from '../Redux/action/Cart';

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.Cart.cartData)

    const incrementQty = (itemId) => {
        dispatch(add_Cart(
            cartData.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          )
        ))
    }
    const decrementQty = (itemId) => {
        dispatch(add_Cart(
            cartData.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity !== 0 ?item.quantity - 1:item.quantity } : item
          )
        ))
    }

    const removeItem = (removeItem) => {
        dispatch(add_Cart(cartData.filter((item) => item !== removeItem)))
      };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
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
                                <button type="button" className="btn btn-circle btn-outline-success" onClick={()=>decrementQty(item.id)}>-</button>
                                <span style={{marginLeft:'10px', marginRight:'10px'}}>{item.quantity}</span>
                                <button type="button" className="btn btn-circle btn-outline-success" onClick={()=>incrementQty(item.id)}>+</button>
                                <button type="button" style={{marginLeft:'10px'}} className="btn btn-circle btn-outline-danger" onClick={()=>removeItem(item)}>Remove</button>
                            </td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default Cart