import React from 'react'
import {Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name}) => {
  return (
    <Card maxW='sm' id={id}>
    <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
    </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
      <Button colorScheme='blue'><Link to={`/item/${id}`}>Ver detalle</Link></Button>
      </ButtonGroup>
    </CardFooter>
</Card>
  )
}

export default Item
