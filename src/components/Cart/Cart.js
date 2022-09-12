import {useEffect,useState} from 'react'
import "./cart.css"

const Cart = ({state, dispatch}) => {
    const {cart} = state
    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }, [cart]);
  
    const changeQty = (id,qty) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
        id: id,
        qty: qty,
        },
    })

  return (
    <div className="container" >
        <b className="cart" >Cart</b>
        <b className="cart2">Subtotal: $ {total}</b>
        <div className="main" >
         {cart.length > 0 ?
             cart.map((prod)=>(
                 <div className="title" key={prod.title} >
                     <div style={{display:'flex',gap:10}}>
                      <img className="img" src={prod.thumbnail} alt={prod.title} />
                      <div className="carttext" >
                          <span>{prod.title}</span>
                          <b>$ {prod.price}</b>
                      </div>
                     </div>
                     <div className="cartstyle">
                         <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                         <span>{prod.qty}</span>
                         <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                     </div>
                 </div>
                 ))
         :
         <span className="span">Cart is empty</span>}
        </div>
    </div>
  )
}

export default Cart