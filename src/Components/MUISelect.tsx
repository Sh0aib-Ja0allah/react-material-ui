import { Box, TextField, MenuItem } from '@mui/material'
import React, {useState} from 'react'

function MUISelect() {

    const [countries, setCountries] = useState<string[]>([])


    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
        console.log({countries,})
    };

  return (
    <Box width='250px'>
        <TextField SelectProps={{
            multiple: true,
        }} color='success' helperText='please enter your favorite country' fullWidth label='Select country' value={countries} onChange={handlerChange} select>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='Palestine'>Palestine</MenuItem>
            <MenuItem value='UAE'>UAE</MenuItem>
            <MenuItem value='Russe'>Russe</MenuItem>
        </TextField>
    </Box>
  )
}

export default MUISelect