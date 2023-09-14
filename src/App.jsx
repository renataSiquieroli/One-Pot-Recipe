import { Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { createClient } from "contentful";
import Homepage from "./components/Homepage";
import Vegan from "./components/Vegan";
import Meat from "./components/Meat";
import Fish from "./components/Fish";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);

  //  create 3 states 1 for each category
  const [veganRecipes, setVeganRecipes] = useState([]);
  const [meatRecipes, setMeatRecipes] = useState([]);
  const [fishRecipes, setFishRecipes] = useState([]);

  const spaceKey = import.meta.env.VITE_REACT_APP_SPACE_ID;
  const tokenKey = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

  const client = createClient({
    space: spaceKey,
    accessToken: tokenKey,
  });

  const getData = async () => {
    const entryItems = await client.getEntries();
    // console.log("my data", entryItems.items);
    setRecipes(entryItems.items);
    setVeganRecipes(
      entryItems.items.filter((recipe) => recipe.fields.category === "Vegan")
    );
    setMeatRecipes(
      entryItems.items.filter((recipe) => recipe.fields.category === "Meat")
    );
    setFishRecipes(
      entryItems.items.filter((recipe) => recipe.fields.category === "Fish")
    );
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("veganRecipe", veganRecipes);
  console.log("meatRecipe", meatRecipes);
  console.log("fishRecipe", fishRecipes);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="vegan" element={<Vegan veganRecipes={veganRecipes} />} />
        <Route path="meat" element={<Meat meatRecipes={meatRecipes} />} />
        <Route path="fish" element={<Fish fishRecipes={fishRecipes} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
