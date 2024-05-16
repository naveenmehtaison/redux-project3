import classes from './CartButton.module.css';
import { cartactions } from '../Store/CartReducer';
import { useDispatch,useSelector } from 'react-redux';
import Cart from './Cart';
const CartButton = (props) => {
  const Dispatch  = useDispatch()
  const TotalCart = useSelector((state)=>state.Showcart.arr)
  const hanldeMycart=()=>{
    Dispatch(cartactions.setshowcart())

  }

  return (
    <>


      <button className={classes.button}>
        <span onClick={hanldeMycart}>My Cart</span>
        <span className={classes.badge}>{TotalCart.length}</span>
      </button>

    </>
  );
};

export default CartButton;
