import React from 'react'
import './Style/Product.css'
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        
    console.log(basket);
        dispatch({
            type: 'Add to Cart',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    let cost = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(price);
    return (
        <div className='product'>
            <div className="productInfo">
                <p>{title}</p>
                <p className='productPrice'>
                    <strong> {cost}</strong>
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={() => {addToBasket()}}>Add to Cart</button>
        </div>
    )
}

export default Product