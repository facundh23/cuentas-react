import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const GastoItem = () => {
    return (
        <Grid
        container
        borderBottom={1}
        >
            <Grid item xs={7}>
                <Typography variant="h6">Transporte</Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h6" sx={{backgroundColor:'steelblue', color:'white', textAlign:'center',padding:'3px'}}>$5000</Typography>
            </Grid>
            <Grid item xs={2} sx={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon aria-label="delete" fontSize="large"  sx={{color:'red'}} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default GastoItem
