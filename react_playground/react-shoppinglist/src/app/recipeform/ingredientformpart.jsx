import React from 'react';
import { NumericInput } from '../../components/numericinput'

export class IngredientFormpart extends React.Component {
  render() {
    const { ingredient, onChange } = this.props;
    return (
      <div className="ingredient-form">
        <label>
          Name: <input type="text"
            name='name'
            value={ingredient.name}
            onChange={ event => onChange(event)}
          />
        </label>
        <label>
          Menge: <NumericInput
            name='amount'
            value={ingredient.amount}
            onChange={ event => onChange(event)}
          />
        </label>
        <label>
          <select
            name='unit'
            value={ingredient.unit}
            onChange={ event => onChange(event)}
          >
            <option>Stück</option>
            <option>Gramm</option>
            <option>Liter</option>
          </select>
        </label>
      </div>
    );
  }
}
