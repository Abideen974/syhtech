import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import heroImg from '../assets/imgaes/heroSection/heroBaner.png';
import backgroundImg from '../assets/imgaes/heroSection/heroBg.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HeroSection = ({ data }) => {
    const { heading, paragraph, buttonLabel, registeredPeople } = data;
    const words = ["laptops", "mobile phones", "tablets"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{
            backgroundColor:'#F2FBFF'
        }}>
            <Box sx={{ py: 10, px: { xs: 5, md: 12 }, margin: '0px auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ maxWidth: '670px', margin: '0px auto' }}>
                            <Box sx={{ maxWidth: '526px' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '72px',
                                        color: '#333333',
                                    }}
                                >
                                    Largest <span style={{ color: '#388FCB' }}>Wholesalers</span> of{" "}
                                    <span className="slide-text" key={currentWordIndex}>
                                        {words[currentWordIndex]}
                                    </span>
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: '#333333',
                                        my:2
                                    }}
                                >
                                    {paragraph && paragraph}
                                </Typography>
                            </Box>
                            <Button
                                sx={{
                                    color:'#388FCB',
                                    fontFamily:'Poppins',
                                    fontWeight:400,
                                    fontSize:'18px',
                                    lineHeight:'20px',
                                    pb:2
                                }}
                            >
                                {buttonLabel && buttonLabel}
                                <ArrowForwardIcon sx={{ ml: 1 }} />
                            </Button>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    '@media (max-width: 1420px)': {
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        gap: '8px'
                                    },
                                }}
                            >
                                <Box component="form">
                                    <Box sx={{ width: '100%', mb: 1.2, position: 'relative' }}>
                                        <MailOutlineIcon
                                            sx={{
                                                position: 'absolute',
                                                left: 10,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#85c2c0',
                                            }}
                                        />
                                        <Box
                                            component="input"
                                            placeholder="Email"
                                            sx={{
                                                width: { xs: '100%', sm: '240px' },
                                                borderRadius: '25.418px',
                                                height: '41px',
                                                border: '1px solid #85c2c0',
                                                background: '#F5F8FA',
                                                fontSize: '14px',
                                                pl: 5,
                                                py: 0.55,
                                                color: 'black',
                                                '&:focus': {
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <CustomButton label="Subscribe" bgColor="#7DC140" icon={<ArrowForwardIcon />}/>
                                </Box>
                                <Box>
                                    <CustomButton label="Stocks List" bgColor="#378FCB" icon={<ArrowDownwardIcon />}/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                maxWidth: '983.9px',
                                maxHeight: '859.96px',
                                mx: 'auto',
                                backgroundImage: `url(${backgroundImg})`,
                                backgroundSize: { xs: '360px', md: '440px', lg: '480px' },
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={heroImg}
                                style={{
                                    width: '271.6px',
                                    height: '495.98px',
                                }}
                                alt="Hero Banner"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HeroSection;
