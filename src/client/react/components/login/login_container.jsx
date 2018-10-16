import React from 'react';
import LoginComponent from './login_component';
import { Redirect } from 'react-router-dom';


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

    authenticate(){
        console.log("email : ", this.state.email);
        console.log("password : ", this.state.password);
        // send email and password to API
        //retrieve JWT
        //store jwt into localStorage

        const jwt = "FAKE JWT";
        localStorage.setItem("JWT", JSON.stringify(jwt));
        this.setState({
            jwt: jwt,
            authenticated: true,
        })
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