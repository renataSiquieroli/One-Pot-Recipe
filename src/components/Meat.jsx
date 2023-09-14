export default function Meat({ meatRecipes }) {
  // console.log(meatRecipes);
  return (
    <>
      <img src="public\meat-pot.png" alt="" />
      <div className="container">
        {meatRecipes.map((meat) => (
          <div className="bubble" key={meat.sys.id}>
            <h1>{meat?.fields?.name}</h1>
            <div className="recipe">
              <img src={meat?.fields?.image?.fields?.file?.url} alt="" />
              <ul className="ingredients">
                <h2>Ingredients</h2>
                {meat?.fields?.ingredientsList.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <p>{meat?.fields?.instructions}</p>
          </div>
        ))}
      </div>
    </>
  );
}
