import React from 'react'

import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

function MUITooltip() {
  return (
    
    <Tooltip title='Delete' arrow enterDelay={100} leaveDelay={200} placement='right'> 
        <IconButton>
            <Delete />
        </IconButton>
    </Tooltip>
  )
}

export default MUITooltip

/* tooltip is used for the hover an element and we want to display a label or description for it */

/* the placement property is for the title */