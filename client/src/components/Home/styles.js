import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  postGrid:{
    height:"550px",
    overflowY:'scroll',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid transparent'
    }
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  '@supports ( -moz-appearance:none )': { 
    postGrid : {
      overflowY:'hidden',
    }
}
}));
