import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material"

import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"

function MUISpeedDial() {
  return (
    <SpeedDial ariaLabel='Navigation Speed dial' 
    sx={{position: 'fixed', bottom: 16, right: 16}}
    icon={<SpeedDialIcon />}
    >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='copy' />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='print' />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='share' />
    </SpeedDial>
  )
}

export default MUISpeedDial