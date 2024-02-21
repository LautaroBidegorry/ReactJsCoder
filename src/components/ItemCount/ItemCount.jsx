import React from 'react'
import { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

const ItemCount = ({stock, initial, onAdd}) => {
  

  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if(quantity < stock) {
      setQuantity(quantity+1)
    }
  }

  const decrement = () => {
    if(quantity > 1) {
      setQuantity(quantity-1)
    }
  }



  return (
    <>
     <Flex>
        <Button colorScheme='blue' onClick={decrement}>-</Button>
        <Box borderRadius='md' color='black' px={4} h={8}>
        {quantity}
        </Box>
        <Button colorScheme='blue' onClick={increment}>+</Button>
     </Flex>
     <div>
        <Button  Button colorScheme='blue' onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>
     </div>
    </>
  )
}

export default ItemCount
