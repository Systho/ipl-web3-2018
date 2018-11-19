import React from 'react';
import { Redirect } from 'react-router-dom';

import {withAuthentication} from 'react/contexts/authentication';
import LoginComponent from './login_component';


class LoginContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
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
        const { login } = this.props;
        const { email, password } = this.state;
        e.preventDefault();
        login({email, password});
    }


    render(){
        const {
            email,
            password,
        } = this.state;
        const {
            jwt,
        } = this.props;
        const authenticated = !!jwt;

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


export default withAuthentication(LoginContainer);