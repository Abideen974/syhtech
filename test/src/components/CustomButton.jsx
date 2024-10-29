import React from 'react';
import { Box, Button } from '@mui/material';

const CustomButton = ({ bgColor, label, icon }) => {
    return (
        <Box>
            <Button
                sx={{
                    width: '158px',
                    height: '50px',
                    borderRadius: '35px',
                    color: '#fff',
                    fontSize: { sx: '15px', md: '16px' },
                    fontWeight: 500,
                    backgroundColor: bgColor,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        border: `1px solid ${bgColor}`,
                        color: '#000',
                    },
                }}
            >
                {label && <Box component="span" sx={{ mr: 1 }}>{label}</Box>}
                {icon}
            </Button>
        </Box>
    );
};

export default CustomButton;
