import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';

export const NavBar = () => {
  return (
    <Box component={'nav'}>
      <List>
        <ListItem>
          <Button
            component={NavLink}
            to={'/shops'}
            sx={{ color: 'primary.text', fontSize: '16px', textTransform: 'none' }}
          >
            Shops
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
