export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow:
      '0 10px 70px 0 rgba(103,151,255,.3), 0 15px 105px 0 rgba(103,151,255,.3)',

    '&:hover ': {
      boxShadow:
        '0 10px 70px 0 rgba(103,151,255,.6), 0 15px 105px 0 rgba(103,151,255,.6)',
    },
    '&:hover svg': {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.2rem',
    marginBottom: '-0.4rem',
    fontSize: '1rem',
    fontWeight: '500',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.1rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-8.5px',
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '45px !important',
    height: '45px !important',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    opacity: 0,
  },
};
