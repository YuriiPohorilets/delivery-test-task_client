import { useDispatch } from 'react-redux';
import {
  ListItem,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material/';
import { removeProduct, incrementQuantity, decrementQuantity } from 'redux/cart/slice';
import { item, card, title, contentWrapper, value, actionArea, button } from './orderItemStyles';

export const OrderItem = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imgUrl, quantity, _id } = product;

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

          <Typography sx={title}>{name}</Typography>
        </Box>

        <Divider />

        <CardContent sx={contentWrapper}>
          <Typography>Quantity: {quantity}</Typography>
          <Typography>Price: {price} UAH</Typography>

          <Typography sx={value}>Total price: {price * quantity} UAH</Typography>
        </CardContent>

        <Divider />

        <Box sx={actionArea}>
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(incrementQuantity(_id))}
            sx={button}
          >
            <Add />
          </Button>

          <Button
            variant="outlined"
            type="button"
            disabled={quantity === 1}
            onClick={() => dispatch(decrementQuantity(_id))}
            sx={button}
          >
            <Remove />
          </Button>

          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(removeProduct(_id))}
            sx={button}
          >
            <Delete />
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};
