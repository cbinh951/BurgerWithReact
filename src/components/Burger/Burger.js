import React from 'react';
 
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
 
const Burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( (_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            } );
        } )
        .reduce( (arr, cur) => {
            return arr.concat(cur);
        }, [] );
        //Array(2) => create array has 2 element [,]
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
 };
 
 export default Burger;