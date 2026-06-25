import React from 'react'
import Heropage from './Herosection';
import { Box, Typography ,Grid,Button, Card,CardContent,CardMedia,CardActionArea,} from '@mui/material';
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Navigation,Pagination} from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import Slidecard from "./card.jsx"
const images = [
    'https://web-production-2b5327.up.railway.app/static/property/images/home.png',
    'https://web-production-2b5327.up.railway.app/static/property/images/video.mp4'
    ]
export const Home = () => {

  return (
    <>
    <Heropage />
    <Box>
      <Grid container spacing={5}>
        <Grid item sx={12}>
          <Box sx={{mt:10}}>
            <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{clickable:true}}
            modules={[Navigation,Pagination]}
            >
              {/* <Slidecard /> */}
            <Box>
            {
              images.map((imgs,i)=>(
                <SwiperSlide key={i}>
                  
                  <Card
                  elevation={5}
                  sx={{
                    position: "relative",
                    maxWidth: "90%",
                    background: "#e558354d",
                    margin: "0 auto",
                    mb: 5,
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <CardActionArea
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "stretch",                 // 🔥 makes both sides same height
                      gap: { xs: 1, sm: 0 },
                    }}
                  >
                    {/* LEFT CONTENT */}
                    <Box
                      sx={{
                        flex: { xs: "1 1 auto", sm: "1 1 45%" },
                        p: 2,
                      }}
                    >
                      <CardContent>
                        <Typography fontSize={20} fontWeight={300}>
                          Saheel Landmarc Homes
                        </Typography>

                        <Typography color="text.secondary">
                          Hinjawadi Phase
                        </Typography>

                        <Typography sx={{ mt: 3 }} fontWeight={700} fontSize={18}>
                          ₹73.98 L – 1.07 Cr
                        </Typography>

                        <Typography color="text.secondary">
                          2, 3 BHK Apartments
                        </Typography>

                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            mt: 4,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 600,
                          }}
                        >
                          Contact
                        </Button>
                      </CardContent>
                    </Box>

                    {/* RIGHT IMAGE / VIDEO */}
                    <CardMedia
                      component="video"
                      src={imgs}                 // 🔥 use src for video (NOT image)
                      autoPlay
                      muted
                      loop
                      sx={{
                        flex: { xs: "1 1 auto", sm: "1 1 55%" },
                        width: "100%",
                        height: "100%",           // 🔥 always match card height
                        objectFit: "cover",
                        borderRadius: { xs: 2, sm: "0 5px 5px 0" },
                      }}
                    />
                  </CardActionArea>
                </Card>

                </SwiperSlide>
              ))}
              </Box>
            </Swiper>
          </Box>
        </Grid>
      </Grid>

    </Box>
    
    </>
  )
}

export default Home;