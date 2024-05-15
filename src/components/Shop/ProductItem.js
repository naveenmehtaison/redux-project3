import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartactions } from '../Store/CartReducer';
const ProductItem = (props) => {
  const Dispatch = useDispatch()
  const { title, price, description } = props;
  const quantity=0
  const hanldeaddcart=()=>{
    const obj = {Tittle:title,Price:price,Des:description,quantity:'1'}
    Dispatch(cartactions.addtocart(obj))


  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={hanldeaddcart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
