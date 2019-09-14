import React from 'react';
import './App.css';
import PlayerCards from './components/PlayerCards';
import 'semantic-ui-css/semantic.min.css';

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
      .catch(err => console.log("Error: ", err));
  }

  render() {
    console.log(this.state.players) 
    return (
      <PlayerCards players={this.state.players} />);
  }
}
 
export default App;
