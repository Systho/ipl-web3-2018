import React from "react";
import { HashRouter } from "react-router-dom";

import {AuthenticationProvider} from "react/contexts/authentication";
import Layout from "./layout";

function Main() {
  return (
    <HashRouter>
      <AuthenticationProvider >
      <Layout />
      </AuthenticationProvider>
    </HashRouter>
  );
}

export default Main;
