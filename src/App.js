import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Library from './component/library/Library';
import Main from './component/main/Main';
import ThemeProvider from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Library' element={<Library/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;