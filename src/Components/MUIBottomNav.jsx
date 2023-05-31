import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, {useState} from 'react'

import Home from '@mui/icons-material/Home'
import { Favorite } from '@mui/icons-material'
import Person from '@mui/icons-material/Person'

function MUIBottomNav() {

    const [value, setValue] = useState(0)

  return (
    <BottomNavigation value={value}
     sx={{width: '100%', position: 'relative', bottom: '0'}}
     onChange={(event, newValue) => {setValue(newValue)}}
     >
        <BottomNavigationAction label='Home' icon={<Home />} />
        <BottomNavigationAction label='Favorite' icon={<Favorite />} />
        <BottomNavigationAction label='Person' icon={<Person />} />
    </BottomNavigation>
  )
}

export default MUIBottomNav