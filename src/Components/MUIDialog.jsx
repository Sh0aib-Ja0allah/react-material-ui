import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'

function MUIDialog() {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Button onClick={() => setOpen(true)} >open dialog</Button>
        <Dialog onClose={() => setOpen(false)} open={open} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Did you want to Submit the Test?</DialogTitle>
            <DialogContent >
                <DialogContentText id='dialog-description' >
                    Are you sure you want to submit the test? you will never be able to edit 
                    after submitting.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} autoFocus>submit</Button>
                <Button onClick={() => setOpen(false)} >cancel</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MUIDialog