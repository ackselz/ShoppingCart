import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Categories from './Categories';

function Shop(props) {

  return (
    <div className="shop__container">
      <Categories />
      <div className="shop__cards">
        {props.inventory.map(item => {
          return (
            <div className="card__container" key={item.id}>
              <div className="card__image-container">
                <Link to={`/shop/item/${item.id}`}>
                  <img className="card__image" src={item.image} alt="" />
                </Link>
              </div>
              <div className="card__info-container">
                <Link to={`/shop/item/${item.id}`}>
                  <h4 className="card__title">
                    {item.title}
                  </h4>
                </Link>
                <button className="card__button" onClick={() => props.addToCart(item.id, 1)}>Add To Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Shop;