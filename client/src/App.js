import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => this.setState({ players: players }))
      .catch(err => console.log("noooo: ", err));
  }

  render() {
    console.log(this.state.players) 
    return (
    <div>

    </div>);
  }
}
 
export default App;
