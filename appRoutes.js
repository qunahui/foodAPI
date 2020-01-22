import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import AppRouter from './src/routers/AppRouter'

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            {AppRouter}
        </ConnectedRouter>
    )
}

export default App
