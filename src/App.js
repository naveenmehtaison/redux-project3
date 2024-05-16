import { useEffect } from 'react';
import axios from 'axios'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from './components/UI/Card';
import Notification from './components/UI/Notification';
import { cartactions } from './components/Store/CartReducer';
import { useDispatch } from 'react-redux';
function App() {
  let is_true = false
  const Showcart = useSelector((state)=>state.Showcart.showcart)
  const TotalCart  = useSelector((state)=>state.Showcart.arr)
  const NotificationState = useSelector((state)=>state.Showcart.notificationstate)
  const [isTrue, setIsTrue] = useState(false);
  console.log(TotalCart)
  const [modal,setmodal] = useState('')
  const [modal2,setmodal2]= useState(false)
  const Dispatch = useDispatch()
  async function fetchdata(TotalCart){
    console.log('hii')
    if(!isTrue){
      setIsTrue(true)
      return
    }
    console.log('hii')
    try{
      Dispatch(cartactions.notification({status:'onprogress',Tittle:'sending',message:''}))
      
      const res = await axios.put('https://authentication-1f2ad-default-rtdb.firebaseio.com/cart.json',TotalCart)
      Dispatch(cartactions.notification({status:'success',Tittle:'done',message:'sent'})) 
    }
    catch(err){
      console.log(err)
      setmodal2(true)

      Dispatch(cartactions.notification({status:'error',Tittle:'failed',message:'sent'}))
  


      


    }

  }

  useEffect(()=>{
    fetchdata(TotalCart)

  },[TotalCart])
  console.log(NotificationState)
 
  return (
    <>
      <div>
        { NotificationState && <Notification status={NotificationState.status} message={NotificationState.message} title={NotificationState.Tittle}></Notification>}
        
      </div>
      <Layout>

        {Showcart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
