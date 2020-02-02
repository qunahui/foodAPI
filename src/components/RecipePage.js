import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeListItem from './RecipeListItem';

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeItem: this.props.recipe.recipe
        }
    }

    calcCaloriesForOnePerson = (total, serve) => {
        return Math.floor(total / serve);
    }

    calcToTalDaily = (calories, serve) => {
        console.log(calories, '   ', serve);
        return Math.floor(calories / serve);
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">
                    Back to home
                </Link>
                {console.log(this.state.recipeItem)}
                <RecipeListItem {...this.state.recipeItem} />
                {}
                <br />
                <div>See full instruction at: <a href={this.state.recipeItem.url} target="_blank">{this.state.recipeItem.source}</a></div>
                <div>
                    <hr />
                    {this.state.recipeItem.ingredientLines.length} Ingredients :
                    {this.state.recipeItem.ingredientLines.map((ingredient, index) => { return <p key={index}>- {ingredient} <br /></p> })}
                </div>
                <div>
                    <hr />
                    Nutrition: <br />
                    CALORIES / SERVING: {this.calcCaloriesForOnePerson(this.state.recipeItem.calories, this.state.recipeItem.yield)} <br />
                    DAILY VALUE: {this.calcCaloriesForOnePerson(this.state.recipeItem.totalDaily.ENERC_KCAL.quantity, this.state.recipeItem.yield)} % <br />
                    SERVING: {this.state.recipeItem.yield}
                </div>
                <div>
                    <hr />
                    {
                        Object.entries(this.state.recipeItem.totalNutrients).map((nutrient, index) => (
                            <p key={index + 100}>{nutrient[1].label}: &#09; {nutrient[1].quantity} {nutrient[1].unit} <br /></p>
                        ))
                    }
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        recipe: state.recipes.find((recipe) => {
            return recipe.recipe.id == props.match.params.id;
        })
    }
}


export default connect(mapStateToProps)(RecipePage);
