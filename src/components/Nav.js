import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="nav__container">
        <nav className="nav">
            <h2 className="nav__header">Shopi</h2>
            <ul className="nav__list">
                <Link to="/">
                    <li className="nav__item">Home</li>
                </Link>
                <Link to="shop">
                    <li className="nav__item">Shop</li>
                </Link>
                <Link to="cart">
                    <li className="nav__item">Cart</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
