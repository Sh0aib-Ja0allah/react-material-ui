import { Box, FormControlLabel, Switch } from '@mui/material'
import React, {useState} from 'react'

function MUISwitch() {

    const [check,setCheck] = useState(false)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked)
        alert(`the value of switch now is: ${!check}`)
    }
  return (
    <Box>
        <FormControlLabel label='dark Mode' control={<Switch color='success' checked={check} onChange={onChange} />} />
    </Box>
  )
}

export default MUISwitch