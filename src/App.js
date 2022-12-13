import { useState } from "react";
import Topbar from "./Topbar";
import "./App.css";
import Banner from "./Banner";
import HotRecipe from "./HotRecipe";
import SavedRecipes from "./SavedRecipes";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <>
      <Topbar />
      <Banner />
      <div className="main">
        <HotRecipe />
        <SavedRecipes />
      </div>
      <ScrollTop />
    </>
  );
}

export default App;
