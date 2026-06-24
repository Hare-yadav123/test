import React, { useState } from 'react'
import { 
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    img
 } from '@mui/material';
import makanNews from "../Data/Newsblog.js";
import Divider from '@mui/material/Divider';
export const RealstateNews = () => {
  const [index,setIndex] = useState(0);
  const [news,setNews] = useState(makanNews);
  const card_width =386;
  const cardlength=3;

  
  return (
    <Box 
    sx={{
        width:"100%",
        position:"relative",
        zIndex:500,
    }}
    >
        {/* image  */}
       <Box
        component='img'
        alt='image'
        src= {`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2`}  
        sx={{
            width:"100%",
            height:500,
            objectFit:"cover"
        }}
       >

       </Box>
        <Box>
            {Array.isArray(news) &&
            news.map((item)=>(
                <Card
                key={item.id}
                elevation={0}
                sx={{
                    display:"flex",
                    width:"80%",
                    minHeight:240,
                    borderRadius:0,
                    border:"1px solid rgba(0,0,0,0.1)",
                    borderTop:"none",
                    borderRight:"none",
                    borderLeft:"none",
                    mt:4,
                    mb:2,
                    mx:"auto",
                }}
                >
                    <CardMedia 
                    component='img'
                    alt='img'
                    image={item.image}
                    sx={{
                        width:300,
                        height:220,
                        objectFit:"cover",
                    }}
                    />

                    <CardContent
                    sx={{
                        flex:1,
                        whiteSpace:"wrap",
                        width:400,
                        maxWidth:400,
                    }}
                    >
                        <Typography variant='h6' fontWeight={600}>{item.newsheading}</Typography>

                        <Typography variant='body2' color='text.secondry' mt={1} 
                        sx={{
                            lineHeight:2
                        }}
                        >
                        {item.newsdescription}</Typography>
                    </CardContent>
                </Card>
                
            ))}
            <Divider />
        </Box>
    </Box>
  )
}

export default RealstateNews;