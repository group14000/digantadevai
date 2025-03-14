import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import Home from './codes/Home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
