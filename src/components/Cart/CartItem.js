import classes from './CartItem.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartactions } from '../Store/CartReducer';
const CartItem = (props) => {
  const Dispatch = useDispatch()
  const TotalItem = useSelector((state)=>state.Showcart.arr)
  const { title, quantity, total, price } = props.item;
  console.log(title,props.item)
  // const TotalItem  = props.item
  let  [quant,setquant] = useState(parseInt())
  const hanldeincrement=(ele,item)=>{

    Dispatch(cartactions.addtocart(ele))
    // setquant(quant+1)
  }
  const handledecrement=(ele,item)=>{
    if(ele.quantity==0){
      console.log('itz zero')
    }
    Dispatch(cartactions.reducecart(ele))
  }

  // if(quant===0){
  //   return('emptyCart')
  // }
  
  return(
    <>
    
      {TotalItem.map((ele,item)=>(

        


        <li className={classes.item}>
          <header>
            <h3>{ele.Tittle}</h3>
            <div className={classes.price}>
              {/* ${ele.total.toFixed(2)}{' '} */}
              {/* <span className={classes.itemprice}>(${ele.Price.toFixed(2)}/item)</span> */}
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{ele.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={()=>handledecrement(ele,item)}>-</button>
              <button onClick={()=>hanldeincrement(ele,item)}>+</button>
            </div>
          </div>
        </li>    
      ))}
    </>
  );
};

export default CartItem;
