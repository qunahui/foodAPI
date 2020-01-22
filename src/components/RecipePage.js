import React from 'react'
import { connect } from 'react-redux'

export class RecipePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)  // test, undefined chỗ này nè
        return (
            <div>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    // recipe: state.recipes.find((recipe) => {
    //     return recipe.recipe.id == props.match.params.id;
    // })
    recipes: state
})


export default connect(mapStateToProps)(RecipePage);
