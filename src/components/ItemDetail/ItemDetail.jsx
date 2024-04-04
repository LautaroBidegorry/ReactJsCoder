import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Link as ChakraLink, Button } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price, description, stock
    }

    addItem(item, quantity)
  }

  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>{description}</Text>
            <Text>{stock} unidades en stock</Text>
            <Text color='blue.600' fontSize='2xl'>{price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {
            quantityAdded > 0 ? (
              <Button>
                <ChakraLink as={Link} to='/carrito'>Terminar compra</ChakraLink>
              </Button>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            )
          }    
        </CardFooter>
      </Card>
    </>
  )
}

export default ItemDetail

