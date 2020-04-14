import React from 'react';

import Layout from './Layout.jsx';
import Form from '../components/Form.jsx';
import List from "../components/List.jsx";
import Pagination from "../components/Pagination.jsx";
import RssProvider from "../components/rss.provider";

const App = () => (
  <RssProvider>
    <Layout>
      <Form />
      <List />
      <Pagination />
    </Layout>
  </RssProvider>
);

export default App;