import { useEffect,useState } from 'react';

import {
    Box,
    Typography,
    Card,
    CardMedia,
 } from '@mui/material';
import Propimg from "../Data/Sliderimg.js";

export const Autoslider = () => {
  const [index,setIndex] = useState(0);
  const [offset,setOffset] = useState(0)
  const [images,setImages] = useState(Propimg);
  const cardwidth = 150;
  const cardlength=8;

    useEffect(()=>{
      let animatedid;
      const speed = 0.3;

      const animate = ()=>{
        setIndex((prev)=>{
          const maxindex = images.length*cardwidth;
          return prev >= maxindex ? 0 : prev+speed;
        })
        animatedid = requestAnimationFrame(animate)
      };
      animatedid = requestAnimationFrame(animate);
      return ()=>cancelAnimationFrame(animatedid);

    },[images.length])

  return (
    <Box
    sx={{
      px:{xs:2,sm:3,md:7},
      width:cardwidth*7,
      margin:"0 auto",
      overflow:'hidden',
      mt:5,
      mb:5,
    }}
    >
      <Box
      sx={{
        display:"flex",
        width:cardwidth*7,
        gap:2,
        alignItems:"stretch",
        transform:`translateX(-${index+16}px) `,
        transition:"transform 0.2s ease",
        willChange:"transform"
      }}
      >   
        { Array.isArray(Propimg) &&
        Propimg.map((item)=>(

          <Card key={item.id}
          elevation={0}
          sx={{
            width:cardwidth,
            flexShrink:0,
            minHeight:50,
            borderRadius:"50%",
            cursor:"pointer",
            mt:5
          }}
          >

            <CardMedia
            component='img'
            image={item.image}
            alt='propertes'
            sx={{
              objectFit:"cover",
              width:cardwidth,
            }}
            />

          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Autoslider;