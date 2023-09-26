import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import backImg from "../Images/HeroPageImg.png"
import FixedWidth from '../Commonents/Common/Container'
// import { makeStyles } from '@mui/styles'

const Banner = () => {

      const handleBtn = ()=>{
            alert("hyy i am banner")
      }
  return (
      <Box sx={{
            backgroundImage:`url(${backImg})`,
            backgroundSize:{xs:"100% auto", sm:"100% auto", md:"100% auto"},
            backgroundOrigin:"border-box",
            backgroundRepeat:"no-repeat",
            height:{xs:"32vh", sm:"65vh", md:"100vh"},
            paddingBottom:{xs:"0px", sm:"0px", md:"100px"}
            
           
      
      }} >
            <FixedWidth>
            
            <Box sx={{
                  position:{md:"absolute", xs:"absolute", sm:"absolute"},
                  top:{xs:"10%" , sm:"13%" , md:"38%" },
                  left:{ xs:"10%", sm:"10%" ,md:"26%"},
            }}  >
             
                  <Stack sx={{
                  marginBottom:{xs:"15px",md:"40px"}
                  }} >
                        <Typography variant='h4' color="#25A69A" fontWeight="bold" >Object Detection</Typography>
                        <Typography variant='h4' fontWeight="bold"> System</Typography>
                  </Stack> 
                  <Stack>     
                        <Button sx={{
                        backgroundColor:"#25A69A",
                        padding:"15px",
                        width:"140px",
                        color:"white",
                        '&:hover':{
                        backgroundColor:"#25A69A"
                        }
                        }}
                        onClick={() => handleBtn() }>  Get App  </Button>
                  </Stack> 
             </Box>           
      
            </FixedWidth>
    </Box>
  )
}

export default Banner
