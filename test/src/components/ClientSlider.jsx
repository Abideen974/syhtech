'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import {  Box, ImageList } from '@mui/material';
import line1 from '../assets/imgaes/sliderImages/line1.png'
import line2 from '../assets/imgaes/sliderImages/line2.png'


const extendClients = (clients, length) => {
  const extendedClients = Array.from({ length }, (_, index) => ({
    ...clients[index % clients.length],
  }));
  return extendedClients;
};

const ClientSlider = ({
  bgColor,
  data,
  length = 1000,
  breakPoints,
  pb,
}) => {
  const extendedData = {
    clients: extendClients(data.clients, length),
  };

  const getImagePath = (originalImagePath) => {
    if (bgColor == '#029894' || !bgColor) {
      return originalImagePath.replace('_dark', '_light');
    } else {
      return originalImagePath.replace('_light', '_dark');
    }
  };

  return (
    <Box sx={{ PY: '2.5%', width: '100%' }}>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' }, 
          mt: { xs: '-15px', sm: '25px', lg: '-70px' },
          pb: 10
        }}
      >
        <Box>
          <ImageList sx={{ width: 500 }}>
            <img src={line2} style={{ width: '100%' }} />
          </ImageList>
        </Box>
        <Box>
          <ImageList sx={{ width: 500 }}>
            <img src={line1} />
          </ImageList>
        </Box>
      </Box>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        speed={2000}
        effect="slide"
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={breakPoints}
      >
        {extendedData.clients.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ pb: pb || 5 }}>
              {
                <Box
                  component={'img'}
                  src={getImagePath(item.image)}
                  alt={item.image}
                  height={'37px'}
                  sx={{
                    width: {
                      sm: '42px',
                      md: '42px',
                      lg: '42px',
                    },
                    height: {
                      sm: '53px',
                      md: '53px',
                      lg: '53px',
                    },
                  }}
                />
              }
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
