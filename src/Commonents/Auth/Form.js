import { Box, Button, Stack,  TextField,  TextareaAutosize,  Typography, } from '@mui/material'
import React from 'react'
import FixedWidth from '../Common/Container'

const Form = () => {
  return (
    <Box>
      <FixedWidth sx={{
        maxWidth:"500px"
        }} >
        <Box>
          <Box>

             <Stack>
              <Typography variant='h4' fontWeight="bold" mb="10px" >
                  Get In Touch  <span style={{color:"#25A69A"}} >With Us</span> 
              </Typography>
             </Stack>

             <Stack>
              <Typography color="#707070" mb="10px" >
                Fill in the form, or if you’d like to, you can also shoot us an email (Tip: include your phone # for a quicker response)
              </Typography>
             </Stack>   
            

          </Box>
          
          
         <Box>
           <Stack>
             <TextField sx={{marginBottom:"20px"}} label="Your Name" variant="standard"  />
           </Stack>
           <Stack>
             <TextField sx={{marginBottom:"40px"}} label="Your Email" variant="standard" />
           </Stack>
           <Stack  sx={{marginBottom:"30px"}} >
             <TextareaAutosize minRows={6}  placeholder='your message'/>
           </Stack>
           
           <Button variant="contained" type='submit' sx={{
           marginBottom:"20px",
            textTransform:"lowercase",
            width:"110px"
           }} >Submit</Button>

           </Box>
           </Box>
      </FixedWidth>
    </Box>
  )
}

export default Form
