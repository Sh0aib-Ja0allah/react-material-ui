import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

function MUIAlert() {
  return (
    <Stack spacing={4}>
        <Stack spacing={2}>
            <Alert severity='error'>This is an error alert</Alert>
            <Alert severity='success'>This is an success alert</Alert>
            <Alert severity='warning'>This is an warning alert</Alert>
            <Alert severity='info'>This is an info alert</Alert>
        </Stack>
        <hr />
        <Stack spacing={2}>
            <Alert variant='outlined' severity='error'>This is an error alert</Alert>
            <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
            <Alert variant='outlined' severity='success'>This is an success alert</Alert>
            <Alert variant='outlined' severity='info'>This is an info alert</Alert>
        </Stack>
        <hr />
        <Stack spacing={2}>
            <Alert variant='filled' severity='error'>
                <AlertTitle>error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant='filled' severity='success'>
                <AlertTitle>success</AlertTitle>
                This is an success alert
            </Alert>
            <Alert variant='filled' severity='warning'>
                <AlertTitle>warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert variant='filled' severity='info'>
                <AlertTitle>info</AlertTitle>
                This is an info alert
            </Alert>
        </Stack>
    </Stack>
  )
}

export default MUIAlert