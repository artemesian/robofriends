import React from 'react';
import CardList from "./components/CardList/CardList.js";
import SearchBox from "./components/SearchBox/SearchBox.js";
import Scroll from "./components/Scroll/Scroll.js";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchField : "",
      robots:[]
    }
  }
  onSearchField = (val) =>{
    this.setState({searchField:val})
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(robots=>this.setState({robots:robots.map(robot=>{return {id:robot.id,name:robot.name,email:robot.email}})}))
  }
  render() {
    return (
      <div className="app center">
        <h1 className="SEGA title-robofriend">RoboFriends</h1>
        <SearchBox onSearchField={this.onSearchField}/>
        <Scroll>
          <CardList searchField={this.state.searchField} robots={this.state.robots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
