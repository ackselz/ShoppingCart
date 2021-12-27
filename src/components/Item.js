import React, {useState, useEffect,} from 'react'
import { useParams } from 'react-router-dom'
import addToCart from './Shop.js'


function Item(props) {

    let params = useParams();

    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState({})

    const test = (json) => {
      setItem(json);
    }
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${params.id}`, {mode: 'cors'})
        .then(res=>res.json())
        .then(json=>test(json));
    },[])

    const handleChangeItemQuantity = (e) => {
      setQuantity(parseInt(e.target.value))
    }

    return (
        <div className="item__container">
          <div className="item__left">
            <img className="item__image" src={item.image} alt="" />
            <p className="item__desc">{item.description}</p>
          </div>
          <div className="item__right">
            <p className="item__title">{item.title}</p>
            <p className="item__subtitle">${item.price}</p>
            <input className="item__input" type="number" value={quantity} min="1" onChange={handleChangeItemQuantity}/>
            <button className="item__button" onClick={() => props.addToCart(item.id, quantity)}>Add To Cart</button>
          </div>
        </div>
    )
}

export default Item
