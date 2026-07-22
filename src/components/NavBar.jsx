import { useState,useEffect } from "react";
import {Box,Typography,Button,MenuItem,Menu,Avatar,TextField,Badge, Autocomplete,Drawer, IconButton} from '@mui/material'
import { useLocation } from "react-router-dom";
import SearchIcon, { Translate } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import Asso from '../assets/Associative.jpg'
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const NavBar = ()=>{

  const loc = useLocation();
  const navigate = useNavigate();
  const [openButton,setOpenButton] = useState(false)
  const [menuState,setMenuState] = useState({anchorEl: null,menuName: ""});
  const open = Boolean(menuState.anchorEl);
  const handleOpen = (e,name)=>{
    setMenuState({
      anchorEl: e.currentTarget,
      menuName: name
    })
  };
  const handleClose = ()=>{
    setMenuState({
      anchorEl: null,
      menuName: ""
    })
  };

  const drawerbutton = ()=>{
    setOpenButton((prev)=> !prev);
  }
    return(
      <>
        <Box
        sx={{
          position:"fixed",
          display:"flex",
          width:"100%",
          height:"60px",
          justifyContent:"center",
          alignItems:"center",
          padding:"0px 20px",
          backgroundColor:"black",
          color:"#fff",
          gap:2,
          zIndex:1300,
        }}
        >
          {/* logo */}
          <Box
          sx={{
            display:"flex",
            alignItems:'center',
            cursor:"pointer",
            marginLeft:"0px",
            height:{xs:'80px',md:'100px',lg:"120px",xl:"140px"}
          }}
          >
          <img 
          src={Asso}
          alt="web logo"
          style={{
            height:"50%",
            width:'100%',
            objectFit:"contain",
            color:"blue",
            borderRadius:"50%"
          }}
          />
          </Box>
          
          <Box sx={{display:{xs:"none",md:'block'}, justifyContent:"center",alignItems:"center",flexGrow:1,gap:2}}>
            <Autocomplete 
            freeSolo
            size="small"
            options={"" || []}
            sx={{
              width:'250px',
              backgroundColor:"#ffff",
              borderRadius:"5px",
              ml:{xs:0,md:10}
            }}
            renderInput={(prams)=>(
              <TextField {...prams} placeholder='search here....' sx={{textAlign:"center"}} />
            )}
            />
          </Box>

          {/* Navbar  menu */}
          <Box 
          sx={{ 
          overflow:"visible",
          display:{xs:"flex",md:"flex"},
          justifyContent:"center", 
          alignContent:'center',
          gap:7,
          margin:"0 auto",
          mr:1.5
          }}
          >
            <Button 
            sx={{
              color:"#fff",
            }}
            onClick={()=>navigate('/')}
            >
              Home
            </Button>

            {/* Dropdown menu */}
            <Box>
              <Button onMouseEnter={(e)=>handleOpen(e,"Buy")}
                sx={{
                color:"#fff",
                }}
                endIcon={
                  <KeyboardArrowDownIcon 
                  sx={{
                    transition:"transform 0.1s ease",
                    transform : open && menuState.menuName === "Buy" ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                  />
                }
              >for Buyers</Button>
            <Menu
            anchorEl={menuState.anchorEl}
            open={menuState.menuName==="Buy"}
            onClose={handleClose}
            anchorOrigin={{vertical:'bottom',horizontal:'left'}}
            transformOrigin={{vertical:'top',horizontal:'left'}}
            disableScrollLock={true}
            PaperProps={{
              onMouseLeave:handleClose,
              
              sx:{
                p:1,
                display:"flex",
                minWidth:{sx:100,md:100,lg:100},
                justifyContent:"center",
                alignContent:"center",
                borderRadius:"10px",
                transition:"all 0.3s ease-in-out",
                backgroundColor:"background.paper",
                "&:hover":{
                  boxShadow:2,
                  transform:"translateY(-2px)"
                },
                "&:active":{
                  transform:"scale(0.2)"
                },
                "&:hover .MuiList-root":{
                  gap:2

                },
                
                "& .MuiList-root":{
                  display:"flex",
                  flexDirection:"row",
                  gap:2,
                  transition:"gap 0.1s ease"
                },
              }
            }}
            TransitionProps={{
              timeout:300
            }}
            >
              <Box sx={{flex:1}}>
                <MenuItem onClick={(()=>navigate('/forsale'))}>Homes</MenuItem>
              </Box>

              <Box sx={{flex:1}}>
                <MenuItem onClick={(()=>navigate('/forsale'))}>Plots</MenuItem>
              </Box>

              <Box sx={{flex:1}}>
                <MenuItem onClick={(()=>navigate('/forsale'))}>Flats</MenuItem>
              </Box>
            </Menu>
            </Box>

            <Box>
              <Button  onMouseEnter={(e)=>handleOpen(e,"Sells")}
              sx={{
                color:"#fff",
              }}
              endIcon={
                  <KeyboardArrowDownIcon 
                  sx={{
                    transition:"transform 0.1s ease",
                    transform : open && menuState.menuName === "Sells" ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                  />
                }
              >for Sellers</Button>
              <Menu
              anchorEl={menuState.anchorEl}
              open={menuState.menuName==="Sells"}
              onClose={handleClose}
              anchorOrigin={{vertical:'bottom',horizontal:'left'}}
              transformOrigin={{vertical:'top',horizontal:'left'}}
              MenuListProps={{
                disablePadding:true
              }}
              disableScrollLock={true}
              PaperProps={{
                onMouseLeave:handleClose,         //when remove mouse on Navbar menu then dropdown automatic will be close
                sx: {
                  p: 2,
                  display: "flex",                   // put flex here (correct place)
                  minWidth:{xs:100,md:150,lg:200},
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:'10px',
                  "&:hover":{
                    boxShadow:4,
                    transform:"translateY(-2px)"
                  },
                  "&:active":{
                    transform:"scale(0.1)"
                  },
                  "& .MuiList-root":{
                    display:'flex',
                    flexDirection:'row',
                    gap: 2,
                  }
                }
              }}
              >
                <Box sx={{flex:1}}>
                  {/* <Typography sx={{maxWidth:600}}>Left side</Typography> */}
                  <MenuItem  onClick={()=>navigate('forseller')}>Developer</MenuItem>
                </Box>

                <Box sx={{flex:1}}>
                  <MenuItem onClick={()=>navigate('broker')}>Broker</MenuItem>
                  
                </Box>

                <Box sx={{flex:1}}>
                  <MenuItem onClick={()=>navigate('Owners')}>Owners</MenuItem>
                </Box>
              </Menu>
            </Box>

           <Box>
            <Button onMouseEnter={(e)=>handleOpen(e,"service")}
              sx={{
                color:"#fff",
              }}
              endIcon={
                <KeyboardArrowDownIcon 
               sx={{
                  transition:"transform 0.1s ease",
                  transform : open && menuState.menuName === "service" ? "rotate(180deg)" :"rotate(0deg)"
                }}
                />
              }
            >Service</Button>
            <Menu
            anchorEl={menuState.anchorEl}
            open={menuState.menuName==="service"}
            onClose={handleClose}
            anchorOrigin={{vertical:'bottom',horizontal:'left'}}
            transformOrigin={{vertical:'top',horizontal:'left'}}
            disableScrollLock={true}
            PaperProps={{
              onMouseLeave:handleClose,
              sx:{
                p:1,
                display:"flex",
                minWidth:{sx:100,md:150,lg:200},
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"10px",
                "&:hover":{
                  boxShadow:4,
                  transform:"translateY(-2px)"
                },
                "&:active":{
                  transform:"scale(0.1)"
                },
                "& .MuiList-root":{
                  display:"flex",
                  flexDirection:"row",
                  gap:2,
                  transition:"gap 0.2s ease",
                  opacity:"1"
                }
              }
            }}
            >
              <Box sx={{flex:1,fontSize:"2px"}}>
                <MenuItem onClick={()=>navigate('/homeprotect')}>Housing Protect</MenuItem>
                
              </Box>

              <Box sx={{flex:1}}>
                <MenuItem onClick={()=>navigate('/housingpremium')}>Housing Premium</MenuItem>
               
              </Box>

              <Box sx={{flex:1}}>
                <MenuItem>EMI Calculater</MenuItem>
                                
              </Box>
            </Menu>
           </Box>

            <Button  style={{color:loc.pathname==='/Login'? 'blue':'white'}}
            onClick={()=>navigate('/news')}
            >
              Blog
            </Button>

            {/* ------------Right side drawer----------------- */}
            {/* Navbar button */}
            <IconButton color="inherit" onClick={() => drawerbutton()}>
              <MenuIcon />
            </IconButton>

           {/* slide Right side */}
            <Drawer
              anchor="right"
              open={openButton}
              onClose={() => setOpenButton(false)}
            >
              <Box
                sx={{
                  // mt:5,
                  width:100,
                  height: "100%",
                  p: 3,
                  backgroundColor: "#121212",
                  color: "#fff",
                }}
              >
                <Typography variant="h6" mb={3}>
                  Welcome
                </Typography>

                <Button
                  size="small"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  onClick={()=>navigate('/login')}
                  style={{color:loc.pathname==='/Login'? 'blue':'white'}}
                >
                  Login
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  onClick={()=>navigate('/registration')}
                  style={{color:loc.pathname==='/registration'? 'blue':'white'}}
                >
                  Sign Up
                </Button>

                <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={()=>navigate("/Logoutpage")}
                sx={{mt:2}}
                >
                  Logout
                </Button>
              </Box>
            </Drawer>
            
            {/* ----------------------------- */}
          </Box>
        </Box>
      </>

    )
}

export default NavBar;