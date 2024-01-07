import React from 'react'
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { removeToken } from '../utils';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const navigate = useNavigate()
    const cartItems = useSelector((state) => {
        return state.cartItems.length > 0 ? state.cartItems.reduce((total, item) => {
            return total + (item.quantity || 0);
        }, 0) : 0
    })

    console.log(cartItems)
    
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{height: '70px', position: 'sticky', top: '0px', left: '0px', background: '#fff', zIndex: '1000'}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <form className="d-flex" role="search">
                        <input className="form-control rounded-5" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className='menu'>
                        <ul className="navbar-nav gap-4">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                                
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/collections/">
                                    Collections
                                </Link>
                                
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/about/">
                                    About
                                </Link>
                                
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact/">
                                    Contact
                                </Link>
                                
                            </li>
                            
                        </ul>
                    </div>
                    <div className='end'>
                        <ul className="navbar-nav gap-2">
                            
                            <li className="nav-item">
                                <Link className="nav-link active position-relative" to="/cart/">
                                    <FiShoppingCart size={"18px"} />
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary-color">
                                        {/* {cartItems.length > 0 ? cartItems.reduce((total, num) => {
                                            return total?.quantity - num?.quantity
                                        }) : 0} */}
                                        {cartItems}
                                    </span>

                                </Link>
                                
                            </li>
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/account/">
                                            Account
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item cursor-pointer" onClick={() => {
                                            removeToken();
                                            toast.success("Logged out!")
                                            navigate("/account/")
                                        }}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiUser size={"18px"} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar