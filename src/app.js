import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import App from '../appRoutes';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage';
import Fetch from './components/Fetch'
import { history } from './store/configureStore'

const store = configureStore();

const jsx = (
    <Provider store={store} >
        <App history={history} />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(jsx, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})




