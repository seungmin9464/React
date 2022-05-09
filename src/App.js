import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, chanege } from './component/main/ChangeTheme';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './component/Global'
import Main from './component/main/Main';
import Library from './component/library/LibraryMain';
import LibraryView from './component/library/LibraryView';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("changeForm") === "true"
  )

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <>
      <ThemeProvider
        theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route
            path='/'
            element={
              <Main
                chanege={chanege}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />}>
          </Route>

          <Route
            path='/library/Main'
            element={<Library />}>
          </Route>

          <Route
            path='/library/View'
            element={<LibraryView />}>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;