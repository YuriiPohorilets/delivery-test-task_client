import { useDispatch } from 'react-redux';
import { ListItem, Card, CardContent, CardMedia, Box, Typography, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { addToCart } from 'redux/cart/slice';
import { useAuth } from 'hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { item, card, contentWrapper, text, value, btnWrapper, button } from './productsItemStyles';

export const ProductsItem = ({ product }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const { name, price, imgUrl } = product;

  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(addToCart(product));
    } else {
      toast.warn('You need to login or register');
    }
  };

  return (
    <ListItem sx={item}>
      <Card sx={card}>
        <Box>
          <CardMedia
            component="img"
            alt={name}
            image={imgUrl}
            width={250}
            height={180}
            loading="lazy"
          />

          <CardContent sx={contentWrapper}>
            <Typography sx={text}>{name}</Typography>
            <Typography sx={value}>{price} UAH</Typography>
          </CardContent>
        </Box>

        <Box sx={btnWrapper}>
          <Button variant="outlined" type="button" onClick={handleAddToCart} sx={button}>
            Add to cart
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};
