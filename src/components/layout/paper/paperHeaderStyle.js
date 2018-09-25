const paperHeaderStyle = {
  paperHeader: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    borderBottom: 'none',
    background: 'transparent',
    zIndex: '3 !important',
    '&:first-child': {
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
    },
  },
  paperHeaderPlain: {
    marginLeft: '0px !important',
    marginRight: '0px !important',
  },
  paperHeaderStats: {
    '& $paperHeaderIcon': {
      textAlign: 'right',
    },
    '& h1,& h2,& h3,& h4,& h5,& h6': {
      margin: '0 !important',
    },
  },
};

export default paperHeaderStyle;
