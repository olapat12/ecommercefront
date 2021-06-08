import {makeStyles, fade} from '@material-ui/core/styles'

const drawerWidth = 0;

export default makeStyles((theme)=>({

    toolbar: theme.mixins.toolbar,
    title:{
       marginTop: '6%',
       fontSize: 30,
       textAlign: 'center'
    },
    emptyButton: {
       minWidth: '150px',
       [theme.breakpoints.down('xs')]:{
        marginBottom: '5px',
        
      },
      [theme.breakpoints.up('xs')]:{
       marginRight: '20px'
      }
    },
    image:{
        marginRight: '10px'
    },
    checkoutButton: {
        minWidth: '150px'
    },
    link:{
        textDecoration: 'none'
    },
    cardDetails: {
        display: 'flex',
        marginTop: '3%',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '7%'
    },
    media: {
        height: 300
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        width: 60,
        height: 60
    },
    customTooltip: {
        // I used the rgba color for the standard "secondary" color
        backgroundColor: 'rgb(56, 54, 54)',
        fontSize: 17
      },
      customArrow: {
        color: 'white',
      },
    delete: {
        width: 80,
        height: 35,
        backgroundColor: 'red',
        marginLeft: '27%',
    },
    keep: {
        width: 80,
        height: 35,
        backgroundColor: 'green',
       
    }
    
}))