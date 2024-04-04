import React from 'react';
import Item from '../Item/Item';
import { Center, Spacer } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  return (
    <Center>
      {products.map(prod => (
        <Spacer key={prod.id}>
          <Item {...prod} />
        </Spacer>
      ))}
    </Center>
  );
};

export default ItemList;

