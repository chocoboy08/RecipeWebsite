function SavedRecipes() {
  const recipes = [
    "./recipeList1.png",
    "./recipeList2.png",
    "./gambas.png",
    "./plus.png",
  ];
  const recipeList = recipes.map((recipe, idx) => (
    <li key={idx}>
      <img src={recipe} className="srImg" />
    </li>
  ));
  return (
    <div className="savedRecipes">
      <div className="srTitle">내가 저장한 레시피</div>
      <ul className="srList">{recipeList}</ul>
    </div>
  );
}

export default SavedRecipes;
