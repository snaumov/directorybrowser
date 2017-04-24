import React, { Component } from 'react';
import './App.sass';
import DirListContainer from './frontend/containers/dirListContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DirListContainer />
      </div>
    );
  }
}

export default App;
