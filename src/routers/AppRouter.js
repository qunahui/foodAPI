import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'
import RecipePage from '../components/RecipePage';
import RecipeAPI from '../components/RecipeAPI'
import FoodAPI from '../components/FoodAPI'
import FoodPage from '../components/FoodPage'
import NfactsAPI from '../components/NfactsAPI'

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/recipe-api" component={RecipeAPI} exact={true} />
                <PrivateRoute path="/recipe-api/recipe/:id" component={RecipePage} />
                <PrivateRoute path="/food-api" component={FoodAPI} exact={true} />
                <PrivateRoute path="/food-api/food/:id" component={FoodPage} />
                <PrivateRoute path="/nutrition-analysis" component={NfactsAPI} exact={true} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;