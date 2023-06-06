import { useDispatch } from 'react-redux';
import { ListItem, Card, CardContent, CardMedia, Box, Typography, Button } from '@mui/material';
import { addToCart } from 'redux/cart/slice';
import { item, card, contentWrapper, text, value, btnWrapper, button } from './productsItemStyles';

export const ProductsItem = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imgUrl } = product;

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
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(addToCart(product))}
            sx={button}
          >
            Add to cart
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};
