import { Autocomplete, Stack, TextField } from '@mui/material'
import React from 'react'

function MUIAutoComplete() {

    const skills = ["HTML", "CSS", "JavaScript"]
 
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' /> } />
    </Stack>
  )
}

export default MUIAutoComplete