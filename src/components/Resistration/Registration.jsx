import React ,{useEffect,useState} from 'react';
import axios from "axios";
import './Registration.css';
import MobileInput from './MobileInput.jsx';
import Propertydetails from '../PropertyListing/Propertylisting.jsx';

import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Paper,
  useTheme,
  FormControl,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  FormLabel,
  Checkbox,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
  }  from "@mui/material";
import PhoneInput  from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {toast} from "react-toastify";

export const Registration = () => {
  const items = [
    "Post one Single Property for FREE",
    "Set property alerts",
    "Get access to buyers",
    "Showcase property for Sale / Rent",
    "Track reponses online",
    "Get instant queries over phone, Email and SMS",
    "Add detailed property information & multiple photos per listing",
    "Performance in search & Track responses & views online",
    ];
  const [userData,setUserData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo  : "" 
  })
  const [open,setOpen] = useState(true);
  const [agree,setAgree] = useState(false);
  const [loading,setLoding] = useState(false);
  const [errorMessage ,setErrorMessage] = useState();
  const [successMessage ,setSuccessMessage] = useState();
  const [error ,setError] = useState({});
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablate = useMediaQuery(theme.breakpoints.between("sm","md"));

  const handleChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
    if(error[e.target.name]) setError(prev =>({...prev,[e.target.name]:e.target.value}));
    setErrorMessage("");
    setSuccessMessage("");
    return;
  }

  //field validation
  const validateFormfield = () =>{
    const newError = {};

    if(!userData.name.trim()) newError.name="Name is required!";
    if(!userData.email) newError.email = "Email is required!";
    if(!userData.password) newError.password = "password is required!";
    if(!userData.mobileNo) newError.mobileNo = 'Mobile number is required!';
    if(!agree) newError.agree='please accept term';

    setError(newError);
    return Object.keys(newError).length===0;
  };

    //submit data
  const  handleSubmit= async(e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    console.log('befor validation');

    if(!validateFormfield()){
      console.log("validation failed");
      return;
    }
    
    setLoding(true);
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/signup/",userData,
        { headers :{"Content-Type":"application/json"}}
      );

      if(response.data.jwt){
        localStorage.setItem("token",response.data.jwt)
        setSuccessMessage("your resistration is successfull");
        setUserData({
          name: "",
          email: "",
          password: "",
          mobileNo  : "" 
        });
      }
      toast.success("Welcome! Account created successfully 🚀");
      // toast.error("Email already exists");
      // toast.info("Redirecting to login...");
      navigate("/login")
    }catch(error){
      toast.error(error.response?.data?.error || error.message || "Registration failed!. Try again..." );
    }finally{
      setLoding(false);
    }
  }

  return (
    <Box
    sx={{
      minHeight:"100vh",
      width:"100%",
      backgroundImage:`url(http://127.0.0.1:8000/static/property/images/reg2.png)`,
      backgroundColor:"#fff",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      zIndex:-1
    }}
    >
      <Grid container minHeight="100vh" width="100%" position="relative" overflow="hidden" spacing={0}>

        {/* open button */}
        {
          !open &&(
            <IconButton
              onClick={()=>setOpen(true)}
              sx={{
                position:"fixed",
                left:0,
                top:"50%",
                transform:"translateY(-50%)",
                backgroundColor:"#000",
                color:"#fff",
                boxShadow:2,
                zIndex:20
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )
        } 
          {/* close button left  */}
        <Grid
        item
        xs={12}
        md={6}
        sx={{
          position:"relative",
          maxWidth:"100%",
          top:0,
          left:0,
          display:"flex",
          color:"#ffff",
          background:"linear-gradient(180deg,#2b2b2b,#000)",
          p:2,
          alignItems:"center",
          transform:open ? "translateX(0)" : "translateX(-100%)",
          transition:"transform 0.4s ease-in-out",
          zIndex:1,
          mt:6,
          mb:5,
          minHeight:"100vh",
          width:"30%",
          backgroundImage:`url(http://127.0.0.1:8000/static/property/images/reg.png)`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
        >
          <Box width="100%" overflow="hidden" height="100vh">
            <Typography
            sx={{
              mb:1,
              mt:6,
              fontSize:"25px",
              fontWeight:300,
              color:"white",
              lineHeight:1.6,
              textShadow:"2px 6px rgba(0,0,0,0.2)",
              textAlign:"center"
            }}
            >Things you Can Do with DreamHomes Account</Typography>
            <List
            sx={{
              fontWeight:100,
              color:"rgba(255, 255, 255, 0.4)",
              fontSize:"0.1rem",  
              gap:1 
            }}
            >
              {items.map((key,i)=>(
                <ListItem key={i} alignItems='flex-start'>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ fontWeight:"0.1rem",color:"rgba(255,255,255,0.3)",}} />
                </ListItemIcon>
                <ListItemText primary={key} />
              </ListItem>
              ))}
            </List>
                {/* left side arrow */}
            <IconButton
            onClick={()=>setOpen(false)}
              sx={{
                position:"fixed",
                right:-20,
                top:"50%",
                transform:"translateY(-50%)",
                boxShadow:2,
                backgroundColor:"#000",
                color:"#fff",
                boxShadow:2
              }}
            >
              {/* <ChevronLeftIcon /> */}
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton> 
          </Box>
        </Grid>

          {/* right side registration form */}
        <Grid item xs={12} md={6}
        sx={{
          display:"flex",
          flex:1,
          alignItems:"center",
          justifyContent:"center",
          width: "calc(100% + 200px)",
          transform: open ? "translateX(0)" : "translateX(-200px)",
          transition: "transform 0.4s ease-in-out"
        }}
        >
          <Container maxWidth="sm">
            <Paper className='form' elevation={0}  sx={{mt:10,mb:5,p:4,borderRadius:2,alignItems:"center",border:"0.01px solid rgba(0,0,0,0.2)"}}>
              <form onSubmit={handleSubmit} >
                <Typography variant='h5' mb={4} ml={16}
                sx={{
                  fontWeight:300,
                  color:"rgba(0,0,0,0.8)",
                  fontSize:"1rem",
                  mt:5
                }}
                >
                  Sign-Up
                </Typography>

                <FormControl>
                  <FormLabel variant='subtitle2' mb={1} defaultValue="Buyer"
                  sx={{
                    fontWeight:300,
                    color:"rgba(0,0,0,0.45)",
                    fontSize:"0.9rem"
                  }}
                  >
                    I am
                  </FormLabel>

                  <RadioGroup row size="small"
                  sx={{
                    "& .MuiFormControlLabel-label":{
                      fontWeight:300,
                      color:"rgba(0,0,0,0.45)",
                      fontSize:"0.9rem"
                    }
                  }}
                  >
                    <FormControlLabel value="Buyer" control={<Radio color='default' sx={{color:"#F8232A","& .Mui-checked":{color:"#F8232A"},padding:0,"& .MuiSvgIcon-root":{color:"rgba(0,0,0,0.45)",fontSize:18,fontWeight:300}}} />} label="Buyer/Owner/Tenant">Buyer</FormControlLabel>
                    <FormControlLabel value="Seller" control={<Radio sx={{padding:0,color:"#F8232A","& .Mui-checked":{color:"#F8232A"},"& .MuiSvgIcon-root":{color:"rgba(0,0,0,0.45)",fontSize:18}}} />} label="Seller">Seller</FormControlLabel>
                    <FormControlLabel value="Agent" control={<Radio sx={{padding:0,color:"#F8232A","& .Mui-checked":{color:"#F8232A"},"& .MuiSvgIcon-root":{color:"rgba(0,0,0,0.45)",fontSize:18}}} />} label="Agent">Agent</FormControlLabel>
                  </RadioGroup>

                </FormControl>
                <Box mt={2} >
                  <TextField 
                 InputLabelProps={{
                  sx:{
                    fontWeight:300,
                    color:"rgba(0,0,0,0.45)",
                    fontSize:"0.9rem",
                  }
                 }}
                  name="name"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  value={userData.name}
                  onChange={handleChange}
                  error={!!error.name}
                  helperText={error.name}
                  size="small"
                  />

                  <TextField 
                  InputLabelProps={{
                    sx:{
                      fontWeight:300,
                      color:"rgba(0,0,0,0.45)",
                      fontSize:"0.9rem"
                    }
                  }}
                  name="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  value={userData.email}
                  onChange={handleChange}
                  error={!!error.email}
                  helperText={error.email}
                  size="small"
                  sx={{
                    mt:2
                  }}
                  />

                  <TextField 
                  InputLabelProps={{
                    sx:{
                      fontWeight:300,
                      color:"rgba(0,0,0,0.45)",
                      fontSize:"0.9rem"
                    }
                  }}
                  name="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                  value={userData.password}
                  onChange={handleChange}
                  error={!!error.password}
                  helperText={!error.password}
                  size='small'
                  sx={{
                    mt:2
                  }}
                  />

                  <MobileInput 
                    value={userData.mobileNo}
                    onChange={(value) => {
                      const cleaned = value.replace(/\D/g, "").slice(-15);
                      setUserData((prev) => ({
                        ...prev,
                        mobileNo: cleaned,   // ✅ USE cleaned value
                      }));
                    }}
                    error={!!error.mobileNo}
                    helperText={error.mobileNo}
                    size="small"
                  />

                  <Typography
                  sx={{
                    mt:2,
                    fontSize:"12px",
                    color:"primary.dark"
                  }}
                  >
                  <FormControlLabel 
                  sx={{boxSizing:"10px"}}
                  control={<Checkbox 
                  checked={agree}
                  onChange={(e)=>setAgree(e.target.checked)}
                 size='small'
                  />}
                  />
                    I agree to DreamHome T&C, Privacy Policy & Cookie Policy
                  </Typography>

                  <Button
                  variant='contained'
                  fullWidth
                  type='submit'
                  disabled={loading}
                  sx={{
                    mt:5,
                    backgroundColor:"#FF1A1A",
                    height:40,
                    color:"#fff",
                    "&:hover":{
                      backgroundColor:"#cc0000"             //"#D8232A"
                    }
                  }}
                  > 
                    {/* {loading ? "please wait....":"sign up"} */}
                  Sign Up
                  </Button>
                </Box>

                <Box textAlign="center"
                sx={{
                  display:"flex",
                  mt:3,
                  justifyContent:"center",
                  alignItems:"center"
                }}
                >
                  <Typography variant='body2' color='text.secondry' >
                    Already Registerd?{" "}
                  </Typography>
                  <Button
                  variant='text'
                  color='primery'
                  onClick={()=>navigate('/login')}
                  sx={{textTransform:"none", color:"rgba(230, 0, 0, 1)",fontWeight:400,fontSize:"1rem",textDecoration:"underline","&:hover":{textDecoration:"underline"}}}
                  >
                    Login Now
                  </Button>
              </Box>

              {/* <Propertydetails /> */}
              </form>
              {/* jsx error handling */}
              {successMessage &&(
                  <Alert severity="success" sx={{mb:2}}>
                    {successMessage}
                  </Alert>
                )}
                {
                  errorMessage &&(
                    <Alert severity='error' sx={{mb:2}}>
                      {errorMessage}
                    </Alert>
                  )}
          </Paper>
        </Container>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Registration;