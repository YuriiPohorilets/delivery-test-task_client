import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export const Home = () => {
  return (
    <Box sx={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <Typography component="h1" sx={{ fontSize: '28px' }}>
        Welcome to the Delivery!
      </Typography>

      <Typography sx={{ fontSize: '24px' }}>
        Here, you can conveniently and quickly find the items you need and place an order with just
        a few clicks. Browse through the available assortment, add selected items to your cart, and
        keep track of all your orders.
      </Typography>

      <Typography sx={{ fontSize: '24px' }}>
        We've made every effort to ensure that the ordering process is smooth and enjoyable for you.
      </Typography>

      <Typography sx={{ fontSize: '24px' }}>
        Join us and enjoy a convenient and reliable delivery service!
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/shops"
        sx={{
          '&:hover': { bgcolor: 'neutral.main' },
          width: '300px',
          fontWeight: '700',
          fontSize: '24px',
          color: 'primary.darker',
          textTransform: 'none',
        }}
      >
        Let's start
      </Button>
    </Box>
  );
};
