export default function Vegan({ veganRecipes }) {
  console.log("vegan comp", veganRecipes);
  return (
    <>
      <img src="public\veggie-pot.png" alt="" />
      <div className="container">
        {veganRecipes.map((vegan) => (
          <div className="bubble" key={vegan.sys.id}>
            <h1>{vegan?.fields?.name}</h1>
            <div className="recipe">
              <img src={vegan?.fields?.image?.fields?.file?.url} alt="" />
              <ul className="ingredients">
                <h2>Ingredients</h2>
                {vegan?.fields?.ingredientsList.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <h2>Instructions</h2>
            <p>{vegan?.fields?.instructions}</p>
          </div>
        ))}
      </div>
    </>
  );
}
