import React, {useState, useEffect,} from 'react'
import { Link } from 'react-router-dom'


function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/categories`, {mode: 'cors'})
        .then(res=>res.json())
        .then(json=>setCategories(json));
    },[])

    return (
        <div className="categories__container">
            <h3 className="categories__header">Categories</h3>
            <ul className="categories__list">
                <li className="categories__item">
                    <Link to={`/shop`}>
                        All
                    </Link>
                </li>
                {categories.map((category, id) => {
                    return (
                        <li className="categories__item" key={id}>
                            <Link to={`/shop/category/${category}`}>
                                {category}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories