import classes from './CartButton.module.css';
import { cartactions } from '../Store/CartReducer';
import { useDispatch,useSelector } from 'react-redux';
import Cart from './Cart';
const CartButton = (props) => {
  const Dispatch  = useDispatch()
  
  const hanldeMycart=()=>{
    Dispatch(cartactions.setshowcart())

  }

  return (
    <>


      <button className={classes.button}>
        <span onClick={hanldeMycart}>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>

    </>
  );
};

export default CartButton;
