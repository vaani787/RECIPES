import React from 'react';

const Rcomp = ({title, calories , image, ingredients, ratings, availability  }) => {
    return(
<div>
    <h1>{title}</h1>
    <ol> 
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
        )

        )}
    </ol>
    <p>{calories}</p>
    <img src = {image} alt =""/>
</div>
    );
}

export default Rcomp;
