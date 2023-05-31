import React, {useState} from 'react'
import {InputAdornment, Stack, TextField} from "@mui/material"

function MUITextField() {

    const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={3}>
            <TextField label="outlined variant" variant='outlined' />
            <TextField label="filled variant" variant='filled' />
            <TextField label="standard variant" variant='standard' />
        </Stack>
        <Stack direction='row' spacing={3}>
            <TextField label='small Secondary' size='small' color='success' />
        </Stack>
        <Stack direction='row' spacing={3}> 
            <TextField label='form input' required color='error' onChange={e => setValue(e.target.value)} value={value} error={!value} helperText={value? 'Required': 'Do not Share your password'} />
            <TextField label='password' required type='password' />
            <TextField label='disabled' required disabled />
            <TextField label='read only' required inputProps={{readOnly: true}} />
            <TextField label='form input' required helperText='do not show your password for any one' />
        </Stack>
        <Stack direction='row' spacing={3}>
            <TextField label='amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            }} />
            <TextField label='weight' InputProps={{
                endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
            }} />
        </Stack>
    </Stack>
  )
}

export default MUITextField