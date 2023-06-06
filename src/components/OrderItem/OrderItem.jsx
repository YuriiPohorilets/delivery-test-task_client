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
import { removeProduct, incrementQuantity, decrementQuantity } from 'redux/cart/slice';

export const OrderItem = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imgUrl, quantity, _id } = product;

  return (
    <ListItem sx={{ width: 'calc((100% - 32px) / 3)', p: 0 }}>
      <Card
        sx={{
          boxShadow: 1,
          bgcolor: 'secondary.main',
          borderRadius: '8px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <CardMedia
            component="img"
            alt={name}
            image={imgUrl}
            width={250}
            height={180}
            loading="lazzy"
          />

          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', p: '4px 16px' }}>
            <Typography
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </Box>

        <Divider light />

        <CardContent sx={{ display: 'flex', gap: '4px', flexDirection: 'column', py: '8px' }}>
          <Typography>Quantity: {quantity}</Typography>
          <Typography>Price: {price} UAH</Typography>

          <Typography sx={{ fontWeight: 700, color: 'primary.darker' }}>
            Total price: {price * quantity} UAH
          </Typography>
        </CardContent>

        <Box sx={{ p: '8px', display: 'flex', gap: '8px' }}>
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(incrementQuantity(_id))}
            sx={{
              '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },
              textTransform: 'none',
              fontWeight: '700',
              color: 'primary.darker',
              borderColor: 'primary.darker',
            }}
          >
            +
          </Button>

          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(decrementQuantity(_id))}
            sx={{
              '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },
              textTransform: 'none',
              fontWeight: '700',
              color: 'primary.darker',
              borderColor: 'primary.darker',
            }}
          >
            -
          </Button>

          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatch(removeProduct(_id))}
            sx={{
              '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },
              textTransform: 'none',
              fontWeight: '700',
              color: 'primary.darker',
              borderColor: 'primary.darker',
            }}
          >
            Remove
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};
