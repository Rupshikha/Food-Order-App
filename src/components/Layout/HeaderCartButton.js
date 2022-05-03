import { useContext } from 'react';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HaederCartButton = props =>{

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber , item) =>{
        return curNumber + item.amount;
     },0);
    return( 
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/> 
         <span>your cart</span>   
     <span className={classes.badge}>{numberOfCartItems}</span>
        </span>
    </button>
    )
};

export default HaederCartButton;