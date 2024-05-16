import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartactions } from '../Store/CartReducer';
const ProductItem = (props) => {
  const Dispatch = useDispatch()
  const { title, price, description } = props;
  const Container = props.props
  const quantity=0
  const hanldeaddcart=(e,ele,item)=>{
    e.preventDefault()
    console.log(ele)
    const obj = {Tittle:ele.title,Price:ele.price,Des:ele.description,quantity:'1'}
    Dispatch(cartactions.addtocart(obj))


  }

  return (
    <li className={classes.item}>
      <Card>
        {Container.map((ele,item)=>(
          <div key={item}>

            <header>
              <h3>{ele.title}</h3>
              <div className={classes.price}>${ele.price}</div>
            </header>
            <p>{ele.description}</p>
            <div className={classes.actions}>
              <button onClick={(e)=>hanldeaddcart(e,ele,item)}>Add to Cart</button>
            </div>
            <hr></hr>
          </div>
        ))}
      </Card>

    </li>
  );
};

export default ProductItem;
