import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';
import { list, item, button } from './navBarStyles';

export const NavBar = () => {
  return (
    <Box component={'nav'}>
      <List sx={list}>
        <ListItem sx={item}>
          <Button component={NavLink} to={'/shops'} sx={button}>
            Shops
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
