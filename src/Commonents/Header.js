import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Layout from '../Common/Layout'

const Header = () => {
  return (
    <>
      <Box sx={{
            margin:"0 auto",
            position:"fixed",
            width:"100vw",
            backgroundColor:"#FFFFFF",
            zIndex:"1"
      }} >
            <Layout>
                  <Grid container spacing={2} >
                        <Grid item md={6}>
                              {/* <Stack> */}
                                    <Typography variant='h6' sx={{
                                          color:"#707070",
                                          fontWeight:"bold" 
                                    }}>  Object Detection</Typography>
                              {/* </Stack> */}
                        </Grid>

                        <Grid item md={6}>
                        <Box sx={{
                              display:"flex",
                              justifyContent:"space-around",
                        }}>
                              <Button  variant="text" >Home</Button>
                              <Button  variant="text" >About</Button>
                              <Button  variant="text" >Contact Us</Button>
                              {/* <Box sx={{}} >Home</Box>
                              <Box>About</Box>
                              <Box>Contact Us</Box> */}
                        </Box>
                              
                        </Grid>
                  </Grid>
            </Layout>
      </Box>
    </>
  )
}

export default Header
