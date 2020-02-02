import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FoodListItem from './FoodListItem';

class FoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodItem: this.props.food.food
        }
    }


    render() {
        return (
            <div>
                <Link to="/dashboard">
                    Back to home
                </Link>
                {console.log(this.state.foodItem)}
                <FoodListItem {...this.state.foodItem} />
                Brand: {this.state.foodItem.brand}
                <br />

            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        food: state.foods.find((food) => {
            return food.food.foodId === props.match.params.id;
        })
    }
}


export default connect(mapStateToProps)(FoodPage);


