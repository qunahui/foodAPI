import React from 'react';
import FoodListItem from './FoodListItem'
import { connect } from 'react-redux'

export const FoodList = (props) => {
    return (
        <div>
            {console.log(props)}
            {
                props.foods.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">No Food</span>
                    </div>
                ) : (
                        props.foods.map((food) => {
                            let foodItem = food.food
                            console.log(foodItem)
                            return <FoodListItem key={foodItem.foodId} {...foodItem} />
                        })
                    )
            }
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        foods: state.foods
    };
};
export default connect(mapStateToProps)(FoodList);