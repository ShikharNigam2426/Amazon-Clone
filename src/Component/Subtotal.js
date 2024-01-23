import React from 'react';
import './Style/Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getbasketTotal } from '../Reducer';

const Subtotal = (props) => {
    const [{ basket }, dispatch] = useStateValue();
    const value = getbasketTotal(basket);
    const cost = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(value);

    // Initialize Razorpay
    const Razorpay = new window.Razorpay({
        key: 'rzp_test_tt6dvqmNZq4x73',
        currency: 'USD',
        amount: value * 100,
        // Add other necessary options
    });

    function payNow() {
        // alert(value)
        const RozarpayOptions = {
            description: 'Sample Razorpay demo',
            currency: 'USD',
            amount: value,
            // Add other options
        };

        const successCallback = (paymentid) => {
            // Handle successful payment
        };

        const failureCallback = (e) => {
            // Handle payment failure
        };

        Razorpay.open(RozarpayOptions, successCallback, failureCallback);
    }

    return (
        <div className='subtotal'>
            <div className="subtotalItem">
                <p>Subtotal({basket?.length} items): </p>
                <strong>{cost}</strong>
            </div>
            <small className='subtotalGift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={payNow}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
