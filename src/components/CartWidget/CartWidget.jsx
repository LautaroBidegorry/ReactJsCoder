import React from 'react'
import cart from "./assets/cart.svg"
import { Badge, Box, Divider, Flex } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <>
      <Flex>
        <Box>
          <img src={cart} dalt="cart-widget"/>
        </Box>
        <Divider/>
        <Box>
          <Badge colorScheme='green'>0</Badge>
        </Box>
      </Flex>
    </>
  )
}



export default CartWidget