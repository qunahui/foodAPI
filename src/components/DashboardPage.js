import React from 'react'
import FetchRecipe from './FetchRecipe'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const ExpenDashboardPage = () => (
    <div>
        <Link to='/recipe-api'>Recipe API</Link> <br />
        <Link to='/food-api'>Food API</Link> <br />
        <Link to='/nutrition-analysis'>Nutrition Data API</Link>
    </div>
)

export default ExpenDashboardPage;