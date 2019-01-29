import React from 'react'

class Login extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputText = (e) => {
        e.preventDefault();
        let {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render = () => {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleInputText}/>
                <input type="text" name="password" onChange={this.handleInputText}/>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login