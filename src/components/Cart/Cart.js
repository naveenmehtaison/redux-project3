import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import Store from '../Store';
const Cart = (props) => {
  const TotalCart = useSelector((state)=>state.Showcart.arr)
  console.log(TotalCart)

  return (
    <>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={TotalCart}
          />
        </ul>
      </Card>
    </>
  );
};

export default Cart;
