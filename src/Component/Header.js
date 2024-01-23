import React from 'react'
import './Style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = () => {
    
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img className='headerLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            {/* Logo */}
            <div className="headerSearch">
                <input className='headerSearchInput' type="text" name="" id="" placeholder='Search Your Product' />
                <SearchIcon className='headerSearchIcon'></SearchIcon>
            </div>

            <div className="headerNav">
                <Link to='/login'>
                    <div className='headerOption'>
                        <span className='headerOptionLineOne'>Hello</span>

                        <span className='headerOptionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>Return</span>

                    <span className='headerOptionLineTwo'>& Orders</span>
                </div>
                <Link to='https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root'>
                    <div className='headerOption'>
                        <span className='headerOptionLineOne'>Your</span>

                        <span className='headerOptionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='headerOption'>
                        <div className="headerOptionBasket">
                            <ShoppingBasketIcon></ShoppingBasketIcon>
                            <div className="headerOptionLineTwo headerBasketCount">
                                {basket?.length}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header