import React from 'react';

export class IngredientList extends React.Component {
  render() {
    const lielements = this.props.ingredients.map((ingredient, index) => {
      return(
        <li key={`${index}-ingredient`}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
      );
    })
    return (
      <React.Fragment>
        <ul>
          { lielements }
        </ul>
      </React.Fragment>
    );
  }
}
