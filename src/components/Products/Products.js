import React from 'react'
import "./products.css"

const Products = ({state,dispatch}) => {
  const {products, cart} = state;

  return (
    <div className="App">
      {products.map((prod)=>(
        <div className="Container" key={prod.id}>
          <img className="box" src={prod.thumbnail} alt={prod.title} />
          <div className="main">
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button className="btn1"
              
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button className="btn2"
             
             onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: prod.qty,
                    price: prod.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Products