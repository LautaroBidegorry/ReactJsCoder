import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Card,CardBody, Stack, Heading, Text, Divider, CardFooter} from '@chakra-ui/react'


const ItemDetail = ({name, description, price, stock}) => {
  return (
    <>
    <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {description}
      </Text>
      <Text>
        {stock} unidades en stock
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
  </CardFooter>
</Card>
    </>
  )
}

export default ItemDetail
