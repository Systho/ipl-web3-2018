import React from "react";
import withContextConsumer from "react/utils/with_context_consumer.jsx";

const ThemeContext = React.createContext({
  theme: "dark",
  setThemeLight: () => {},
  setThemeDark: () => {},
  toggleTheme: () => {},
});

const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark"
    };

    this.setTheme = this.setTheme.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  setTheme(value) {
    this.setState({
      theme: value
    });
  }

  toggleTheme() {
    const { theme } = this.state;

    switch(theme){
      case "dark":
        this.setTheme("light");
        break;
        
      default:
      case "light":
        this.setTheme("dark");
    }
  }

  render() {
    const { setTheme, toggleTheme } = this;
    const { theme } = this.state;
    const { children } = this.props;

    const providerValues = {
      theme,
      setThemeDark: () => setTheme("dark") ,
      setThemeLight: () => setTheme("light") ,
      toggleTheme,
    };
    return (
      <ThemeContext.Provider value={providerValues}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

const withTheme = withContextConsumer(ThemeConsumer);

export { ThemeConsumer, ThemeProvider, withTheme };
