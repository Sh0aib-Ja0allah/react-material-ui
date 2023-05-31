import React, {useState} from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

function MUIRadio() {

    const [value, setValue] = useState('')
    console.log({value,})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience'>
                Years of experience
            </FormLabel>
            <RadioGroup row value={value} onChange={handleChange} name='job-experience-group' area-aria-aria-labelledby='job-experience-group-label'>
                <FormControlLabel control={<Radio />} value='0-2' label='0-2'/>
                <FormControlLabel control={<Radio color='error' size='small' />} value='3-5' label='3-5'/>
                <FormControlLabel control={<Radio />} value='6-10' label='6-10'/>
            </RadioGroup>
            <FormHelperText >Invalid user</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MUIRadio