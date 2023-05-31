import { Drawer, Box, Typography, IconButton } from '@mui/material'
import React, {useState} from 'react'

import MenuIcon from "@mui/icons-material/Menu"

function MUIDrawer() {

    const [open, SetOpen] = useState(false)

  return (
    <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => SetOpen(true)} >
            <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={open} onClose={() => SetOpen(false)}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MUIDrawer