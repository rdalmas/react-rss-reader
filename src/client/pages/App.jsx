import React from 'react';

import Form from './compositions/Form.jsx';
import List from "./compositions/List";
import Status from './compositions/Status.jsx';
import AppProvider from '../providers/app.provider.js';

const App = () => {
  const title = "RSS Reader";

  return (
    <AppProvider>
      <div role="main" aria-labelledby="title">
        <h1 id="title" className="center">{title}</h1>
      </div>
      <Form />
      <Status />
      <List />
    </AppProvider>
  )
};

export default App;
