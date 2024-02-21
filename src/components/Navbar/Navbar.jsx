import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <Flex>
      <Box p='4' bg='red.400'>
        <Link to={`/`}>
        <h3 >ecommerce</h3>
        </Link>
      </Box>
      <Spacer/>
      <Box>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem><NavLink to={`/category/c1`}>Categoria 1</NavLink></MenuItem>
            <MenuItem>
            <NavLink to={`/category/c2`}> Categoria 2</NavLink></MenuItem>
            <MenuItem>
            <NavLink to={`/category/c3`}> Categoria 3</NavLink></MenuItem>
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