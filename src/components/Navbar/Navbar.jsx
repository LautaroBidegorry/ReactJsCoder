import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'



const Navbar = () => {
  return (
    <>
    <Flex>
      <Box p='4' bg='red.400'>
        <h3>ecommerce</h3>
      </Box>
      <Spacer/>
      <Box>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Categoria 1</MenuItem>
            <MenuItem>Categoria 2</MenuItem>
            <MenuItem>Categoria 3</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box p='4' bg='green.400'>
        <CartWidget/>
      </Box>
    </Flex>       
    </>
  )
}

export default Navbar