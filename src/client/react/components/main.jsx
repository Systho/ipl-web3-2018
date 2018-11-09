import React from "react";
import { HashRouter } from "react-router-dom";

import { AuthenticationProvider } from "react/contexts/authentication";
import { ThemeProvider } from "react/contexts/theme";
import Layout from "./layout";

function Main() {
  return (
    <HashRouter>
      <AuthenticationProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </AuthenticationProvider>
    </HashRouter>
  );
}

export default Main;
