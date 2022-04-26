import React from 'react';

import GlobalStyle from './component/Global'
import Main from './component/main/Main';
import theme from './component/style';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Main theme={ theme }/>
    </div>
  );
};

export default App;