import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

function MUIAvatar() {
    return (
        <Stack sx={{padding: '100px'}} spacing={4}>
        <Stack direction='row' spacing={2}>
            <Avatar variant='square' sx={{padding: '10px', bgcolor:'success.light'}} >CK</Avatar>
            <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/men/79.jpg' alt='' ></Avatar>
            <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/women/79.jpg' alt='' ></Avatar>
        </Stack>
        <Stack direction='row' spacing={2}>
            <AvatarGroup >
                <Avatar sx={{padding: '10px', bgcolor:'success.light'}} >CK</Avatar>
                <Avatar sx={{padding: '10px', bgcolor:'primary.light'}} >BW</Avatar>
                <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/men/79.jpg' alt='' ></Avatar>
                <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/women/79.jpg' alt='' ></Avatar>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={2}>
            <AvatarGroup max={3} >
                <Avatar variant='rounded' sx={{padding: '10px', bgcolor:'success.light'}} >CK</Avatar>
                <Avatar sx={{padding: '10px', bgcolor:'primary.light'}} >BW</Avatar>
                <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/men/79.jpg' alt='' ></Avatar>
                <Avatar sx={{width: '60px', height: '60px'}} src='https://randomuser.me/portraits/women/79.jpg' alt='' ></Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}

export default MUIAvatar