import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Divider,
  ListItemIcon,
} from '@mui/material/';
import { Logout, History, AccountCircle, ShoppingCart } from '@mui/icons-material/';
import { logout } from 'redux/auth/operations';
import { selectCart } from 'redux/cart/selectors';

export const UserMenu = () => {
  const [totalHitsCart, setTotalHitsCart] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const { cart } = useSelector(selectCart);
  const isOpen = !!anchorEl;
  const dispatch = useDispatch();

  const handleClick = e => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const countHitsCart = products => {
    return products.reduce((totalHits, product) => totalHits + product.quantity, 0);
  };

  useEffect(() => {
    setTotalHitsCart(countHitsCart(cart));
  }, [cart]);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Shopping cart">
          <IconButton component={Link} to={'/orders'} aria-label="cart">
            <Badge badgeContent={totalHitsCart} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={isOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
          >
            <AccountCircle sx={{ width: 32, height: 32 }}></AccountCircle>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle fontSize="medium" />
          </ListItemIcon>
          Profile
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <History fontSize="medium" />
          </ListItemIcon>
          Order history
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <Logout fontSize="medium" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
