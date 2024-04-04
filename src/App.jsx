import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailCointainer/ItemDetailContainer.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Checkout from "./components/Checkout/Checkout.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import { useEffect, useState } from "react"
import { db } from "./services/firebase/firebaseConfig.jsx"
import { collection, getDocs } from "firebase/firestore"
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx"



function App() {

  const [itemList, setItemList] = useState([])

  const itemCollectionRef = collection(db, "items")

////////
  const getItemList = async () => {
    const data = await getDocs(itemCollectionRef)
    console.log(data)


    const filteredData = data.docs.map( (doc)=>({
      ...doc.data(),
      id:doc.id
    }))
    console.log(filteredData)
    setItemList(filteredData)
  }
////////

  useEffect(() => {

    getItemList()
  },[])


  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path="/item/:id" component={ItemDetail} />
              <Route path='/carrito' element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
