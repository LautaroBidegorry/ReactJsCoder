import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
    const { name, price, quantity} = item

  return (
    <>
      <h2>{name}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Precio: {price}</p>
      <p>Subtotal: {quantity*price}</p>
      <button onClick={()=> removeItem(item.id)}>Eliminar</button>
    </>
  )
}

export default CartItem
