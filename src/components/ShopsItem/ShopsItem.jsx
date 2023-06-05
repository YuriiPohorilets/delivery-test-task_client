import { Link } from 'react-router-dom';
import { ListItem, Card, CardMedia, CardActionArea } from '@mui/material';

export const ShopsItem = ({ shop }) => {
  const { _id, name, imgUrl } = shop;

  return (
    <ListItem sx={{ maxWidth: '250px', p: 0 }}>
      <Card sx={{ bgcolor: 'transparent', boxShadow: 0 }}>
        <CardActionArea
          component={Link}
          to={`/shops/${_id}`}
          sx={{ overflow: 'hidden', width: '250px', height: '100px', borderRadius: '8px' }}
        >
          <CardMedia
            component="img"
            alt={name}
            image={imgUrl}
            width={250}
            height={180}
            loading="lazzy"
          />
        </CardActionArea>
      </Card>
    </ListItem>
  );
};
