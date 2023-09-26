import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FixedWidth from './Common/Container'
import image from "../Images/StaySafeImg.png"
 
const StaySafe = () => {
  return (
    <Box sx={{
      marginBottom:{xs:"", sm:"", md:"50px"}
    }}>
      <FixedWidth>

        <Box sx={{textAlign:"center", mb:"70px",
        fontWeight:{xs:"100", sm:"600", md:"700"}, 
         }} >
          <Stack >
            <Typography variant='h3' >Stay Safe With  <span style={{color:"#25A69A"}} > Contactless <br/> Checkout </span> </Typography>
          </Stack>
        </Box>


        <Grid container spacing={2} sx={{
          display:"flex",
          flexDirection:{xs:"column-reverse" , sm:"row", md:"row"}
                  }} >

            <Grid item xs={12} sm={6} md={6} sx={{
              display:'flex',
              justifyContent:"center"
            }} >
              <Stack sx={{
                textAlign:"justify",
                maxWidth:"300px",
              }} >
                <Typography variant='h5' fontWeight="bold" mb="35px" >
                 Speed through checkout <br/> safely with your phone
                </Typography>
                <Typography color="#888888" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
                </Typography>
              </Stack>
            </Grid>


            <Grid item xs={12} sm={6} md={6} >
              <Stack sx={{
                maxWidth:"330px"
              }} >
                <img src={image} alt='not loaded' />
              </Stack>
            </Grid>
        </Grid>
      </FixedWidth>
    </Box>
  )
}

export default StaySafe
