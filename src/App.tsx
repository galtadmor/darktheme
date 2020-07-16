import React from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from 'theme';
import { Button, Paragraph } from 'components';

import styles from './App.module.scss';

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
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>Dark Theme</h1>
              <Button onClick={this.toggleTheme}>
                <span role="img" aria-label="icon">{darkMode ? '🌜' : '🌞'}</span>
                <span>{darkMode ? 'Dark' : 'Light'}</span>
              </Button>
            </div>
            <Paragraph />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
