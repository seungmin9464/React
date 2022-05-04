import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './component/Global'
import Main from './component/main/Main';
import { darkTheme, lightTheme, chanege } from './component/main/ChangeTheme';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <Main
        chanege={ chanege }
        isDarkMode={ isDarkMode } 
        toggleDarkMode={ toggleDarkMode }
      />
    </ThemeProvider>
  );
};

export default App;