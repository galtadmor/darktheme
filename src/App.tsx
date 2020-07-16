import React from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from 'theme';

interface State {
  darkMode: boolean;
}

interface State {
  darkMode: boolean;
}

class App extends React.Component<{}, State>{

  state = {
    darkMode: false
  }

  toggleTheme = () => {
    const { darkMode } = this.state;
    this.setState( { darkMode: !darkMode });
  }

  render() {
    const { darkMode } = this.state;
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <h1>Dark Theme</h1>
          <button onClick={this.toggleTheme}>
            <span role="img" aria-label="icon">{darkMode ? '🌜' : '🌞'}</span>
          </button>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
