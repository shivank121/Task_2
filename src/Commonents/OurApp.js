import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import PageWidth from "../Commonents/Common/Container"
import image from "../Images/OurAppImg.png"
const OurApp = () => {
  return (
    <Box  sx={{
      marginBottom:{xs:"", sm:"", md:"50px"}
      
    }} >
    <PageWidth>

      <Box sx={{
        marginBottom:{xs:"", sm:"", md:"50px"}
      }} >
        <Stack sx={{
          textAlign:'center'
        }} >
          <Typography variant='h4' fontWeight="bold" >
          Our App <span style={{color:"#25A69A"}} > In Action</span>
          </Typography>
        </Stack>
      </Box>

      <Box sx={{
        display:"flex",
        justifyContent:"center"
      }} >
        <Stack sx={{
          maxWidth:"400px"
        }} >
          <img src={image} alt=''/>
        </Stack>
      </Box>
    </PageWidth>
    </Box>
  )
}

export default OurApp
