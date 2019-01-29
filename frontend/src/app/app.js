import React from 'react'
import { Route, Link as NavLink } from 'react-router-dom'
//import ChatClient from '../../websockets/websocket_chat_client'
import { PrivateRoute } from '../components/private-route'
import Login from '../views/login'
import HomePage from '../views/home-page'

let Fragment = React.Fragment
//ChatClient.connect()

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Fragment>
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/users">
                    Users
                </NavLink>
                <NavLink className="nav-link" to="/login">
                    Login
                </NavLink>
                <div>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Fragment>
        )
    }
}

export default App