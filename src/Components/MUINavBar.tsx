import React, {useState} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'
import MUIDrawer from './MUIDrawer.jsx'

function MUINavBar() {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    const open = Boolean(anchor)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchor(null)
    }

return (
    <AppBar position='static'  >
        <Toolbar>
            <IconButton edge='start' size='large' color='inherit'>
                <CatchingPokemon />
            </IconButton>
            <Typography sx={{flexGrow: 1}} variant='h6' component='div'>
                Pokemon app
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Button</Button>
                <Button color='inherit'>Button</Button>
                <Button endIcon={<KeyboardArrowDown />} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} aria-controls={open ? 'resources' : undefined} onClick={handleClick} color='inherit' id='Resources'>Resources</Button>
                <Button color='inherit'>Button</Button>
            </Stack>
            <Menu id='resources' anchorEl={anchor} MenuListProps={{
                'aria-labelledby' : 'resources'
            }} open={open} onClose={closeMenu}>
                <MenuItem onClick={closeMenu} >Blog</MenuItem>
                <MenuItem onClick={closeMenu} >list</MenuItem>
                <MenuItem onClick={closeMenu} >Test</MenuItem>
            </Menu>
            <MUIDrawer />
        </Toolbar>
    </AppBar>
  )
}

export default MUINavBar