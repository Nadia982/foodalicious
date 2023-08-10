import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?number=3&limitLicense=true`)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=2`
    );
    const data = await api.json();

    setPopular(data.recipes);
    console.log(data.recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular?.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card >
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

const Card = styled.div`
  /* height: 25rem; */
  height: 50;
  border-radius: 2rem;
  overflow: hidden;
  background-color: aliceblue;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    background-color: aliceblue;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, 0%);
    background-color: white;
    color: black;
    padding: 1rem;
    width: 80%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
  }
`;

export default Popular;
