import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

function MUIProgresses() {
  return (
    <>
      <Stack direction='row' spacing={5}>
        <CircularProgress />
        <CircularProgress color='success' />
        <CircularProgress value={60} variant='determinate' />
      </Stack>
    </>
  )
}

export default MUIProgresses