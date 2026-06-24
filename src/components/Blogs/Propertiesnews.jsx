import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    CircularProgress,
 } from '@mui/material';
import  ArrowBack  from '@mui/icons-material/ArrowBack';
import ArrowForward  from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import Autoslider from './Autoslider.jsx';
import News from "../Data/Newsblog.js";
import { useParams } from 'react-router-dom';
export const Propertiesnews = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  const [index,setIndex] = useState(0);
  const navigate = useNavigate();
  const [news,setNews] = useState(News);
  const card_width =386;
  const cardlength=3;
  const next = ()=>{
    if(index>=news.length -cardlength) return;
    setIndex((p)=>p+1);
  }

  const prev = ()=>{
    if(index===0) return;

    setIndex((p)=>p-1);
  }

   const handleNavigate = ()=>{
    console.log("navigate to property news pages");
    setLoading(true);
    setTimeout(()=> navigate(`/news/`),2000)
  }

  return (
    <>
    {
      loading &&(
        <Box
        sx={{
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          position:"fixed",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          zIndex:9999,
          backgroundColor:"rgba(255,255,255,0.7",
        }}
        >
        <CircularProgress  size={50} />
        <Typography>Loading...</Typography>
        </Box>
      )}

      <Box sx={{mt:5,px:{xs:1,sm:3,md:6}}}>
        <Box>
          <Typography fontSize={40} color='grey' ml={5} >News And Articles</Typography>

          <Typography 
            sx={{
            ml:5,
            fontWeight:300,
            color:"rgba(0,0,0,0.4)",
          }}>See what is going in real state</Typography>
        </Box>
          
        <Box                  //viewport
        sx={{
          width:"100%",
          width:{xs:360,sm:600,md:card_width*3},
          overflow:"hidden",
          margin:"0 auto",
          position:"relative",
          mt:5,
          mb:5
        }}
        >
          <Box>
            {/* left Arrow */}
            <IconButton
            size='large'
            sx={{
              position:"absolute",
              top:"50%",
              left:0,
              transform:"translateY(-50%)",
              zIndex:10,
              backgroundColor:"#fff",  
              boxShadow:2,
              boxSizing:10,
              "&:hover":{
                backgroundColor:"#f5f5f5"
              }
            }}
            onClick={()=>prev()}
            >
              <ArrowBack  />
            </IconButton>
            {/* Right arrow */}
            <IconButton
            size='large'
            sx={{
            position:"absolute",
            top:"50%",
            transform:"translateY(-50%)",
            zIndex:10,
            right:0,
            backgroundColor:"#fff",
            boxShadow:2,
            
            boxSizing:50,
            "&:hover":{
              backgroundColor:"#f5f5f5"
            }
            }}
            onClick={()=>next()}
            >
              <ArrowForward />
            </IconButton>
          </Box>
            
          <Box       //sliding continer
          sx={{
            display:"flex",
            alignItems:"stretch",
            gap:2,
            justifyContent: "flex-start",
            transition:"transform 0.5s ease-in-out",
            transform: `translateX(-${index * (card_width+16)}px)`,
          }}
          >
            {/* arrowback icon */}
            {Array.isArray(news) &&
            news.map((item)=>(
              <Card onClick={()=>handleNavigate()}

              elevation={0}
              key={item.id}
              sx={{
                width:card_width,
                minHeight:180,
                borderRadius:1,
                flexShrink:0,
                border:"1px solid rgba(0,0,0,0.15)",
                cursor:'pointer',
                transition:"transform 0.5s ease-in-out",
              }}
              >
                <CardMedia
                component='img'
                alt='img'
                image={item.image}
                sx={{
                  objectFit:"cover"
                }}
                />
                <CardContent>
                  <Typography fontWeight={600}
                  sx={{
                    fontSize:"16px",
                    borderRadius:"4px",
                    textTransform:"none",
                    textOverflow:"ellipsis",
                    overflow:"hidden",       
                    "&:hover":{
                      color:"#2563eb"
                    }
                  }}
                  >
                    {item.newsheading}
                  </Typography>

                  <Typography variant='body2'
                  sx={{
                    color:"grey",
                    fontWeight:100,
                    whiteSpace:"wrap",
                    mt:1,
                    "&:hover":{
                      color:"rgba(0,0,0,0.8)"
                    }
                  }}
                  >
                  {item.newsdescription} 
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Box>

        < Autoslider />
      </Box>
    </>
  )
}

export default Propertiesnews;