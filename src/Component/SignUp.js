import React from 'react'
import './Style/Signup.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
// import firebase from 'firebase/compat/app';
import { db } from './firebase'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [Username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    

    const register = async (e) => {
        e.preventDefault();

        try {
            const authUser = await auth.createUserWithEmailAndPassword(email, password);
            if (auth) {
                alert('Welcome : ' + Username);
                navigate('/');
            }
            // If user creation is successful, create a user document in Firestore
            await db.collection('users').doc(authUser.user.uid).set({
                email: authUser.user.email,
                // Add other user data as needed
            });

            // Redirect user after successful registration
            // history.push('/');
            alert('Registration successful');
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className="SignUp">
            <Link to='/'>
                <img className='SignUpLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="SignUpContainer">
                <h1>Sign Up</h1>
                <form action="">
                    <h5>Username</h5>
                    <input type="text" value={Username} onChange={e => setUsername(e.target.value)}/>

                    <h5>E-mail</h5>
                    <input type="text"  value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>

                    <h5>Phone No.</h5>
                    <input type="text" />
                    <div className="tnc">
                        <input type="checkbox" />
                        <p>
                            By Signing in you agree to the Amazon Clone Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                        </p>
                    </div>
                    <Link to='/login'>
                        <button className='SignUpButton'onClick={register}>Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}


export default SignUp