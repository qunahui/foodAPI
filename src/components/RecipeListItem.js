import React from 'react';
import { Link } from 'react-router-dom'

export class RecipeListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    calcCaloriesForOnePerson = (total, serve) => {
        return Math.floor(total / serve);
    }

    render() {
        return (
            <Link to={'/recipe-api/recipe/' + this.props.id}>
                <div>
                    <span style={{ fontSize: '150%', fontStyle: 'bold' }}>label: {this.props.label}</span> <br />
                    Serve: {this.props.yield} person(s) <br />
                    Ingredients: {this.props.ingredientLines.length} <br />
                    Calories: {this.calcCaloriesForOnePerson(this.props.calories, this.props.yield)} <br />
                    <img src={this.props.image} /> <br />
                    <hr />
                </div>
            </Link>
        );
    }
}

export default RecipeListItem;