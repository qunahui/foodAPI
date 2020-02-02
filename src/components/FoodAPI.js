import React from 'react'
import FetchFood from './FetchFood'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const FoodAPI = () => (
    <div>
        <FetchFood />
    </div>
)

export default FoodAPI;