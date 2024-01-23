import React from 'react'
import './Style/Login.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
// import firebase from 'firebase/compat/app';
import { db } from './firebase'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // eslint-disable-next-line no-use-before-define
    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                alert('Logged in');
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="Login">
            <Link to='/'>
                <img className='LoginLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="LoginContainer">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <div className="tnc">
                        <input type="checkbox" />
                        <p>
                            By Signing in you agree to the Amazon Clone Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                        </p>
                    </div>
                    {/* <Link to='/'> */}
                    <button type='submit' className='LoginButton' onClick={signIn}>Sign in</button>
                    {/* </Link> */}
                </form>

                <Link to='/signup'>
                    <button type='submit' className='LoginCreate'>Create an Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login