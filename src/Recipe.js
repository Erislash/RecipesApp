import React from 'react';
import Style from './recipe.module.css' 

export default function Recipe({title, calories, img, ingredients}){
    return(
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <p><b>Calories: </b>{Math.ceil(calories)}</p>
            <div className={Style.imgContainer}>
                <img src={img} alt={title}/>
            </div>
            <ul>
                {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
            </ul>
        </div>
    );
}
