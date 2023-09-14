export default function Fish({ fishRecipes }) {
  console.log(fishRecipes);
  return (
    <>
      <img src="public\fish-pot.png" alt="" />
      <div className="container">
        {fishRecipes.map((fish) => (
          <div className="bubble" key={fish.sys.id}>
            <h1>{fish?.fields?.name}</h1>
            <div className="recipe">
              <img src={fish?.fields?.image?.fields?.file?.url} alt="" />

              <ul className="ingredients">
                <h2>Ingredients</h2>
                {fish?.fields?.ingredientsList.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <h2>Instructions</h2>
            <p>{fish?.fields?.instructions}</p>
          </div>
        ))}
      </div>
    </>
  );
}
