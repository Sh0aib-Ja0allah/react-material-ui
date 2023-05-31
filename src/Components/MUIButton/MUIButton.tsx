import React, {useState} from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import "./MUIButton.css"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MUIButton() {

  const [formats, setFormats] = useState<string | null>(null)
  console.log({formats,})
  const handleFormateChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats)
  }

  return (
    <Stack className='btn' spacing={4} direction='column'>
      <Stack spacing={4} direction='row'>
        {/* used for the footer actions */}
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        {/* used for the login and agree  or accept */}
        <Button variant='contained'>
          contained
        </Button>
        {/* used for the cancel and logout actions */}
        <Button variant='outlined'>
          outlined
        </Button>
      </Stack>

      <Stack spacing={4} direction='row'>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
      </Stack>

      <Stack display='block' spacing={4} direction='row'>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>
      <Stack direction='row' spacing={4} >
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation >Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableRipple >Send</Button>
        <IconButton aria-label='send' color='primary' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row' >
        <ButtonGroup size='small' color='success' variant='contained' orientation='vertical'>
          <Button onClick={() => alert("clicked left")}>left</Button>
          <Button onClick={() => alert("clicked center")}>center</Button>
          <Button onClick={() => alert("clicked right")}>right</Button>
        </ButtonGroup>
      </Stack>
      <hr />
      <Stack direction='row'>
        <ToggleButtonGroup exclusive orientation='vertical' size='small' color='success' value={formats} onChange={handleFormateChange} aria-label='text formatting'>
          <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MUIButton

/*
- for thee button colors: 
    in the Material UI we have a 6 groups of colors => go to customization, palette and select your colors.

 */

/*
  - How to use Icons in React:
      install it: npm install @mui/icons-material
*/