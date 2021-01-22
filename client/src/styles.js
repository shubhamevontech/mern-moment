import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 12,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'salmon',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
    },
  },
  image: {
    marginLeft: '15px',
  },
  postGrid:{
    height:"550px",
    overflowY:'scroll',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid transparent'
    }
  }
}));
