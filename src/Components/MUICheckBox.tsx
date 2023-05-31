import React, {useState} from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, FormGroup, Checkbox } from '@mui/material'
import { Bookmark } from '@mui/icons-material'
import { BookmarkBorder } from '@mui/icons-material'

function MUICheckBox() {

    const [accept, setAccept] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log({skills,})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked)
        alert(`you had checked the checkBox element and the current value is: ${!accept}`)
    }

    const handleSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const index = skills.indexOf(event.target.value)
        skills.indexOf(event.target.value) == -1 ? setSkills([...skills, event.target.value]) :  setSkills(skills.filter(skills => skills !== event.target.value))
    }

  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience'>
                Years of experience
            </FormLabel>
            <Box>
                <FormControlLabel control={<Checkbox checked={accept} onChange={handleChange}/>} label='I accept the terms and conditions.'/>
            </Box>
            <Box >
                <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={accept} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel color='success'>Skills:</FormLabel>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox value='HTML' checked={skills.includes('HTML')} onChange={handleSkills}/>} label='HTML.'/>
                        <FormControlLabel control={<Checkbox value='JavaScript' checked={skills.includes('JavaScript')} onChange={handleSkills}/>} label='JavaScript.'/>
                        <FormControlLabel control={<Checkbox value='CSS' checked={skills.includes('CSS')} onChange={handleSkills}/>} label='CSS.'/>
                    </FormGroup>
                </FormControl>
            </Box>
        </FormControl>
    </Box>
  )
}

export default MUICheckBox