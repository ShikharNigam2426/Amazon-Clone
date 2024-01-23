import React from 'react'
import './Style/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = (props) => {
    const[{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type : 'RemoveFromBasket',
            id : props.id,
        })
    }

    let cost = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(props.price);
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProductImage' src={props.image} alt="" />
            <div className='CheckoutProductInfo'>
                <p>{props.title}</p>
                <strong>{cost}</strong>
                <div className="CheckoutProductRating">
                    {
                        Array(props.rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={() => { removeFromCart() }}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct