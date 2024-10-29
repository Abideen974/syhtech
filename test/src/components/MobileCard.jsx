import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Box, CircularProgress, Typography, colors } from "@mui/material";
import backgroundImg from '../assets/imgaes/mobileStockCard/background.png';


const MobileCard = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [loading, setLoading] = useState(false);


    const pagination = {
        clickable: true,
        renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`,
    };

    return (
        <Box
            sx={{
                maxWidth: "1440px",
            }}
        >
            <Box
                id="project-slider"
                className="pro-slider"
                sx={{
                    position: "absolute",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "923px",
                        mx: "auto",
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',

                    }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${backgroundImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '198.88px',
                                height: '103.15px',
                                my:3
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    fontSize: "48px",
                                    lineHeight: "48px",
                                    textAlign: "center",
                                    pt:3,
                                    color:'#fff'
                                }}
                            >
                                Mobile
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    color:'#388FCB',
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    fontSize: "48px",
                                    lineHeight: "48px",
                                    textAlign: "center",
                                }}
                            >
                                Stock
                            </Typography>

                        </Box>

                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "32px",
                            textAlign: "center",
                            color: "#333333",
                        }}
                    >
                        We stay upto date with latest technology trends and offer innovative
                        solutions. that help you stay ahead in competetion
                    </Typography>
                </Box>
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "200px",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                        slidesPerView={"auto"}
                        spaceBetween={15}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 4,
                            },
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingTop: "70px",
                            paddingBottom: "70px",
                        }}
                    >
                        {data?.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: "15.75px",
                                        padding: "3px",
                                        background: "linear-gradient(45deg, #4fce74, #3a8bdc)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "12.6px",
                                            backgroundColor: "#F2FBFF",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "16px",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        <img
                                            src={slide.img}
                                            alt=""
                                            style={{ maxWidth: "100%", borderRadius: "8px" }}
                                        />
                                        <Typography variant="h6" sx={{ marginTop: "8px" }}>
                                            {slide.title}
                                        </Typography>
                                        <Typography variant="body2">{slide.paragraph}</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Box>
        </Box>
    );
};

export default MobileCard;
