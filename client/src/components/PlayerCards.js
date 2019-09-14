import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Rating, Card, Icon } from 'semantic-ui-react';

const PlayerCards = (props) => {
  const [ favorites, setFavorites ] = useLocalStorage("ids", []);

    const handleClick = (event) => {
      setFavorites([...favorites, event.target.parentNode.parentNode.parentNode.parentNode.id])
    }

    console.log(favorites);
  
    return (
      
        <Card.Group>
        {
          props.players.map((player) => 
          favorites.includes(player.id) ? <Card key={player.id} id={player.id}>
          <Card.Content>
            <Card.Header>{player.name} <Rating icon='heart' onClick={handleClick} defaultRating={1} maxRating={1} /></Card.Header>
            <Card.Meta>{player.country}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <a>
            <Icon name='search' />
            {player.searches}
          </a>
        </Card.Content>       
          </Card> : <Card key={player.id} id={player.id}>
          <Card.Content>
            <Card.Header>{player.name} <Rating icon='heart' onClick={handleClick} defaultRating={0} maxRating={1} /></Card.Header>
            <Card.Meta>{player.country}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <a>
            <Icon name='search' />
            {player.searches}
          </a>
        </Card.Content>       
          </Card>)
        }
      </Card.Group>);
}
 
export default PlayerCards;