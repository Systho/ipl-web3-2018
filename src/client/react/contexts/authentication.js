import React from 'react';
import withContextConsumer from 'react/utils/with_context_consumer.jsx';
import * as Session from 'react/services/session.js'

const AuthenticationContext = React.createContext({
  jwt: null,
  login: () => {},
  logout: () => {}
});

const AuthenticationConsumer = AuthenticationContext.Consumer;

class AuthenticationProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jwt: localStorage.getItem("JWT")
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  login({ email, password }) {
    return Session
      .createSession(email, password)
      .then( jwt => {
        this.setState({
          jwt: jwt,
        })
      })
  }
  logout() {
    return Session
      .deleteSession()
      .then( () => {
        this.setState({
          jwt: null,
        })
      })
  }

  render() {
    const { login, logout } = this;
    const { jwt } = this.state;
    const { children } = this.props;

    const providerValues = {
      jwt,
      login,
      logout
    };
    return (
      <AuthenticationContext.Provider value={providerValues}>
        {children}
      </AuthenticationContext.Provider>
    );
  }
}

const withAuthentication = withContextConsumer(AuthenticationConsumer);

export { 
  AuthenticationConsumer,
  AuthenticationProvider,
  withAuthentication,
}