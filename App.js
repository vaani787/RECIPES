import React, { useEffect, useState }from 'react';
import Rcomp from "./Rcomp" ;
import './App.css';


const App = () => {
  const APP_ID ="2e74195a"
  const APP_KEY ="02f2cd090805d7f4d4fef84e2895b518 	"

const [recipes, setRecipes]= useState([]);
const [search, setSearch] = useState('');  
const [query, setQuery] = useState('chicken');


useEffect(() => {
  getRecipes();
}, [query] );

const getRecipes = async() =>{
  const response = await fetch(`http://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  
};
const updateSearch = e =>{
  setSearch(e.target.value);
  
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');

}

  return(
      <div className = "App">
       <form onSubmit= {getSearch} 
       className="search-form" >
         <input  
         className="search-bar" 
         type="text" value={search} 
         onChange={updateSearch} />


         <button className="search-button" 
         type="submit">
           Search
           </button>

       </form>
       <div className="recipes">
       {recipes.map( recipes => (
         <Rcomp  
         key={ recipes.recipe.label}
            title={recipes.recipe.label}
            calories={recipes.recipe.calories}
            image={recipes.recipe.image}         
            ingredients={recipes.recipe.ingredients}
         />
       ))} 
       
         </div>
  
       </div>


 );
}

export default App;
