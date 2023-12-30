import React from 'react'
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg" style={{height: '70px', position: 'sticky', top: '0px', left: '0px', background: '#fff', zIndex: '1000'}}>
            <div className="container">
                <Link className="navbar-brand" to="/" style={{fontSize: '25px', fontWeight: '600'}}>Footwear</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between ps-3" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-start align-items-center gap-3">
                        <li className="nav-item">
                            <a className='text-tertiary-color'>
                                MEN
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className='text-tertiary-color'>
                                WOMEN
                            </a>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <FiSearch size={"18px"} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/account/">
                                <FiUser size={"18px"} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/cart/">
                                <FiShoppingCart size={"18px"} />
                            </Link>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar