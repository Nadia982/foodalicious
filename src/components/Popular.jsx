import React from "react";
import { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?number=3&limitLicense=true`)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=2&limitLicense`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
