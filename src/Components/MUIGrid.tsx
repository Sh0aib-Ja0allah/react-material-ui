import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

function MUIGrid() {
  return (
    <Paper>
        <Grid container my={4} mx={3} columnSpacing={1} rowSpacing={2}>
            <Grid item xs={6} ><Box p={2} bgcolor='primary.light' >item 1</Box></Grid>
            <Grid item xs={6} ><Box p={2} bgcolor='primary.light' >item 2</Box></Grid>
            <Grid item xs={6} ><Box p={2} bgcolor='primary.light' >item 3</Box></Grid>
            <Grid item xs={6} ><Box p={2} bgcolor='primary.light' >item 4</Box></Grid>
        </Grid>
        <hr />
        <Grid container my={4} mx={3}>
            <Grid item xs={3} ><Box p={2} bgcolor='primary.light' >item 1</Box></Grid>
            <Grid item xs={9} ><Box p={2} bgcolor='error.light' >item 2</Box></Grid>
            <Grid item xs={9} ><Box p={2} bgcolor='success.light' >item 3</Box></Grid>
            <Grid item xs={3} ><Box p={2} bgcolor='warning.light' >item 4</Box></Grid>
        </Grid>
    </Paper>
  )
}

export default MUIGrid


// all  alt width of the grid = 12 
/* and it's can be divided  into => 
{
    3 + 9
    6 + 6
    9 + 3
    3 + 3 + 3 + 3
    3 + 6 + 3
    12 + 0
}
*/