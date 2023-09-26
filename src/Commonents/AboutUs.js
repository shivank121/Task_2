import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FixedWidth from './Common/Container'
import image from "../Images/AboutImg.png"

const AboutUs = () => {
  return (
      <Box sx={{
         marginBottom:{xs:"", sm:"", md:"70px"}
      }} >
        <FixedWidth>

            <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6} sx={{
              display:"flex" , justifyContent:"center"
            }} >
              <Stack maxWidth="280px" >
                 <img src={image} alt='not loaded' />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={6} >
              <Stack sx={{
                maxWidth:"300px"
              }} >
                <Typography variant='h5' fontWeight="bold" >Get To Know More <br/> <span style={{color:"#25A69A"}} > About Us </span> </Typography>
                <Typography  color="#888888" textAlign="justify" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
                </Typography>
              </Stack>
            </Grid>

            </Grid>
        </FixedWidth>
      </Box>      
  )
}

export default AboutUs
