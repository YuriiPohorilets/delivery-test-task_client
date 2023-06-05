import { Link } from 'react-router-dom';
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

export const ShopsItem = ({ name, location, imgUrl, id }) => {
  return (
    <ListItem sx={{ maxWidth: '250px', p: 0 }}>
      <Card sx={{ bgcolor: 'transparent', boxShadow: 0 }}>
        <CardActionArea
          component={Link}
          to={`/shops/${id}`}
          sx={{ position: 'relative', overflow: 'hidden', width: '250px', height: '180px' }}
        >
          <CardMedia
            component="img"
            alt={name}
            image={imgUrl}
            width={250}
            height={180}
            loading="lazzy"
          />

          <CardContent
            sx={{ position: 'absolute', top: 0, left: 0, bgcolor: 'primary.light', p: '4px 8px' }}
          >
            <Typography>{name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
};
