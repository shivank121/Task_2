import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FixedWidth from './Common/Container'
import image from "../Images/Identify.png"

const Identify = () => {
  return (
    <>
       <Box sx={{
        // width:"100vw",
        // height:"100vh"
       }}>
        <FixedWidth sx={{
        }} >
            <Grid container spacing={0} >

                <Grid item xs={12} sm={6} md={6} sx={{
                    display:"flex",justifyContent:"flex-end"
                }} >
                    <Stack>
                        <img style={{maxWidth:"400px",}} src={image} alt='not loaded' />
                    </Stack>

                </Grid>


                <Grid item xs={12} sm={6} md={6} >

                <Stack sx={{maxWidth:"340px",}} >
                    <Typography variant='h4' sx={{color:"#25A69A", fontWeight:"bold", marginBottom:"40px"}} >
                        <span style={{color:"black"}}> Identify any item </span> <br/>  and get related info. on your phone
                    </Typography>

                    <Typography color="#888888" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
                    </Typography>
                    </Stack>
                    
                </Grid>
            </Grid>
        </FixedWidth>
       </Box> 
    </>
  )
}

export default Identify;
