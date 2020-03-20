import React from 'react';
import {Router} from '@reach/router';
import {createGlobalStyle} from 'styled-components'

import Header from './components/elements/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/elements/NotFound';



const GlobalStyle = createGlobalStyle`
     * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
`;

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Home path="/"/>
        <Movie path="/:movieId"/>
        <NotFound default/>
      </Router>
      <GlobalStyle/>
    </>
  );
}

export default App;
