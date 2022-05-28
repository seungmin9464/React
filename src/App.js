import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import Net from './component/movie/Net';
import ThemeProvider from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/movie' element={<Net/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;