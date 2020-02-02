import React from 'react'
import FetchRecipe from './FetchRecipe'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RecipeAPI = () => (
    <div>
        <FetchRecipe />
    </div>
)

export default RecipeAPI;