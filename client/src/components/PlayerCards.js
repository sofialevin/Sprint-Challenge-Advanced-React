import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Rating, Card, Icon } from 'semantic-ui-react';

const PlayerCards = (props) => {
  const [ favorites, setFavorites ] = useLocalStorage("ids", []);

    const handleClick = (event) => {
      const id = event.target.parentNode.parentNode.parentNode.parentNode.id;
      favorites.includes(id) ?
      setFavorites(favorites.filter(function(item){
        return item !== id
    }))
      : setFavorites([...favorites, id])
    }
  
console.log(favorites)

    return (
      
        <Card.Group>
        {
          props.players.map((player) => 
          <Card key={player.id} id={player.id}>
          <Card.Content>
            <Card.Header>{player.name} 
            {
              favorites.includes(player.id.toString()) ? <Rating icon='heart' onClick={handleClick} defaultRating={1} maxRating={1} /> : <Rating icon='heart' onClick={handleClick} defaultRating={0} maxRating={1} />
            }
            </Card.Header>
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