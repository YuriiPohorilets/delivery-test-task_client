export const item = {
  p: 0,
  width: 'calc((100% - 16px) / 2)',

  alignItems: 'start',
};

export const card = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  bgcolor: 'secondary.main',
  boxShadow: 2,
  borderRadius: '8px',
};

export const title = {
  p: '4px 16px',
  maxWidth: '100%',

  fontWeight: 700,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const contentWrapper = {
  py: '8px',

  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const value = {
  fontWeight: 700,
  color: 'primary.darker',
};

export const actionArea = {
  p: '8px',

  display: 'flex',
  justifyContent: 'flex-start',
  gap: '8px',
  flexWrap: 'wrap',
};

export const button = {
  '&:hover': { bgcolor: 'neutral.main', borderColor: 'primary.darker' },

  fontWeight: '700',
  fontSize: '16px',
  color: 'primary.darker',
  textTransform: 'none',

  borderColor: 'primary.darker',
};
