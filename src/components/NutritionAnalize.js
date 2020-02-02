import React from 'react';
import { axiosNFactsPOST, axiosNFactsGET } from '../api/api'
import { connect } from 'react-redux';

export class NutritionAnalize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingr: ['1 cup rice', '10 oz chickpeas'],
            res: null
        }
    }

    render() {
        return (
            <div>
                <span style={{ fontSize: '200%', fontStyle: 'bold' }}>NUTRITION DATA API</span> <br />
                <label>fields:</label> <br />
                <textarea type="text" name="ingr" value={this.state.ingr} onChange={this.handleDataChange} placeholder='1 cup rice, 10 oz chickpeas' /> <br />
                <button onClick={this.handleSubmit}>Analize</button>
                {
                    this.handleShowInfo()
                }
            </div>
        );
    }

    handleDataChange = e => {
        const ingr = e.target.value.split(',');
        this.setState(() => ({ ingr }))
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const params = {
            ...this.state
        }

        console.log(params)

        let res = await axiosNFactsGET(params);

        res = res.data

        this.setState(() => ({ res }))
    }

    handleShowInfo = () => {
        if (this.state.res) {
            let res = this.state.res
            console.log(res.totalNutrients)
            return (
                <div>
                    <p><span style={{ fontWeight: 'bold', fontSize: '150%' }}>calories:</span> {res.calories}</p>
                    {Object.entries(res.totalNutrients).map((nutrient, index) => {
                        return <p key={index}><span style={{ fontWeight: 'bold', fontSize: '150%' }}>{nutrient[1].label}: </span> {nutrient[1].quantity}{nutrient[1].unit}</p>
                    })}
                </div>
            )
        }
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
        info: state
    }
}

export default connect(mapStateToProps)(NutritionAnalize);