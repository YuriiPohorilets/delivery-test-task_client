import { useDispatch } from 'react-redux';
import { ListItem, Card, CardContent, CardMedia, Box, Typography, Button } from '@mui/material';
import { addToCart } from 'redux/cart/slice';

export const ProductsItem = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imgUrl } = product;

  return (
    <ListItem sx={{ width: 'calc((100% - 32px) / 3)', p: 0 }}>
      <Card sx={{ boxShadow: 1, bgcolor: 'secondary.main', borderRadius: '8px' }}>
        <CardMedia
          component="img"
          alt={name}
          image={imgUrl}
          width={250}
          height={180}
          loading="lazzy"
        />

        <CardContent sx={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
          <Typography>{name}</Typography>
          <Typography>{price} UAH</Typography>
        </CardContent>

        <Box sx={{ p: '8px' }}>
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(addToCart(product))}
            sx={{
              '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },
              textTransform: 'none',
              fontWeight: '700',
              width: '100%',
              color: 'primary.darker',
              borderColor: 'primary.darker',
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};
