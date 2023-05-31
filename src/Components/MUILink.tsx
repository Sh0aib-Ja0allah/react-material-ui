import { Link, Stack } from '@mui/material'
import React from 'react'

function MUILink() {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link underline='hover' color='primary' href='#'>Link</Link>
        <Link underline='none' color='secondary' href='#'>Another</Link>
    </Stack>
  )
}

export default MUILink