import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
// import Layout from '../Common/Layout'

const Header = () => {
  return (
    <>
      <Box sx={{
            // margin:"0 auto",
            position:"fixed",
            width:"100vw",
            backgroundColor:"#FFFFFF",
            zIndex:"1",
            padding:"6px"
      }} >
            {/* <Layout> */}
                  <Grid container spacing={0} >
                        <Grid item xs={4} sm={6} md={6} >
                              <Stack sx={{ textAlign:"center"}}  >
                                    <Typography variant='h6' sx={{
                                          color:"#707070",
                                          fontWeight:"bold",
                                          fontSize:{xs:"17px", sm:"20px", md:"20px"}

                                    }}>  Object Detection</Typography>
                              </Stack>
                        </Grid>

                        <Grid item xs={8} sm={6} md={6} sx={{
                              display:"flex", justifyContent:"center", alignItems:"center"
                              }} >
                        <Box sx={{
                              
                              // display:"flex",
                              // justifyContent:"space-around",
                              
                              // margin:"0 auto"
                        }}>
                              <Button  variant="text" sx={{ 
                                    fontWeight:"bold",
                                    '&:hover':{
                                    color:"#25A69A",
                                    },
                                    fontSize:{xs:"8px", sm:"10px", md:"10px"}
                                    }} >Home</Button>

                              <Button  variant="text" sx={{ 
                                    fontWeight:"bold",
                                    '&:hover':{
                                    color:"#25A69A", 
                                    },
                                    fontSize:{xs:"8px", sm:"10px", md:"10px"}

                              }} >About</Button>

                              <Button  variant="text" sx={{ 
                                    fontWeight:"bold",
                                    '&:hover':{
                                    color:"#25A69A", 
                                    },
                                    fontSize:{xs:"8px", sm:"10px", md:"10px"}
                              }} >Contact Us</Button>
                              
                        </Box>      
                        </Grid>
                  </Grid>
            {/* </Layout> */}
      </Box>
    </>
  )
}

export default Header
