import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class RecipePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.recipes)  // test, undefined chỗ này nè
        return (
            <div>
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        // recipe: state.recipes.find((recipe) => {
        //     return recipe.recipe.id == props.match.params.id;
        // })
        recipes: state
    }
}


export default withRouter(connect(mapStateToProps)(RecipePage));
