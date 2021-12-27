import React, {useState, useEffect} from 'react';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Item from './components/Item.js';
import Cart from './components/Cart.js';
import Category from './components/Category.js';
import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState({});
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/', {mode: 'cors'})
      .then(res=>res.json())
      .then(json=>setInventory(json));
    fetch('https://fakestoreapi.com/carts/1', {mode: 'cors'})
      .then(res=>res.json())
      .then(json=>newCart(json))
  },[])

  const newCart = (json) => {
    setCart(
        {...json, products:[] }
      )
  }

  const addToCart = ((productID, qty) => {
    if (cart.products.find(product => product.productId === productID)) {
      setCart(prevState => {
        const newProducts = prevState.products.map(product => {
          if (product.productId === productID) {
            return {...product, quantity: qty}
          }
          return product
        })
        return {...prevState, products: [...newProducts]}
        })
    }
    else {
      setCart(prevState => {
        return {...prevState, products: [...prevState.products, {productId: productID, quantity: qty}]
      }
    })
    }
    })

    const handleRemoveFromCart = (e) => {
      console.log(cart.products)
      setCart(prevState => {
        const newProducts = prevState.products.filter(product => 
          product.productId != e.target.id
        )
        console.log(newProducts)
        console.log(e.target.id)
        console.log(1)
        return {...prevState, products: newProducts}
        })
      }

    const handleChangeCartQuantity = (e) => {
      setCart(prevState => {
        const newProducts = prevState.products.map(product => {
          if (product.productId == e.target.id) {
            return {...product, quantity: e.target.value}
          }
          return product
        })
        return {...prevState, products: [...newProducts]}
        })
      }

  return (
    <HashRouter basename="/ShoppingCart">
    <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop inventory={inventory} addToCart={addToCart}/> }/>
        <Route path="/shop/item/:id" element={<Item cart={cart} addToCart={addToCart}/>}/>
        <Route path="/shop/category/:id" element={<Category addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart inventory={inventory} cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleChangeCartQuantity={handleChangeCartQuantity}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
