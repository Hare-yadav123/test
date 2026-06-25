import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  DialogTitle
} from "@mui/material";
import CurrecyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import IconButton from '@mui/material/IconButton';
import  ArrowBack  from '@mui/icons-material/ArrowBack';
import  ArrowForward  from '@mui/icons-material/ArrowForward';
import PhoneIcon from "@mui/icons-material/Phone";
import Agentdata from "../Data/Agentdata.js";
import Contactform from '../AgentProfile/Contactform.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";

export const Agentcard = () => {
  const [openContact,setOpenContact] = useState(false);
  const [selectedId,setSelectedId] = useState(0);
  const [limitdata,setLimitData]  = useState([]);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const [offset ,setOffset] = useState(0);
  const [index,setIndex] = useState(0)
  const limit = useState(6);
  const totalcards=limitdata.length;
  const cardlenth = 4;
  const CARD_WIDTH = 290;
  const fixdata=5;
  const navigate = useNavigate();

  useEffect(()=>{
    const getdata = async()=>{
      try{
        const res = await axios.get(`https://web-production-2b5327.up.railway.app/api/agent`)
        setLimitData(prev=>(
          offset===0 ? res.data.data
          :[...prev,res.data.data]
        ));
        // setTimeout(()=>{navigate(`/contactform`)},1000)
      }catch(e){
        setError(e.message);
      }finally{
        setLoading(false);
      }
    };
    getdata();
  },[]);


  const next =()=>{
    if(index>limitdata.length-cardlenth )return;
    setIndex(p=>p+1);
  }

  const prev = ()=>{
    if(index===0) return;
    setIndex(p=>p-1);
  }

  const handleOpen = (id)=>{
    console.log("Agent card handle id:",id);
    setSelectedId(id);
    setOpenContact(true)};

  const handleClose = ()=>{
    setOpenContact(false);
  }
  return (
    
    <Box 
    sx={{
    background:"#fff",
    mt:5,
    px: { xs: 1, sm: 3, md: 6 }
    }}>
      <Box sx={{ml:5}}>
        <Typography
        sx={{
          fontSize:"40px",
          fontWeight:200,
          color:"rgba(0,0,0,0.6)"
        }}
        >
        Approved Seller Partners for You
        </Typography>
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
        {/*--------child box----------- */}
        <Box
        sx={{
          mt:4,
          display: "flex",
          gap:1,
          flexWrap:"nowrap",
          transform: `translateX(-${index *(CARD_WIDTH+8)}px)`,
          transition:"transform 0.5s ease-in-out",
          alignItems:"stretch"
        }}
        >
        {Array.isArray(limitdata) &&
        limitdata.map((item,index) => (
          <Box
            key={index}
            sx={{
              minWidth:CARD_WIDTH,
              gap:5
            }}
          >
            <Card
            elevation={0}
              sx={{
                width:CARD_WIDTH,
                minHeigh:160,
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 8px rgba(0,0,0,0.15)",
                },
                cursor:"pointer"
              }}
            >
              <Box
              sx={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center",
                margin:"0 auto",
                width:CARD_WIDTH,
                height:35,
                bgcolor:"#6c28d9bb",  // #60a5fa purple #A855F7 #2563eb  #6d28d9
                px:1,
                py:1
              }}
              >
                <CardMedia
                component="img"
                image= {`https://web-production-2b5327.up.railway.app${item.profileimage}`}  //{item.image}
                sx={{
                  height:40,
                  width:40,
                  objectFit: "cover",
                  flexShrink:0,
                  borderRadius:"5px"
                }}
              />
              <Typography
              sx={{
                margin:"0 auto",
                fontWeight:600,
                fontSize:"14px",
                textTransform:"uppercase",
                borderRadius:"4px",
                textOverflow:"ellipsis",
                color:"#fff",
                whiteSpace:"pre-wrap",
                overflow:"hidden",
                cursor:"pointer"
              }}
              >
               {item.agencyname}
              </Typography>
              </Box>

              <CardContent>
                <Stack spacing={1}>
                  <Typography sx={{ fontSize: 14, color: "gray" }}>{item?.user.name}  |  {item.totalsell} Properties sell</Typography>

                  <Typography sx={{ fontSize: 14, color: "gray" }}>
                    {item.location} 
                  </Typography>

                    <Box sx={{margin:"0 auto"}}>
                      <Button
                      variant='outlined'
                      startIcon={<PhoneIcon fontSize='12px'/>}
                      sx={{
                        width:"90%",
                        cursor:"pointer",
                        borderColor:"#6c28d9bb",
                        borderRadius:"99px",
                        fontWeight:600,
                        fontSize:"12px",
                        color:"#6c28d9bb",
                      }}
                      // onClick={()=>setOpenContact(true)}
                      onClick={()=>handleOpen(item.property?.id)}
                      >Contact-Us</Button>
                    </Box>
                </Stack>
              </CardContent>
            </Card>
        </Box>
         ))}
        </Box>
        {/* dialog box---- */}
        <Box>
          <Dialog
            open={openContact}
            onClose={()=>setOpenContact(false)}
            maxWidth="sm"
            fullWidth
            scroll='body'
            >
               {/* Title with Close Button */}
              <DialogTitle sx={{ m: 0, p: 2 }}>
                Property Seller
                
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: "gray",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent dividers sx={{maxHeight:"70vh"}}>
                {selectedId !==null && <Contactform id={selectedId} /> }
              </DialogContent>
          </Dialog>
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
            background:"#fff",
            cursor: index === 0 ? "allowed" : "pointer",
            "&:hover":{
              background:"#fff"
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
            background:"#fff",
            "&:hover":{
              background:"#fff"
            },
            mr:-1,
            transform:"translateY(-10px)"
          }}
          >
            <ArrowForward sx={{color:"rgba(0,0,0,1)"}} />
          </IconButton>
        </Box>

        {/* ------second-slide----- */}
        <Box
        sx={{
          mt:-3,
          display: "flex",
          gap:1,
          flexWrap:"nowrap",
          transform: `translateX(-${index *(CARD_WIDTH+8)}px)`,
          transition:"transform 0.5s ease-in-out",
          alignItems:"stretch"
        }}
        >
        {Array.isArray(Agentdata) &&
        Agentdata.map((item,id) => (
          <Box
            key={id}
            sx={{
              minWidth:CARD_WIDTH,
              gap:5
            }}
          >
            <Card
            elevation={0}
              sx={{
                width:CARD_WIDTH,
                minHeigh:160,
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 8px rgba(0,0,0,0.15)",
                },
                cursor:"pointer"
              }}
            >
              <Box
              sx={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center",
                margin:"0 auto",
                width:CARD_WIDTH,
                height:35,
                bgcolor:"#6c28d9bb",  // #60a5fa purple #A855F7 #2563eb  #6d28d9
                px:1,
                py:1
              }}
              >
                <CardMedia
                component="img"
                image={item.image}      //{`https://web-production-2b5327.up.railway.app${item.profileimage}`}
                sx={{
                  height:40,
                  width:40,
                  objectFit: "cover",
                  flexShrink:0,
                  borderRadius:"5px"
                }}
              />
              <Typography
              sx={{
                margin:"0 auto",
                fontWeight:600,
                fontSize:"14px",
                textTransform:"uppercase",
                borderRadius:"4px",
                textOverflow:"ellipsis",
                color:"#fff",
                whiteSpace:"pre-wrap",
                overflow:"hidden",
                cursor:"pointer"
              }}
              >
               {item.agencyname}
              </Typography>
              </Box>

              <CardContent>
                <Stack spacing={1}>
                  <Typography sx={{ fontSize: 14, color: "gray" }}>{item.agentname}  |  {item.totalsell} Properties sell</Typography>

                  <Typography sx={{ fontSize: 14, color: "gray" }}>
                    {item.location}  | {item.totalrent} Rent
                  </Typography>

                    <Box>
                      <Button
                      variant='outlined'
                      startIcon={<PhoneIcon 
                      sx={{
                        fontWeight:600,
                        fontSize:"12px"
                      }}
                      />}
                      sx={{
                        mt:1,
                        cursor:"pointer",
                        borderColor:"#6c28d9bb",
                        borderRadius:"99px",
                        fontWeight:600,
                        fontSize:"12px",
                        color:"#6c28d9bb",
                        width:"90%",
                      }}
                      onClick={()=>setOpenContact(true)}
                      >
                        {/* {loading ? <CircularProgress size={24} sx={{color:"success" }} /> : "Contact-us"} */} 
                      Contact-Us</Button>
                    </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
         {/* <Dialog
          open={setContact}
          onClose={()=>setOpenContact(false)}
          maxWidth="sm"
          fullWidth
          >
            <DialogContent>
              <Contactform /> 
            </DialogContent>
          </Dialog> */}
        </Box>
        {/* --------------------------- */}
      </Box>
    </Box>
  )
}

export default Agentcard;