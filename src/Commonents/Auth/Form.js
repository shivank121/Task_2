import { Box, Stack, TextField, TextareaAutosize, Typography, } from '@mui/material'
import React from 'react'
import FixedWidth from '../Common/Container'

const Form = () => {
  return (
    <Box>
      <FixedWidth sx={{width:"100px"}} >
        <Box>
          <Box sx={{backgroundColor:"red"}} >

             <Stack>
              <Typography variant='h4' fontWeight="bold" >
                  Get In Touch  <span style={{color:"#25A69A"}} >With Us</span> 
              </Typography>
             </Stack>

             <Stack>
              <Typography color="#707070" >
                Fill in the form, or if you’d like to, you can also shoot us an email (Tip: include your phone # for a quicker response)
              </Typography>
             </Stack>   

          </Box>
          
          <Box>
           <Form>
          
            <TextField sx={{marginBottom:"20px"}} label="Your Name" variant="standard" />
            <TextField sx={{marginBottom:"20px"}} label="Your Email" variant="standard" />
            <TextareaAutosize  minRows={7}  placeholder='your message'/>

           </Form>
          </Box> 
        </Box>
      </FixedWidth>
    </Box>
  )
}

export default Form
