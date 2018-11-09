import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import { withAuthentication } from "react/contexts/authentication";
import HelloWorld from "./hello_world/hello_world";
import HelloFromParams from "./hello_world/hello_from_params";
import TodoAppContainer from "./todo_app/todo_app_container";
import MessagesContainer from "./messages/messages_container";
import MessageContainer from "./message/message_container";
import LoginContainer from "./login/login_container";

function RouterOutlet({ isAuthenticated, location: { pathname } }) {
  const redirectToLogin = !isAuthenticated && pathname !== "/login";

  return (
    <React.Fragment>
      { redirectToLogin && <Redirect to="/login" /> }
      { !redirectToLogin && 
        <React.Fragment>
          <Route exact path="/" render={() => <HelloWorld name="bob" />} />
          <Route path="/hello/:name" component={HelloFromParams} />
          <Route path="/todo" component={TodoAppContainer} />
          <Route path="/messages" component={MessagesContainer} />
          <Route path="/message/:id" component={MessageContainer} />
          <Route path="/login" component={LoginContainer} />
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default withRouter(withAuthentication(RouterOutlet));
