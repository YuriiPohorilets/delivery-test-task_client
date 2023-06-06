export const item = {
  p: 0,
  width: 'calc((100% - 32px) / 3)',
};

export const card = {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  bgcolor: 'secondary.main',
  borderRadius: '8px',
  boxShadow: 2,
};

export const contentWrapper = {
  display: 'flex',
  gap: '16px',
  justifyContent: 'space-between',
};

export const text = {
  flex: '1 0 150px',
};

export const value = {
  flex: '1 0 auto',

  fontWeight: 700,
  color: 'primary.darker',
  textAlign: 'right',
};

export const btnWrapper = {
  p: '8px',
};

export const button = {
  '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },

  width: '100%',

  fontWeight: '700',
  color: 'primary.darker',
  textTransform: 'none',

  borderColor: 'primary.darker',
};
