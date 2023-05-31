import React from 'react'
import {Box, Breadcrumbs, Link, Typography} from "@mui/material"

function MUIBreadcrumbs() {
  return (
    <Box m={2} >
        <Breadcrumbs aria-label='breadcrumb' >
            <Link underline='hover' href='#' >Breadcrumbs</Link>
            <Link underline='hover' href='#' >Catalog</Link>
            <Link underline='hover' href='#' >Shoes</Link>
            <Typography color='text.primary'>Accessories</Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumb' separator='-'>
            <Link underline='hover' href='#' >Breadcrumbs</Link>
            <Link underline='hover' href='#' >Catalog</Link>
            <Link underline='hover' href='#' >Shoes</Link>
            <Typography color='text.primary'>Accessories</Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumb' maxItems={3} separator='>'>
            <Link underline='hover' href='#' >Breadcrumbs</Link>
            <Link underline='hover' href='#' >Catalog</Link>
            <Link underline='hover' href='#' >Shoes</Link>
            <Typography color='text.primary'>Accessories</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MUIBreadcrumbs