import { useEffect } from 'react';
import axios from 'axios'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from './components/UI/Card';
function App() {
  const Showcart = useSelector((state)=>state.Showcart.showcart)
  const TotalCart  = useSelector((state)=>state.Showcart.arr)
  console.log(TotalCart)
  const [modal,setmodal] = useState('')
  const [modal2,setmodal2]= useState(false)
  async function fetchdata(TotalCart){
    try{
      setmodal(false)
      const res = await axios.put('https://authentication-1f2ad-default-rtdb.firebaseio.com/cart.json',TotalCart)
      
    }
    catch(err){
      console.log(err)
      setmodal2(true)

    }
    setmodal(true)
  }
  useEffect(()=>{
    fetchdata(TotalCart)


  },[TotalCart])
 
  return (
    <>
      <div>
        {!modal && <Card style={{backgroundColor:'red'}}>data is loading</Card>}
        {modal2 && <Card style={{backgroundColor:'red'}}>Err Detected</Card>}
      </div>
      <Layout>

        {Showcart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
