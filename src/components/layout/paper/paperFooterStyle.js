const paperFooterStyle = {
  paperFooter: {
    padding: '0',
    paddingTop: '10px',
    margin: '0 15px 10px',
    borderRadius: '0',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'transparent',
    border: '0',
  },
  paperFooterProfile: {
    marginTop: '-15px',
  },
  paperFooterPlain: {
    paddingLeft: '5px',
    paddingRight: '5px',
    backgroundColor: 'transparent',
  },
  paperFooterStats: {
    borderTop: '1px solid #eee',
    marginTop: '20px',
    '& svg': {
      position: 'relative',
      top: '4px',
      marginRight: '3px',
      marginLeft: '3px',
      width: '16px',
      height: '16px',
    },
  },
  paperFooterChart: {
    borderTop: '1px solid #eee',
  },
};

export default paperFooterStyle;
