import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
  const Showcart = useSelector((state)=>state.Showcart.showcart)
  const [modal,setmodal] = useState(false)
  useEffect(()=>{
    setmodal(!modal)


  },[Showcart])
 
  return (
    <Layout>
      {modal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
