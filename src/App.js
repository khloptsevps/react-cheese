import React from 'react';

import Header from './components/header';
import Title from './components/title/Title';
import Sort from './components/sort/Sort';
import Filter from './components/filter/Filter';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <Title />
        <Sort />
        <Filter />
      </div>
    </div>
  </div>
);

export default App;
