import React from 'react';
import { Rating, Card, Icon } from 'semantic-ui-react';

const CardComponent = (props) => {
 
    return (
          <Card key={props.player.id} id={props.player.id}>
          <Card.Content>
            <Card.Header>{props.player.name} 
            {
              props.favorites.includes(props.player.id.toString()) ? <Rating icon='heart' onClick={props.handleClick} defaultRating={1} maxRating={1} /> : <Rating icon='heart' onClick={props.handleClick} defaultRating={0} maxRating={1} />
            }
            </Card.Header>
            <Card.Meta>{props.player.country}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <a>
            <Icon name='search' />
            {props.player.searches}
          </a>
        </Card.Content>       
          </Card>)
}
 
export default CardComponent;