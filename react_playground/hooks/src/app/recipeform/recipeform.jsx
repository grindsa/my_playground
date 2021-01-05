import React, {useState }from 'react';
import { IngredientFormpart } from './ingredientformpart';

import './recipeform.css';

const createEmptyIngredient = () => ({
  name: '',
  unit: 'Stück',
  amount: ''
})

const emptyRecipe = {
  name: '',
  ingredients: [
    createEmptyIngredient()
  ]
}

export const RecipeForm = ({recipe = emptyRecipe, onSave}) => {

  const [recipeName, setRecipeName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
  }

  const handleAddIngredient = (event) => {
    setIngredients(currentIngredients => ([
      ... currentState.ingredients,
      createEmptyIngredient()
    ]))
  }

  const handleIngredientChange = (event, ingredientName) => {
    const {value, name} = event.target;
    setIngredients(currentIngredients => {
      currentIngredients.map(ingredient => {
        if(ingredient.name === ingredientName) {
          return {
            ... ingredient,
            [name]: value
          }
        }
        return ingredient;
      })});
  }

  const handleRecipeSave = () => {
    const finishedIngredients = ingredients.map(ingredient => ({
      ... ingredient,
      amount: Number.parseFloat(ingredient.amount)
    }));
    onSave({
      id: recipe.id,
      name: recipeName,
      ingredients: finishedIngredients
    });

    setRecipeName('')
    setIngredients([])
  }

  console.log(ingredients)
  const ingredientList = ingredients.map((ingredient, index) =>{
    return (
      <IngredientFormpart
      key={`ingredient-${index}`}
      ingredient={ingredient}
      onChange= {(event) => handleIngredientChange(event, ingredient.name)}
      />
    )
  })

  return (
    <form>
      <label>
        Name des Rezepts:
        <input
          type='text'
          value={ recipeName }
          onChange= { handleNameChange }
         />
      </label>
      <label>
        Zutaten:
        {ingredientList}
      </label>
      <article>
        <button type="button" onClick={() => handleAddIngredient()}> Zutat hinzufügen </button>
      </article>
      <article>
        <button type="button" onClick={() => handleRecipeSave()}> Speichern </button>
      </article>
    </form>
  );
}
