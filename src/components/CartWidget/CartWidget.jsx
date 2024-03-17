import React, { useContext } from 'react'
import cart from "./assets/cart.svg"
import { CartContext } from '../../context/CartContext'
import { Badge, Box, Divider, Flex } from '@chakra-ui/react'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)



  return (
    <>
      <Flex>
        <Box>
          <img src={cart} dalt="cart-widget"/>
        </Box>
        <Divider/>
        <Box>
          <Badge colorScheme='green'>{totalQuantity}</Badge>
        </Box>
      </Flex>
    </>
  )
}



export default CartWidget