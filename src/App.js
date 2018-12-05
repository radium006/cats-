import React, { Component } from 'react';
import KingCat from './components/kingcat'
import CatList from './components/catlist'



class App extends Component {
  render() {
    return (
      <div className="App">
        <KingCat/>

        <CatList />
      </div>
    );
  }
}

export default App;
