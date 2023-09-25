import { Stack } from '@mui/material'
import React from 'react'

const FixedWidth = ({sx={}, ...props}) => {
    const css = {
      maxWidth:"1000px",
      padding:"10px",
      TextAlign:"center",
      margin:"0 auto",
      ...sx
    }
    return (
    <>
      <Stack sx={css}  {...props} />
      
    </>
  )
}

export default FixedWidth;
