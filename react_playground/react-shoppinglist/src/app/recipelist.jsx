import React from 'react';
import { IngredientList } from './ingredientlist';
import {RecipeForm } from './recipeform/recipeform';

export class RecipeList extends React.Component {
  render(){
    const liElements = this.props.recipes.map((recipe, index) => {
      const content = recipe.showEditForm ?
          (<RecipeForm recipe={recipe} onSave={(changedRecipe) => this.props.onChangedRecipe(recipe.id, changedRecipe)}/>)
        : (<IngredientList ingredients={recipe.ingredients}/>)
      return (<li
        key={`recipe-${index}`}>
        { recipe.name } (<a onClick={() => this.props.onToggleEditForm(recipe.id)}>Bearbeiten</a>)
        {content}
        </li>)
    });
    return(<ul>{liElements}</ul>)
  }
}
