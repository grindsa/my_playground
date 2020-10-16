import React from 'react';
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

export class RecipeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = emptyRecipe;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRecipeSave = this.handleRecipeSave.bind(this);
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    });
  }

  handleAddIngredient(event){
    this.setState(currentState => {
      return {
        ... currentState,
        ingredients: [
          ... currentState.ingredients,
          createEmptyIngredient()
        ]
      }
    })
  }

  handleIngredientChange(event, ingredientName){
    const {value, name} = event.target;
    this.setState(currentState => ({
      ... currentState,
      ingredients: currentState.ingredients.map(ingredient => {
        if(ingredient.name === ingredientName) {
          return {
            ... ingredient,
            [name]: value
          }
        }
        return ingredient;
      })
    }))
  }

  handleRecipeSave(){
    const finishedIngredients = this.state.ingredients.map(ingredient => ({
      ... ingredient,
      amount: Number.parseFloat(ingredient.amount)
    }));
    this.props.onSave({
      name: this.state.name,
      ingredients: finishedIngredients
    });
  }

  render() {
    const ingredientFormpart = this.state.ingredients.map((ingredient, index) =>{
      return (
        <IngredientFormpart
        key={`ingredient-${index}`}
        ingredient={ingredient}
        onChange= {(event) => this.handleIngredientChange(event, ingredient.name)}
        />
      )
    })
    return (
      <form>
        <label>
          Name des Rezepts:
          <input
            type='text'
            value={ this.state.name }
            onChange= { this.handleNameChange }
           />
        </label>
        <label>
          Zutaten:
          {ingredientFormpart}
        </label>
        <article>
          <button type="button" onClick={() => this.handleAddIngredient()}> Zutat hinzufügen </button>
        </article>
        <article>
          <button type="button" onClick={() => this.handleRecipeSave()}> Speichern </button>
        </article>
      </form>
    );
  }
}
