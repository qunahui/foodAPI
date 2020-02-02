import React from 'react';
import { axiosRecipeGET } from '../api/api'
import { connect } from 'react-redux';
import { addRecipes, addRecipe } from '../actions/recipes'
import RecipeList from './RecipeList';
import RecipeListItem from './RecipeListItem';

export class FetchRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'chicken',
            health: [],
            diet: [],
            recipes: {},
            from: 0,
            to: 999999
        }
    }

    render() {
        return (
            <div>
                <span style={{ fontSize: '200%', fontStyle: 'bold' }}>RECIPE API</span> <br />
                <label>Searching by keyword: </label>
                <input type="text" name="query" value={this.state.query} onChange={this.handleQueryChange} /> <br />
                <button onClick={this.handleSubmit}>Submit</button> <br />
                <label style={{ fontSize: '200%', fontStyle: 'bold' }}>Health label: </label> <br />
                <input type="checkbox" name="healthLabel" value="alcohol-free" />Alcohol-free<br />
                <input type="checkbox" name="healthLabel" value="celery-free" />Celery-free<br />
                <input type="checkbox" name="healthLabel" value="crustacean-free" />Crustacean-free<br />
                <input type="checkbox" name="healthLabel" value="dairy-free" />Dairy-free<br />

                <label style={{ fontSize: '200%', fontStyle: 'bold' }}>Diet label: </label> <br />
                <input type="checkbox" name="dietLabel" value="balanced" />Balanced<br />
                <input type="checkbox" name="dietLabel" value="high-fiber" />High-fiber<br />
                <input type="checkbox" name="dietLabel" value="high-protein" />High-Protein<br />
                <input type="checkbox" name="dietLabel" value="low-carb" />Low-Carb<br />

                <label style={{ fontSize: '200%', fontStyle: 'bold' }}>Calories (range): </label> <br />
                from:<input type="text" name="range" value={this.state.from} onChange={this.handleChangeValue} /><br />
                to:<input type="text" name="range" value={this.state.to} onChange={this.handleChangeValue} /><br />

                {
                    this.state.recipes ?
                        <RecipeList /> :
                        null
                }
            </div>
        );
    }

    handleChangeValue = e => {
        e.persist();
        let val = parseInt(e.target.value)
        console.log(typeof val, '    ', val)
        this.setState(() => ({ [val]: val }))
    }


    handleInputChecked = (name) => {
        const selector = document.querySelectorAll(`input[name=${name}]`);
        let array = [];
        selector.forEach(item => { if (item.checked) array.push(item.value) })
        return array
    }

    handleQueryChange = e => {
        const query = e.target.value;
        this.setState(() => ({ query }));
    }

    handleSubmit = async (e) => {
        let params = {
            ...this.state,
            recipes: null
        }
        e.preventDefault();

        let healthLabels = this.handleInputChecked('healthLabel')
        let dietLabels = this.handleInputChecked('dietLabel')


        params.health = healthLabels
        params.diet = dietLabels

        let res = await axiosRecipeGET(params);

        let recipes = res.data.hits;
        recipes.forEach(recipe => {
            const id = recipe.recipe.uri.substr(recipe.recipe.uri.lastIndexOf('_') + 1);
            recipe.recipe["id"] = id;
        })

        this.props.addRecipes(recipes);
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe)),
        addRecipes: (recipes) => dispatch(addRecipes(recipes))
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FetchRecipe);