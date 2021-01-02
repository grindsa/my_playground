import React from 'react';
import { RecipeForm } from './recipeform/recipeform';
import { IngredientList } from './ingredientlist';
import { addRecipe, changeRecipe, sumRecipes, toggleEditForm }  from './recipestateservice';
import { RecipeList } from './recipelist';
import { Tab } from '../components/tabs/tab';
import { TabController } from '../components/tabs/tabcontroller';
import { Watch } from './watch';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      recipes: [],
    }
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleToggleEditForm = this.handleToggleEditForm.bind(this);
    this.handleRecipeChange = this.handleRecipeChange.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => {
      this.setState({
        recipes
      })
    });
  }

  handleAddRecipe(newRecipe){
    this.setState(currentState => {
      return {
        ... currentState,
        recipes: addRecipe(currentState.recipes, newRecipe)
      }
    })
  }

  handleRecipeChange(id, changedRecipe){
    this.setState(currentState => {
      return {
        ... currentState,
        recipes: changeRecipe(currentState.recipes, id, changedRecipe)
      }
    })
  }

  handleToggleEditForm(id){
    this.setState(currentState =>{
      return {
        ... currentState,
        recipes: toggleEditForm(currentState.recipes, id)
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Watch /> 
        <TabController>
          <Tab headline="Einkaufsliste">
            <IngredientList ingredients={sumRecipes(this.state.recipes)} />
          </Tab>
          <Tab headline="Rezepte">
            <RecipeList recipes={this.state.recipes} onToggleEditForm={this.handleToggleEditForm} onChangedRecipe={this.handleRecipeChange}/>
          </Tab>
          <Tab headline="neues Rezept">
            <RecipeForm onSave={ this.handleAddRecipe }/>
          </Tab>
        </TabController>
      </React.Fragment>
    );
  }
}
