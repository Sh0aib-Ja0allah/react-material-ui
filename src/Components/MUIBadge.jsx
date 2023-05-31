import { Badge, Stack } from '@mui/material'
import React from 'react'
import Mail from '@mui/icons-material/Mail'

function MUIBadge() {
  return (
    <Stack p='50px' spacing={3} direction='row'>
        <Badge color='error' badgeContent={5}>
            <Mail />
        </Badge>
        <Badge color='primary' badgeContent={4}>
            <Mail />
        </Badge>
        <Badge color='success' badgeContent={3}>
            <Mail />
        </Badge>
        <Badge color='warning' badgeContent={100}>
            <Mail />
        </Badge>
        <Badge color='warning' variant='dot'>
            <Mail />
        </Badge>
    </Stack>
  )
}

export default MUIBadge