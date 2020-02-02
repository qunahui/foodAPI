import React from 'react';
import { Link } from 'react-router-dom'

export class FoodListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={'/food-api/food/' + this.props.foodId}>
                <div>
                    <span style={{ fontSize: '150%', fontStyle: 'bold' }}>label: {this.props.label}</span> <br />
                    <img src={this.props.image} /> <br />
                    <hr />
                </div>
            </Link>
        );
    }
}

export default FoodListItem;
            // Energy kcal: {this.props.nutrients.ENERC_KCAL} <br />