import './Navbar.css'
import {Link} from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import logo from '../../src/images/N8Logo.svg'
import search from '../../src/images/search.svg'
import cart from '../../src/images/shopping-cart.svg'

function Navbar() {
    return (
        <nav className='gNav' >
            <div className="menu-toggle">
                <MenuRoundedIcon/>
            </div>
            <Link className="logo" to='/' >
                <img src={logo} alt="N8Logo"/>
            </Link>
            <div className="search-cart">
                {/* <form action="" className="search">
                    <input type="search" name="" id=""/>
                </form> */}
                <div className="search-icon">
                    <img src={search} alt="Searchbtn"/>
                </div>
                <Link className="cart" to='cart' >
                    <img src={cart} alt="cart"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
