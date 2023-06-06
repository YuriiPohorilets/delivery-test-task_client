import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';
import { list, item, button } from './authBarStyles';

export const AuthBar = () => {
  return (
    <Box>
      <List sx={list}>
        <ListItem sx={item}>
          <Button component={NavLink} to={'/login'} sx={button}>
            Login
          </Button>
        </ListItem>

        <ListItem sx={item}>
          <Button component={NavLink} to={'/register'} sx={button}>
            Register
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
