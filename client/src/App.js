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
      {
        this.state.players.map((player) => <div key={player.id}>
          <p>{player.name}</p>
          <p>{player.country}</p>
          <p>{player.searches}</p>
          <p>{player.id}</p>
        </div>)
      }
    </div>);
  }
}
 
export default App;
