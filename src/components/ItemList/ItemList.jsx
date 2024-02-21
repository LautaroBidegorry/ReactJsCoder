import React from 'react'
import Item from '../Item/Item'
import { Center, Flex, Spacer } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
    <>
      <Center>
        {products.map(prod =><Spacer><Item key={prod.id}{...prod}/></Spacer> )}
      </Center>
    </>
  )
}

export default ItemList
