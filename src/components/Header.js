import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor:'#fff',
    },
    searchInput:{
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        }
    }

}))

export default function Header() {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems="center">
                    <Grid item>
                        <InputBase
                        placeholder="Search topics"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontsize="small"/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent= {4} color="secondary">
                                <NotificationsNoneIcon fontsize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>    
                            <Badge badgeContent= {3} color="primary">
                                <ChatBubbleOutlineIcon fontsize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontsize="small"/>
                        </IconButton>                                
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}