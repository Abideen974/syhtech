import { Box } from '@mui/material'
import React from 'react'
import MobileCard from './MobileCard'
import { MOBILE_STOCK_CARD_DATA } from '../constant'

const StockMobileSlider = () => {
  return (
    <Box
    sx={{
        width:'100%',
        height:'100%'
    }}>
        <MobileCard data={MOBILE_STOCK_CARD_DATA}/>
    </Box>
  )
}

export default StockMobileSlider