import React from 'react';
import { axiosFoodGET } from '../api/api'
import { connect } from 'react-redux';
import { addFoods, addFood } from '../actions/foods';
import FoodList from './FoodList'

export class FetchFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingr: 'chicken',
            foods: {}
        }
    }

    render() {
        return (
            <div>
                <span style={{ fontSize: '200%', fontStyle: 'bold' }}>FOOD API</span> <br />
                <label>Search by name:</label>
                <input type="text" name="ingr" value={this.state.ingr} onChange={this.handleIngrChange} />
                <button onClick={this.handleSubmit}>Submit</button>
                {
                    this.state.foods.length !== 0 ?
                        <FoodList /> :
                        console.log(this.state.foods)
                }
            </div>
        );
    }

    handleIngrChange = e => {
        const ingr = e.target.value;
        this.setState(() => ({ ingr }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const params = {
            ...this.state
        }

        let res = await axiosFoodGET(params);

        let foods = res.data.hints;

        this.props.addFoods(foods);

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFood: (food) => dispatch(addFood(food)),
        addFoods: (foods) => dispatch(addFoods(foods))
    }
}

const mapStateToProps = (state) => {
    return {
        foods: state.foods
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FetchFood);