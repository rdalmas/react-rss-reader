import React from 'react';

import Form from '../components/Form.jsx';
import List from "../components/List.jsx";
import Message from '../components/Message.jsx';
import AppProvider from '../providers/app.provider.js';

const App = () => (
  <AppProvider>
    <div role="main" aria-labelledby="title">
      <h1 id="title" className="center">RSS Reader</h1>
    </div>
    <Form />
    <Message />
    <List />
  </AppProvider>
);

export default App;