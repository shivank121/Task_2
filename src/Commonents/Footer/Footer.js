import React from 'react'
import FixedWidth from '../Common/Container'
import { Box, Grid, Stack, Typography } from '@mui/material'
import facebook from "../../Images/facebook.png"
import twittwe from "../../Images/Twitter.png"
import linkdin from "../../Images/linkdin.png"
import youtub from "../../Images/youtub.png"
import caller from "../../Images/caller.png"
import { makeStyles } from '@mui/styles'

const Footer = () => {
  const classes = useStyle();
  return (
      <Box sx={{
        backgroundColor:"#113431"
      }}>        
      <FixedWidth>
          <Box>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={5} md={5} xl={5} sx={{
                display:"flex", justifyContent:"center"
              }} >

                <Stack >
                <Box  className={classes.commonstyle} >
                  <Typography variant='h5' fontWeight="bold" color="white" >
                   Wanna work with us? <br/>  Get in touch
                  </Typography>
                </Box>
                
                <Box className={classes.commonstyle}  >
                  <Typography  className={classes.commonstyle} color="#25A69A" >
                    Learn More
                  </Typography>
                </Box>


                  <Box className={classes.socialMedia}  >

                    <Box> <img src={facebook} alt='not loaded'  width="30px" /> </Box>
                    <Box class > <img src={twittwe} alt='not loade'  width="30px" /> </Box>
                    <Box> <img src={linkdin} alt="not loaded" width="30px" /> </Box>
                    <Box> <img src={youtub} alt='not loaded'  width="30px" /> </Box>
                    <Box> <img src={caller} alt='not loaded'  width="30px" /> </Box>
                  </Box>

                </Stack>
              </Grid>
                <Stack>
                  <Box cla ></Box>
                </Stack>
              <Grid   item xs={12} sm={7} md={7} xl={7}  >
                 <Box className={classes.bookasdfas} >
                  <Box>
                    <Typography sx={{mt:"6px"}} >Company</Typography>
                    <Typography sx={{mt:"6px"}} >Home</Typography>
                    <Typography sx={{mt:"6px"}} >About</Typography>
                    <Typography sx={{mt:"6px"}}  >Contact</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{mt:"6px"}} >Jobs</Typography>
                    <Typography sx={{mt:"6px"}} >Apply</Typography>
                    <Typography sx={{mt:"6px"}} >Help</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{mt:"6px"}} >FAQ</Typography>
                    <Typography sx={{mt:"6px"}} >Privacy Policy</Typography>
                    <Typography sx={{mt:"6px"}} >Privacy Policy</Typography>
                    <Typography sx={{mt:"6px"}} >Terms & Conditions</Typography>
                    <Typography sx={{mt:"6px"}} >help@objdet.com</Typography>
                  </Box>
                 </Box>
              </Grid>
            </Grid>
          </Box>
        </FixedWidth>
      </Box>      
  )
}

const useStyle = makeStyles({
   commonstyle:{
    marginBottom:"20px",
   },

   socialMedia:{
    marginBottom:"10px",
    display:"flex",
    justifyContent:"space-between",
    maxWidth:"200px"
   },
   bookasdfas:{
    // backgroundColor:"red",
    display:"flex",
    justifyContent:"space-around",
    color:"white",
    marginTop:"15px"
    // alignItems:"center"
  }
})
export default Footer
