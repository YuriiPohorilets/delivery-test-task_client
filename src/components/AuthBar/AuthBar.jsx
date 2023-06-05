import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';

export const AuthBar = () => {
  return (
    <Box>
      <List sx={{ display: 'flex', gap: '8px' }}>
        <ListItem>
          <Button
            component={NavLink}
            to={'/login'}
            sx={{ color: 'primary.text', fontSize: '16px', textTransform: 'none' }}
          >
            Login
          </Button>
        </ListItem>

        <ListItem>
          <Button
            component={NavLink}
            to={'/register'}
            sx={{ color: 'primary.text', fontSize: '16px', textTransform: 'none' }}
          >
            Register
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
