import React from 'react'
import "../Styles/Product.css"
function Product({title, image, price, rating}) {
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <string>{price}</string>
            </p>
            <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
            
            </div>
        </div>
            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="image"/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
