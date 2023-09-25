import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../Common/Layout'
import backImg from "../Images/HeroPageImg.png"

const Hero = () => {
  return (
      <Box sx={{
            backgroundImage:`url(${backImg})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"100vh",
            zIndex:"0",
      
      }} >
            <Layout>
                  <Box sx={{
                   marginBottom:" 40px"
                  }} >
                        <Typography variant='h4' color="#25A69A" fontWeight="bold" >Object Detection</Typography>
                        <Typography variant='h4' fontWeight="bold"> System</Typography>
                  </Box> 
                  <Box>     
                        <Button sx={{
                        backgroundColor:"#25A69A",
                        padding:"15px",
                        width:"140px",
                        color:"white",
                        }}> Get App </Button>
                  </Box>            
            </Layout>
    </Box>
  )
}

export default Hero
