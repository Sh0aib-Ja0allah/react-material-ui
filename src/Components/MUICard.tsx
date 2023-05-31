import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"

function MUICard() {
  return (
    <Box p={2} width='300px'>
        <Card>
            <CardMedia component='img' height='150px' width='150px' alt='test' image='https://www.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
            <CardContent>
                <Typography variant='h5' component='div' gutterBottom >React</Typography>
                <Typography variant='body1' color='text.secondary' gutterBottom >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eveniet? Earum corporis ab similique vero distinctio perspic</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='outlined'> share</Button>
                <Button size='small' variant='outlined'> learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MUICard