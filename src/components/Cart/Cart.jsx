import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  
  const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)


    if(totalQuantity===0) {
        return (
            <>
                <h1> No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </>
        )
    }

    
  return (
    <>
      {cart.map((item) => (<CartItem key={item.id} item={item} />))}
        <h3>Total: ${totalPrice}</h3>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
        <Link to="/checkout" className="Option">
        Checkout
        </Link>
    </>
  )
}

export default Cart
