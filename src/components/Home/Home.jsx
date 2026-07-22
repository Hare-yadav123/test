import React, { useEffect, useState } from 'react'
import Heropage from './Herosection';
import { Box, Typography ,Grid, Card,CardContent,CardMedia,CardActionArea, Button,Stack, CircularProgress} from '@mui/material';
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Navigation,Pagination} from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import axios from 'axios';
import CurrecyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {IconButton} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import  ArrowForward  from '@mui/icons-material/ArrowForward';
import Propimage from "../Data/Propertyimage.js";
import Agentcard from './Agentcard.jsx';
import News from "../Blogs/Propertiesnews.jsx";
import Bot from "../Homeassist/Bot.jsx";
import { useNavigate }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom';
const video = ['http://127.0.0.1:8000/static/property/images/video1.mp4']

export const Home = () => {

  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [limitData, setLimitData] = useState([]);
  const [fixdata ,setFixData] = useState([]);
  const [nextData,setNextData] = useState(null);
  const [offset,setOffset] = useState(0);
  const [error, setError] = useState("");
  const [limit] = useState(6);
  const [index,setIndex] = useState(0);
  const CARD_WIDTH=290;
  const cardlenth = 3;
  const totalcards = limitData.length;
  const navigate = useNavigate();
  const {id} = useParams();

  //  feature porperties data  fetching
  useEffect(()=>{
    const loaddata = async()=>{
      try{
        const res = await axios.get(`http://127.0.0.1:8000/api/business/`)
        setData(res.data.data)
      }catch(e){
        setError(e.message);
      }finally{
        setLoading(false);
      }
    }
    loaddata()
  },[])

  useEffect(()=>{
    const getdtata = async()=>{
      try{
        const response = await axios.get(`http://127.0.0.1:8000/api/business/?limit=${limit}&offset=${offset}`)
        setLimitData(prev=> 
          offset === 0 ? response.data.data
          :[...prev,response.data.data]
        );
        setNextData(response.data.next);
      }catch(e){
        setError(e.message)
      }finally{
        setLoading(false)
      }
    }
    getdtata()
  },[offset]);

  //  for top propertis data fetching
  const fixed = 6;
  useEffect(()=>{
    const filterdata = async()=>{
      try{
        setLoading(true);

        const userdata =await axios.get(`http://127.0.0.1:8000/api/business/?fixed=${fixed}&offset=${offset}`)
        setFixData((prev)=>
          // offset===0 ? userdata.data.data
          // :[...prev,userdata.data.data]
          [
          ...prev,
          ...userdata.data.data
          ]
        );
        setNextData(userdata.data.next)
      }catch(e){
        setError(e.message);
      }finally{
        setLoading(false);
      }
    }
    filterdata();
  },[offset])

  const next=()=>{
    if(index>=limitData.length - cardlenth) return;
    // if(index >= maxlength) return ;
    console.log("index:", index);

    setIndex((p)=>p+1);
  }


  const prev = () => {
  if (index===0) return;    //  stop at start
    console.log("index:", index);

  setIndex((p) => p - 1);
  };

  // handle navigate to property deatils page with id
  const handleNavigate = (id) =>{
    console.log("navigate to property details page with id:",id)
    setLoading(true);
    
    setTimeout(()=> navigate(`/propertydetails/${id}`),2000)
  }

  // handle navigate to Trusted property deatils page with id
  const handleNavigateTrustedPage = (id) =>{
    console.log("navigate to top property page with id:",id)
    setLoading(true);
    
    setTimeout(()=> navigate(`/Trustedpagelayout/${id}`),2000)
  }

  return (
    <>
    {/* hero page */}
    <Heropage />  

    <Box mt={5} background="#fff">
      <Grid container spacing={5}>
        <Grid item sx={12}>
          {/*------- Header of hero section-------- */}
            <Box > 
              <Box sx={{ml:10,gap:1}}>
                <Typography variant='h4'
                  sx={{
                  fontWeight:700,
                  color:"rgba(0,0,0,0.6)",
                  wordSpacing:1
                }}
                >Your DreamHome starts here</Typography>
                  <Typography 
                  sx={{
                  fontWeight:300,
                  color:"rgba(0,0,0,0.4)",
                  }}>A place where your families grow together</Typography>
              </Box>
                 {/* Top Debeloper, Slider page */}
            <Swiper
            className='myswiper'
            slidesPerView={1}
            spaceBetween={0}
            navigation
            pagination={{clickable:true}}
            modules={[Navigation,Pagination]}
            >
            <Box>
            {
              video.map((vid,i)=>(
                <SwiperSlide key={i}>
                  <Card
                  elevation={0}
                  sx={{
                    position:"relative",
                    maxWidth:"88%",
                    maxHeight:"auto",
                    background:" #e558354d",
                    margin:"0 auto",
                    color:"blue",
                    mb:5,
                    overflow:"hidden",
                    borderRadius:5,
                    p:0,
                    mt:5,
                    overflow:"hidden"
                  }}
                  > 
                    <CardActionArea component="div" sx={{
                      display:"flex",
                      alignItems:"stretch",
                      flexDirection:{xs:"column",sm:"row"},
                      gap:{xs:1,sm:0}
                    }}
                      onClick={()=>console.log(" image clicked")}>

                      <Box 
                       sx={{
                        p:2,
                        flex: { xs: "1 1 auto", sm: "1 1 20%" },
                        whiteSpace:"nowrap",
                       
                      }}
                       >  
                        <CardContent sx={{flex: 1,
                          ml:{
                            xs:0,
                            sm:15,
                            md:0
                          }
                        }}> 
                          <Typography sx={{ mt: 2 }} fontSize={20} fontWeight={300}>
                            Saheel Landmarc PVT. LTD
                          </Typography>

                          <Typography
                            sx={{
                              color: "text.secondary",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <Link to="/wrapper">View detail</Link>
                          </Typography>

                        {/* Location */}
                         <Typography sx={{ mt: 2 }} fontSize={20} fontWeight={300}>
                            Saheel Homes
                          </Typography>

                          <Typography
                            sx={{
                              color: "text.secondary",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Hinjawadi Phase-3
                          </Typography>

                        {/* Price */}
                          <Typography sx={{ mt: 4}} fontWeight={700} fontSize={18}>
                            ₹73.98 L – 1.07 Cr
                          </Typography>

                          {/* Apartment Info */}
                          <Typography color="text.secondary">
                            2, 3 BHK Apartments
                          </Typography>

                        {/* Button */}
                          <Button
                            size="small"
                            variant="contained"
                            component="samp"
                            sx={{
                              width:"90%",
                              height:50,
                              mt: 5,
                              borderRadius: 3,
                              textTransform: "none",
                              fontWeight: 600,
                              fontSize: 16,
                              background: "linear-gradient(90deg,#6a00ff,#7d3cff)",
                            }}
                          >
                            Contact
                          </Button>
                      </CardContent>

                      </Box>
                        
                      <CardMedia 
                      component="video"
                      image={vid}
                      autoPlay        
                      muted
                      loop
                      sx={{
                        flex: { xs: "1 1 auto", sm: "1 1 70%" },
                        height:{ xs: 200, sm: 300, md: 380 },
                        objectFit: "cover",                               // use "contain" if you never want cropping
                        borderRadius: 3,
                      }}
                      >
                      </CardMedia>  
                    </CardActionArea>
                    </Card> 
                </SwiperSlide>
              ))}


              {/*  -----------second slide------------- */}
              <SwiperSlide>
                  <Card
                  elevation={0}
                  sx={{
                    position:"relative",
                    maxWidth:"88%",
                    maxHeight:"auto",
                    background:" #e558354d",
                    margin:"0 auto",
                    color:"blue",
                    mb:5,
                    overflow:"hidden",
                    borderRadius:5,
                    p:0,
                    mt:5,
                    overflow:"hidden"
                  }}
                  > 
                    <CardActionArea component="div" sx={{
                      display:"flex",
                      alignItems:"stretch",
                      flexDirection:{xs:"column",sm:"row"},
                      gap:{xs:1,sm:0}
                    }}
                      onClick={()=>console.log(" image clicked")}>

                      <Box 
                       sx={{
                        p:2,
                        flex: { xs: "1 1 auto", sm: "1 1 20%" },
                        whiteSpace:"nowrap",
                       
                      }}
                       >  
                        <CardContent sx={{flex: 1,
                          ml:{
                            xs:0,
                            sm:15,
                            md:0
                          }
                        }}> 
                          <Typography sx={{ mt: 2 }} fontSize={20} fontWeight={300}>
                            Audh Homes Pvt. Ltd
                          </Typography>

                          <Typography
                            sx={{
                              color: "text.secondary",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {/* <Link to='/toppropertsection'>View detail</Link> */}
                            <Link to='/wrapper'>View detail</Link>

                          </Typography>

                        {/* Location */}
                            <Typography sx={{ mt: 2 }} fontSize={20} fontWeight={300}>
                            Audh Homes 
                          </Typography>

                          <Typography
                            sx={{
                              color: "text.secondary",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Belapur Mumbai MH 
                          </Typography>

                        {/* Price */}
                          <Typography sx={{ mt: 4}} fontWeight={700} fontSize={18}>
                            ₹73.98 L – 1.9 Cr
                          </Typography>

                          {/* Apartment Info */}
                          <Typography color="text.secondary">
                            1, 2, 3 BHK Apartments
                          </Typography>

                        {/* Button */}
                          <Button 
                          variant="contained"
                          component="samp"
                          sx={{
                            width:"90%",
                            height:50,
                            mt: 5,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: 16,
                            background: "linear-gradient(90deg,#6a00ff,#7d3cff)",
                            }}
                          >
                          Contact
                          </Button>
                      </CardContent>

                      </Box>
                        
                      <CardMedia 
                      component="video"
                      image='http://127.0.0.1:8000/static/property/images/video.mp4'
                      autoPlay        
                      muted
                      loop
                      sx={{
                        flex: { xs: "1 1 auto", sm: "1 1 70%" },
                        height:{ xs: 200, sm: 300, md: 380 },
                        objectFit: "cover",                               // use "contain" if you never want cropping
                        borderRadius: 3,
                      }}
                      >
                      </CardMedia>  
                    </CardActionArea>
                    </Card> 
                </SwiperSlide>
              </Box>
            </Swiper>

            {/* ------------feature projects-------------- */}
             
            <Box sx={{px:{xs:1,sm:3,md:6}}}>
              <Box 
                sx={{
                  fontWeight:700,
                  color:"rgba(0,0,0,0.7)",
                  fontWidth:"40px",
                  ml:5
                }}
              >
                <Typography variant='h5'
                sx={{
                  fontSize:"40px",
                  fontWeight:200,
                  color:"rgba(0,0,0,0.6)"
                }}
                >Popular Featured Properties</Typography>

                <Typography 
                  sx={{
                  fontWeight:300,
                  color:"rgba(0,0,0,0.4)",
                }}>Find your perfect home from our top listings</Typography>
              </Box>

              <Box  sx={{
                width:"100%",
                px:4,
                margin:0,
                mt:5,
              }}>

                {loading && (
                  <Box
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100vh",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 9999
                    }}
                  >
                    <CircularProgress size={50} />
                    <Typography> Loading...</Typography>
                  </Box>
                )}
                <Grid container spacing={2}>
                  {Array.isArray(data) && data
                  .sort((a,b)=>a.id-b.id)                            //filter data according to accending order
                  .map((items)=>(

                  <Grid 
                  key={items.id} 
                  xs={12}  
                  sm={6}
                  md={3}
                  lg={4}
                  >
                    <Card elevation={0}
                    
                    onClick = {() =>handleNavigate(items.id)}

                    sx={{
                      mt:2,
                      width:"100%",
                      minHeight:160,
                      border:"1px solid rgba(0,0,0,0.1)",
                      borderRadius:1.5,
                      overflow:"hidden",
                      transition:"all 0.3s ease",
                      cursor:"pointer",
                      "&:hover":{
                        transform:"translateY(-5px)",
                        boxShadow:"0 16px 40px rgba(0,0,0,.15)"
                      }
                    }}
                    >
                      <CardMedia 
                      component="img"
                      alt='property'
                      image={`http://127.0.0.1:8000${items.images_data[0]?.image}`}
                      sx={{ 
                        height:160,
                        objectFit:"cover",
                        transition:"transform 0.5s ease-in-out",
                        "&:hover":{
                          transform:"scale(1.1)"
                        }
                      }}
                      />  
                      <CardContent>
                        <Typography
                        sx={{
                          fontWeight:300,
                          fontSize:"15px",
                          color:"rgba(0,0,0,0.7)"
                        }}
                        >{items.businessname}</Typography>
                        <Typography 
                        sx={{
                          fontWeight:200,
                          fontSize:"15px",
                          color:"rgba(0,0,0,0.5)"
                        }}
                        >{items?.status?.property_statusname}</Typography>
                        <Typography
                        sx={{
                          fontWeight:200,
                           fontSize:"15px",
                          color:"rgba(0,0,0,0.5)"
                        }}
                        >{items?.propertytype?.property_typename}</Typography>
                        <Typography
                        sx={{
                          fontWeight:200,
                          fontSize:"15px",
                          color:"rgba(0,0,0,0.5)"
                        }}
                        >{items.location?.city}</Typography>
                        <Typography 
                        sx={{
                          display:"flex",
                          alignItems:"center",
                          fontWeight:50,
                          fontSize:"17px",
                          color:"rgba(0,0,0,1)"
                        }}
                        >
                          <CurrecyRupeeIcon 
                          sx={{
                            fontWeight:40,
                            fontSize:"17px",
                            color:"rgba(0,0,0,0.8)"
                          }}
                         fontSize='small' />
                          {items.price} Lac
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
              {/* -----------------Top project Testimonial data-------------------- */}
            <Box sx={{
            background:"#fff",
            mt:5,
            px: { xs: 1, sm: 3, md: 6 }
            }}>
              <Box sx={{ml:5,mt:2}}>
                <Typography
                sx={{
                  fontSize:"40px",
                  fontWeight:200,
                  color:"rgba(0,0,0,0.6)"
                }}
                >
                  Projects of Top Developer
                </Typography>

                <Typography 
                  sx={{
                  fontWeight:300,
                  color:"rgba(0,0,0,0.4)",
                }}>Spaces built for memories, comfort, and growth</Typography>
              </Box>
                  
              <Box
              sx={{
                Width:"100%",
                width:{xs:"300px",sm:"600px",md:CARD_WIDTH*4},
                overflow: "hidden",
                position: "relative",
                margin:"0 auto",
                padding:1,
              }}
              >
                {/* child box */}
                <Box
                sx={{
                  mt:4,
                  gap:1,
                  display: "flex",
                  flexWrap:"nowrap",
                  transform: `translateX(-${index * (CARD_WIDTH+8)}px)`,
                  transition:"transform 0.5s ease-in-out",
                  alignItems:"stretch",
                }}
                >

                {Array.isArray(Propimage) &&
                  Propimage.map((item) => (
                    <Box
                      key={index.id}
                      sx={{
                        minWidth:CARD_WIDTH,
                      }}
                    >
                      <Card
                      elevation={0}
                        sx={{
                          width:CARD_WIDTH,
                          height:150,
                          display: "flex",
                          border: "1px solid rgba(0,0,0,0.15)",
                          borderRadius: 1,
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            boxShadow: "0 8px 8px rgba(0,0,0,0.15)",
                          },
                          cursor:"pointer"
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          sx={{
                            height: 150,
                            width: 150,
                            objectFit: "cover",
                            flexShrink:0
                          }}
                        />

                        <CardContent>
                          <Stack spacing={1}>
                            <Typography>{item.businessName}</Typography>
                            <Typography sx={{ fontSize: 14, color: "gray" }}>
                              {item.propertyType}
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: "gray" }}>
                              {item.location} 
                            </Typography>
                            <Typography
                            sx={{ display:"flex", alignItems:"center" }}
                            >
                              <CurrecyRupeeIcon fontSize="small" 
                              sx={{
                              fontWeight:20,
                              fontSize:"17px", 
                              color:"rgba(0,0,0,0.8)"
                              }}
                              /> {item.price}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>
                {/* ------arrow button */}
                <Box sx={{
                  display:"flex",
                  position:"relative",
                  justifyContent:"space-between",
                  alignItems:"center",
                  width:"100%",
                  mt:-1,
                  zIndex:2,

                }}>
                  <IconButton 
                  size='large'
                  onClick={()=>prev()}
                  disabled={index<=0}
                  sx={{
                    position:"relative",
                    boxShadow:"0 10px 10px rgba(0,0,0,0.6)",
                    opacity:index<=0 ? 0.4 : 1,
                    backgroundColor:"#fff",
                    cursor: index === 0 ? "allowed" : "pointer",
                    "&:hover":{
                      backgroundColor:"#f5f5f5"
                    },
                    ml:-1,
                   transform:"translateY(-10px)"
                  }}
                  >
                    <ArrowBack sx={{color:"rgba(0,0,0,1)"}} />
                  </IconButton>

                  <IconButton 
                  size='large'
                  onClick={()=>next()}
                  disabled={index>=totalcards - cardlenth}
                  sx={{ 
                    position:"relative",
                    boxShadow:"0 10px 10px rgba(0,0,0,0.6)",
                    opacity:totalcards-cardlenth===0 ? 0.4:1,
                    cursor: index === 0 ? "allowed" : "pointer",
                    backgroundColor:"#fff",
                    "&:hover":{
                      backgroundColor:"#f5f5f5"
                    },
                    mr:-1,
                    transform:"translateY(-10px)"
                  }}
                  >
                    <ArrowForward sx={{color:"rgba(0,0,0,1)"}} />
                  </IconButton>
                </Box>

                {/* ------second-slide Top Project --api data----- */}
                <Box
                sx={{
                  display: "flex",
                  mt:-3,
                  gap:1,
                  flexWrap: "nowrap",
                  transform: `translateX(-${index * (CARD_WIDTH+8)}px)`, //gap 1=8px full slide of card in Box container
                  transition:"transform 0.5s ease-in-out",
                  alignItems:"stretch",
                }}
                >
                {Array.isArray(fixdata) &&
                  fixdata.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        minWidth: CARD_WIDTH,   // 👈 fixed width
                      }}
                    >
                      <Card
                      onClick={()=>handleNavigateTrustedPage(item.id)}
                      elevation={0}
                      sx={{
                        width: CARD_WIDTH,
                        height:150,
                        display: "flex",
                        border: "1px solid rgba(0,0,0,0.15)",
                        borderRadius: 1,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 15px rgba(0,0,0,0.05)",
                        },
                        cursor:"pointer"
                      }}
                      >
                        <CardMedia
                          component="img"
                          alt='properties'
                          image={`http://127.0.0.1:8000${item.images_data?.[0]?.image}`}
                          sx={{
                            height: 150,
                            width: 150,
                            objectFit: "cover",
                            flexShrink:0
                          }}
                        />

                        <CardContent>
                          <Stack spacing={1}>
                            <Typography>{item.businessname}</Typography>
                            <Typography sx={{ fontSize: 14, color: "gray" }}>
                             {item.propertytype?.property_typename}
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: "gray" }}>
                              {item.location?.city}
                            </Typography>
                            <Typography
                            sx={{ display:"flex", alignItems:"center" }}
                            >
                              <CurrecyRupeeIcon fontSize="small" 
                              sx={{
                              fontWeight:20,
                              fontSize:"17px", 
                              color:"rgba(0,0,0,0.8)"
                              }}
                              /> 80
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
              </Box>
              </Box>
            </Box>
            {/* ----------------Agent card ---------------------- */}
              <Agentcard />
            {/* --------------New and arcticle*********--------------- */}
             <News /> 

              <Bot />
          </Box> 
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Home;