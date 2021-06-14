import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    root: {
        maxWidth: '100%',
    },
    media:{
        height: 120,
        paddingTop: '56.25%',
        objectFit: 'cover'
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
      //  padding: theme.spacing(3),
    },
    roott: {
        flexGrow: 1
    }
}))