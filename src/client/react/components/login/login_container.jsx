import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginComponent from './login_component';
import { createSession } from 'react/services/session';


class LoginContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            authenticated: false,
            jwt: null,
        };

        this.authenticate = this.authenticate.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    authenticate(e){
        e.preventDefault();

        const {
            email, 
            password,
        } = this.state;

        console.log("email : ", email);
        console.log("password : ", password);
        // send email and password to API

        createSession(email, password)
            .then( jwt => {
                this.setState({
                    jwt: jwt,
                    authenticated: true,
                })
            });   
    }


    render(){
        const {
            email,
            password,
            authenticated,
        } = this.state;

        return (
            <React.Fragment>
            { authenticated && <Redirect to="/messages" />}
            { !authenticated &&
                <LoginComponent
                    email={email}
                    password={password}
                    authenticate={this.authenticate}
                    onFieldChange={this.onFieldChange}
                />
            }
            </React.Fragment>
        )
    }

}


export default LoginContainer