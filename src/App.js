import React from 'react';
import CardList from "./components/CardList/CardList.js";
import SearchBox from "./components/SearchBox/SearchBox.js";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchField : "",
    }
  }
  onSearchField = (val) =>{
    this.setState({searchField:val})
  }
  render() {
    return (
      <div className="app center">
        <h1>RoboFriends</h1>
        <SearchBox onSearchField={this.onSearchField}/>
        <CardList searchField={this.state.searchField}/>
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
