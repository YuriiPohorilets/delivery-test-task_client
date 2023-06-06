import { NavLink } from 'react-router-dom';
import { ListItem, Card, CardMedia, CardActionArea } from '@mui/material';
import { item, card, actionArea } from './shopsItemStyles';

export const ShopsItem = ({ shop }) => {
  const { _id, name, imgUrl } = shop;

  return (
    <ListItem sx={item}>
      <Card sx={card}>
        <CardActionArea component={NavLink} to={`/shops/${_id}`} sx={actionArea}>
          <CardMedia
            component="img"
            alt={name}
            image={imgUrl}
            width={250}
            height={180}
            loading="lazy"
          />
        </CardActionArea>
      </Card>
    </ListItem>
  );
};
