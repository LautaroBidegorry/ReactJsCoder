const products = [
    {
        id: '1',
        name: 'producto 1',
        category: 'c1',
        stock: '10',
        price: '$100',
        description: 'descripcion producto 1'
    },
    {
        id: '2',
        name: 'producto 2',
        category: 'c2',
        stock: '15',
        price: '$200',
        description: 'descripcion producto 2'
    },
    {
        id: '3',
        name: 'producto 3',
        category: 'c3',
        stock: '20',
        price: '$300',
        description: 'descripcion producto 3'
    }

]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500);
    })
}
