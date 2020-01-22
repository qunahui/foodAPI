import React from 'react';
import { axiosGET } from '../api/api'
import { connect } from 'react-redux';
import { addRecipes, addRecipe } from '../actions/recipes'
import RecipeList from './RecipeList';

export class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'chicken',
            recipes: {},
            showComponents: false
        }
    }

    render() {
        return (
            <div>
                <label>Search by name:</label>
                <input type="text" name="query" value={this.state.query} onChange={this.handleQueryChange} />
                <button onClick={this.handleSubmit}>Submit</button>
                {
                    this.state.showComponents ?
                        <RecipeList /> :
                        null
                }
            </div>
        );
    }

    handleQueryChange = e => {
        const query = e.target.value;
        this.setState(() => ({ query }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const params = {
            ...this.state
        }

        let res = await axiosGET(params);

        let recipes = res.data.hits;

        recipes.forEach(recipe => {
            const id = recipe.recipe.uri.substr(recipe.recipe.uri.lastIndexOf('_') + 1);
            recipe.recipe["id"] = id;
        })

        this.props.addRecipes(recipes);
        this.setState({
            showComponents: true
        });
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


export default connect(mapStateToProps, mapDispatchToProps)(Fetch);