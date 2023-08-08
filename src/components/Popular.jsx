import React from "react";
import { useEffect, useState } from "react";

const Popular = () => {
    // const [popular, setPopular] = useEffect();

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?number=3&limitLicense=true`)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&limitLicense&glutenFree=true&dairyFree=true`
    );
    const data = await api.json();
    console.log(data);
  };
  return <div>Popular</div>;
};

export default Popular;
