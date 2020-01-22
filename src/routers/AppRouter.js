import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'
import { RecipePage } from '../components/RecipePage';

const AppRouter = (
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/recipe/:id" component={RecipePage} />
        </Switch>
    </div>
);

export default AppRouter;