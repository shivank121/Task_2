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
        mt:"40px",
        mb:"40px"
       }}>
        <FixedWidth sx={{
        }} >
            <Grid container spacing={0} sx={{padding:{xs:"",sm:"",md:"40px"}}} >

                <Grid item xs={12} sm={6} md={6} sx={{
                    display:"flex",justifyContent:"flex-end",
                    margin:{xs:"20px", sm:"0px", md:"0px"}
                }} >
                    <Stack sx={{
                        maxWidth:{xs:"330px", sm:"330px", md:"400px"}
                    }} >
                        <img src={image} alt='not loaded' />
                    </Stack>

                </Grid>


                <Grid item xs={12} sm={6} md={6} >

                <Stack sx={{  
                    maxWidth:{xs:"340px", md:"376px" },
                    textAlign:"justify"
                    
                    }} >
                    <Typography variant='h4' sx={{color:"#25A69A", 
                    fontWeight:{xs:"100", sm:"600", md:"700"}, 
                    marginBottom:"24px"}} >
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
