export const item = {
  p: 0,
  maxWidth: '250px',
};

export const card = {
  bgcolor: 'transparent',
  boxShadow: 0,
};

export const actionArea = {
  '&.active': { filter: 'grayscale(0%)' },

  width: '250px',
  height: '100px',

  borderRadius: '8px',

  transition: 'filter 300ms ease-in-out',
  filter: 'grayscale(60%)',
  overflow: 'hidden',
};
