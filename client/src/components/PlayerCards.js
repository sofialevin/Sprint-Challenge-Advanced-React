import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Card } from 'semantic-ui-react';
import CardComponent from './CardComponent';
import { useFavorites } from '../hooks/useFavorites';

const PlayerCards = (props) => {
  const [ favoritePlayers, setFavoritePlayers ] = useLocalStorage("ids", []);
  const [ favorites, setFavorites ] = useFavorites(false);
  const toggleMode = e => {
    e.preventDefault();
    setFavorites(!favorites);
  };

    const handleClick = (event) => {
      const id = event.target.parentNode.parentNode.parentNode.parentNode.id;
      favoritePlayers.includes(id) ?
      setFavoritePlayers(favoritePlayers.filter(function(item){
        return item !== id
    }))
      : setFavoritePlayers([...favoritePlayers, id])
    }


    return (
      <div>
        <h1>Women's World Cup Players</h1>
        <div className="favorites">
        {
          favorites ? <p>Show All</p> : <p>Show Favorites</p>
        }
        <div className="favorites_toggle">
          <div
            onClick={toggleMode}
            className={favorites ? 'toggle toggled' : 'toggle'}
          />
        </div>
        </div>
      <Card.Group>
        {
          favorites ? props.players.map((player) => {
             if (favoritePlayers.includes(player.id.toString())) {
               return <CardComponent player={player} favorites={favoritePlayers} handleClick={handleClick}/>
             }
          }) : props.players.map((player) => <CardComponent player={player} favorites={favoritePlayers} handleClick={handleClick}/>)
        }
      </Card.Group>
      </div>)
}
 
export default PlayerCards;