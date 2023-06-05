import { Link } from 'react-router-dom';
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

export const ShopsItem = ({ name, location, imgUrl, id }) => {
  return (
    <ListItem>
      <Card>
        <CardActionArea component={Link} to={`/shops/${id}`}>
          <CardMedia component="img" alt={name} image={imgUrl} />

          <CardContent>
            <Typography>{name}</Typography>
            <Typography>{location}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
};
