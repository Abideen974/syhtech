import { Box } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import ClientSlider from './ClientSlider'
import { CLIENTS_SLIDER_DATA, CLIENT_SLIDER_BREAK_POINTS, heroSectionData } from '../constant'
import StockMobileSlider from './StockMobileSlider'

const ComponentContiner = () => {
    return (
        <Box
        sx={{
            width:'100%',
            borderRadius: '130px 30px 0px 0px', 
        }}
        >
            <NavBar />
            <HeroSection data={heroSectionData} />
            <ClientSlider
                data={CLIENTS_SLIDER_DATA}
                breakPoints={CLIENT_SLIDER_BREAK_POINTS}
                length={100}
                fontWeight={500}
            />

            <StockMobileSlider />
        </Box>
    )
}

export default ComponentContiner