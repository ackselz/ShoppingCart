import React, {useState, useEffect,} from 'react'
import { useParams, Link } from 'react-router-dom'
import Categories from './Categories';

function Category(props) {

    let params = useParams();

    const [category, setCategory] = useState([])

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${params.id}`, {mode: 'cors'})
        .then(res=>res.json())
        .then(json=>setCategory(json));
    },[params])

    return (
        <div className="shop__container">
        <Categories />
        <div className="shop__cards">
          {category.map(item => {
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
    )
}

export default Category