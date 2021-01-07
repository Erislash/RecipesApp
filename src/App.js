import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';



export default function App(){
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Chicken');

  const AppID = '3bc1eee9';
  const AppKey = '6ec565809e18949b8d402965bfe9ca7c';
  let URL = `https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${AppKey}`;
  // const URL = `./appi.txt`;


  useEffect( () => {
    async function GetRecipes(){
      const response = await fetch(URL);
      const data = await response.json();
      setRecipes(data.hits);
    }
    GetRecipes();
  }, [query]);

  

  function UpdateSearch(e){
    setSearch(e.target.value);
  }

  function GetSearch(e){
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className='app'>
      <form onSubmit={GetSearch} className="searchForm">
        <input
          onChange={UpdateSearch}
          value={search}
          className="searchBar"
          type="text"
          placeholder="Type a food..."/>
        <button
          className="searchBtn"
          type="submit"
          >Search</button>
      </form>
      <div className="recipes">
        {recipes.map(({recipe: {label, calories, image, ingredients}}) => (
          <Recipe
              key={label} 
              title={label}
              calories={calories}
              img={image}
              ingredients={ingredients}/>
        ))}
      </div>
      
    </div>
  );
};