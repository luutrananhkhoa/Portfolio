import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Introduction from './UI/Introduction/Introduction';
import Projects from './UI/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
