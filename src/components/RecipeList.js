import React from 'react';
import RecipeListItem from './RecipeListItem'
import { connect } from 'react-redux'

export const RecipeList = (props) => {
    return (
        <div>
            {console.log(props)}
            {
                props.recipes.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">No Recipe</span>
                    </div>
                ) : (
                        props.recipes.map((recipe) => {
                            let recipeItem = recipe.recipe
                            return <RecipeListItem key={recipeItem.id} {...recipeItem} />
                        })
                    )
            }
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    };
};
export default connect(mapStateToProps)(RecipeList);