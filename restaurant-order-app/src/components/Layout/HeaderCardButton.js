import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';
const HeaderCardButton = props => {

    const  cartCtx = useContext(CartContext);
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber+item.amount;

    },0);

    

    const btnClasses = `${classes.button} ${ buttonIsHighlighted? classes.bump: ''}`;


    useEffect(() => {  
        if(cartCtx.items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <button 
        className={btnClasses} 
        onClick={props.onClick}
        >
            <span>
                <CartIcon className={classes.icon}/>
            </span>
            <span >
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
};

export default HeaderCardButton;