import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from "./controls/Controls";

const useStyles = makeStyles(theme =>({
    dialog:{
        padding: theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogContent:{
        textAlign: 'center'
    },
    dialogActions:{
        justifyContent:'center'

    }
}))

export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles()
    return(
        <Dialog open={confirmDialog.isOpen} classes={{ paper:classes.dialog }}>
            <DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Typography variant="h6">
                        {confirmDialog.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        {confirmDialog.subTitle}
                    </Typography>
                    <DialogActions className={classes.dialogContent}>
                        <Controls.Button
                            text="No"
                            color="default"
                            onClick={()=>setConfirmDialog({...confirmDialog, isOpen:false})} />
                        <Controls.Button
                            text="Yes"
                            color="secondary" 
                            onClick={confirmDialog.onConfirm}/>
                    </DialogActions>
                </DialogContent>
            </DialogTitle>
        </Dialog>
    )
}