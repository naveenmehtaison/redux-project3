import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartactions } from '../Store/CartReducer';
import { useDispatch,useSelector } from 'react-redux';
const Cart = (props) => {
  const Dispatch  = useDispatch()
  const ShowCart = useSelector((state)=>state.Showcart.showcart)
  return (
    <>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </Card>
    </>
  );
};

export default Cart;
