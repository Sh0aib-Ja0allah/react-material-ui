import { Stack, Rating } from '@mui/material'
import React, {useState} from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

function MUIRating() {

    const [value, SetValue] = useState<number | null>(null)
    
    const handleRate = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        SetValue(newValue)
        alert(`rete value = ${value}`)
    }

  return (
    <Stack spacing={2}>
        <Rating value={value} precision={0.5} onChange={handleRate}/>
        <Rating value={value}  emptyIcon={<FavoriteBorder fontSize='inherit' />} icon={<Favorite fontSize='inherit' />} precision={0.5} onChange={handleRate}/>
        <Rating value={value} readOnly emptyIcon={<FavoriteBorder fontSize='inherit' />} icon={<Favorite fontSize='inherit' />} precision={0.5} onChange={handleRate}/>
        <Rating value={value} highlightSelectedOnly emptyIcon={<FavoriteBorder fontSize='inherit' />} icon={<Favorite fontSize='inherit' />} precision={0.5} onChange={handleRate}/>
    </Stack>
  )
}

export default MUIRating