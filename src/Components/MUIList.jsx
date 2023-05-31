import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

import Mail from '@mui/icons-material/Mail'

function MUIList() {
  return (
    <Box sx={{width: '400px', bgcolor: 'greenyellow'}}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary='list item text 1' />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary='list item text 2' />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary='list item text 3' />
            </ListItem>
        </List>
        <List>
            <ListItem>

                <ListItemText primary='list item text 1' />
            </ListItem>
            <ListItem>
                <ListItemText primary='list item text 2' />
            </ListItem>
            <ListItem>
                <ListItemText primary='list item text 3' />
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src='https://randomuser.me/portraits/men/39.jpg' alt='' ></Avatar>
                </ListItemAvatar>
                <ListItemText primary='list item text 1' />
            </ListItem>
            <ListItem>
                <ListItemAvatar   ListItemAvatar>
                    <Avatar src='https://randomuser.me/portraits/men/19.jpg' alt='' ></Avatar>
                </ListItemAvatar>
                <ListItemText primary='list item text 2' />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src='https://randomuser.me/portraits/men/29.jpg' alt='' ></Avatar>
                </ListItemAvatar>
                <ListItemText primary='list item text 3' />
            </ListItem>
        </List>
    </Box>
  )
}

export default MUIList