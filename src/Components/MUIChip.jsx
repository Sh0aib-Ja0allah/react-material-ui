import { Avatar, Chip, Stack } from '@mui/material'
import React from 'react'

import Face from '@mui/icons-material/Face'


function MUIChip() {
  return (
    <Stack direction='row' spacing={3}>
        <Chip label='chip' color='primary' size='small' icon={<Face />} />
        <Chip label='outlined Chip' variant='outlined' color='secondary' size='medium' avatar={<Avatar>V</Avatar>} />
        <Chip label='Select' onClick={() => alert(' select clicked')} variant='filled' color='success' size='medium' />
        <Chip onDelete={() => alert(' the element was deleted ')} onClick={() => alert(' delete clicked')} label='delete' variant='filled' color='error' size='medium' />
    </Stack>
  )
}

export default MUIChip