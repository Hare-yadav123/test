import React ,{useEffect,useState} from 'react';
import axios from "axios";
import MobileInput from '../Resistration/MobileInput.jsx';
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
  ListItemText,
  CircularProgress
  }  from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneInput  from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {toast} from "react-toastify";
import { Refresh, RttRounded } from '@mui/icons-material';
import  Googleicon from "./Googleicon.jsx"

export const Login = () => {
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
  const [role, setRole] = useState("Buyer");
  const [loginForm,setLoginForm] = useState({
    mobileNo:"",
    captcha:"",
    captcha_key:""
  });
  const [captchaGenerated, setCaptchaGenerated] = useState(false);
  const [captchaId,setCaptchaId] = useState(null);
  const [captchakey,setCaptchazKey]=useState(null);
  const [captchUrl,setCaptchaUrl] = useState("");
  const [open,setOpen] = useState(true);
  const [loading,setLoading] = useState(false);
  const [errorMessage ,setErrorMessage] = useState();
  const [successMessage ,setSuccessMessage] = useState();
  const [error ,setError] = useState({});
  const navigate = useNavigate();
  const theme = useTheme();

  const loadCaptcha = async()=>{
    console.log('refresh captch')

    if (loginForm.mobileNo.length !==10) {
    toast.error("Enter valid mobile number!");
    return;
  };

    try{
        const response = await axios.post(`https://web-production-2b5327.up.railway.app/api/lgi/`,{
          mobileNo:loginForm.mobileNo
        },{"headers":{"Content-Type":"application/json"}})

        console.log(response.data)
        setLoginForm((prev)=>({
          ...prev,
          captcha_key:response.data.captcha_key
        }));
        setCaptchazKey(response.data.captcha_key);
        
        setCaptchaUrl(`https://web-production-2b5327.up.railway.app/api/lgi/${response.data.captcha_key}/`);
      }catch(error){
        console.log("failed to catch captcha");
        if(error.response?.data?.mobileNo){
          toast.error(error.response.data.mobileNo?.[0]);
        }else if(error.response?.data?.captcha){
          toast.error(error.response.data.captcha?.[0]);
        }
        toast.error(error.response?.data?.mobileNo?.[0]   || "somthing is wrong")
    }
  };

  



  const handleChange = (e)=>{
    setLoginForm({...loginForm,[e.target.name]:e.target.value});
    if(error[e.target.name]) setError(prev =>({...prev,[e.target.name]:e.target.value}));
    setErrorMessage("");
    setSuccessMessage("");
    return;
  }

  //field validation
  const validateFormfield = () =>{
    const newError = {};

    if(!loginForm.mobileNo) newError.mobileNo = "Mobile number is required!";
    setError(newError);
    if(!loginForm.captcha) newError.captcha = "Enter valied captcha!"
    setError(newError);
    return Object.keys(newError).length===0;
  };

    //submit data
  const  handleSubmit = async(e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    console.log('befor validation');

    if(!validateFormfield()){
      console.log("validation failed");
      return;
    }
    
    setLoading(true);
    try{
      const response = await axios.post("https://web-production-2b5327.up.railway.app/api/cla/",
        {
          mobileNo:loginForm.mobileNo,
          captcha_key:captchakey,
          captcha:loginForm.captcha
        },
      { headers :{"Content-Type":"application/json"}}
      );
      console.log(response.data)
      
      // save JWT access token
      if(response.data.access_token){
        localStorage.setItem('access_token',response.data.access_token)
      }

      if(response.data.refresh_token){
        localStorage.setItem(`refresh_token`,response.data.refresh_token)
      }
      toast.success("Welcome! loged in  successfully 🚀");
      // clean login form after submitting
      setLoginForm({
        mobileNo:"",
        captcha_key:"",
        captcha:"",
      })
      setTimeout(()=>{navigate('/')},1000);
      
    }catch(error){
      const mes = error.response?.data?.error || "Request failed!. Try again..." 
      toast.error(mes)
      setLoading(false);
      console.log(error.response?.data);
      if(error.response?.data?.mobileNo){
        toast.error(error.response.data.mobileNo[0])
      }
      else if(error.response?.data?.captcha){
        toast.error(error.response.data.captcha[0])
      }
  
    }
  }

  return (
    <Box
    sx={{
      minHeight:"100vh",
      width:"100%",
      backgroundImage:`url(https://web-production-2b5327.up.railway.app/static/property/images/reg2.png)`,
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
                top:0,
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
          mt:6,
          mb:2,
          minHeight:"100vh",
          width:"30%",
          backgroundImage:`url(https://web-production-2b5327.up.railway.app/static/property/images/reg.png)`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          zIndex:1,
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
              fontWeight:50,
              color:"rgba(255, 255, 255, 0.4)",
              fontSize:2,   
              letterSpacing:"1px"
            }}
            >
              {items.map((key,i)=>(
                <ListItem key={i} alignItems='flex-start'>
                <ListItemIcon>
                  <CheckCircleIcon sx={{color:"rgba(255,255,255,0.3)"}}/>
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

          {/* rigtt side Login form */}
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
          <Container maxWidth="sm" >
            <Paper className='form' elevation={0}  sx={{mt:10,mb:5,p:4,borderRadius:2,alignItems:"center",border:"0.1px solid rgba(0,0,0,0.2)"}}>
              <form onSubmit={handleSubmit}>
                <Typography variant='h5' mb={4} ml={16}
                sx={{
                  fontWeight:400,
                  color:"rgba(0,0,0,0.8)",
                  fontSize:"1rem"
                }}
                >
                  Login
                </Typography>

                <FormControl>
                  <FormLabel variant='subtitle2' mb={1} defaultValue="Buyer"
                  sx={{
                    fontWeight:400,
                    color:"rgba(0,0,0,0.8)",
                    fontSize:"1rem"
                  }}
                  >
                    Are you
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
                    <FormControlLabel value="Buyer" control={<Radio />} label="Buyer/Owner"
                    sx={{
                      borderRadius:5
                    }}
                    >Buyer/Owner</FormControlLabel>
                    <FormControlLabel value="Seller" control={<Radio />} label="Agent/Builder">Agent/Builder</FormControlLabel>
                    
                  </RadioGroup>
                </FormControl>
                <Box>
                  <TextField 
                  InputLabelProps={{
                    sx:{
                      fontWeight:300,
                      color:"rgba(0,0,0,0.45)",
                      fontSize:"0.9rem",
                    }
                 }}
                  type='text'
                  fullWidth
                  variant="standard"
                  label="Mobile Number"  
                  name="mobileNo"                    // REQUIRED
                  value={loginForm.mobileNo}        //  REQUIRED
                  onChange={(e)=>setLoginForm(prev=>({...prev,mobileNo:e.target.value}))}         //  MUST pass event      
                  error={!!error.mobileNo}
                  helperText={error.mobileNo}
                  sx={{
                    mt:2
                  }}
                  />

                  <Box
                  sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:3,
                    mt:3
                  }}
                  >
                    {/* {captchUrl &&( */}
                      <Box 
                      component="img"
                      src={captchUrl}
                      alt='MND85M'
                      placeholder="HS6MP2"  
                      sx={{
                        position:"relative",
                        display:"inline-flex",
                        justifyContent:"center",
                        alignItems:"center",
                        height:80,
                        width:250,
                        mt:2,
                        border:"1px solid #ddd",
                        color:"rgba(0,0,0,0.2)",
                        borderRadius:"10px",
                        p:"5px",
                        py:1,
                        fontFamily:"monospace",
                        overflow:"hidden",
                      }}
                      />
                    {/* )} */}
                    
                    <IconButton onClick={loadCaptcha} sx={{mt:2}}>
                      <RefreshIcon sx={{fontSize:30,color:"rgba(0,0,0,0.45)",fontWeight:"0.45rem"}} />
                    </IconButton>

                    <Box sx={{ width: 130 }}>
                      <TextField 
                      type='text'
                      name="captcha"          // ✅ REQUIRED
                      // label="captcha"
                      placeholder='captcha'
                      value={loginForm.captcha}
                      onChange={(e)=>setLoginForm(prev=>({...prev,captcha:e.target.value}))}
                      error={!!error.captcha}
                      helperText={error.captcha}
                      size="small"
                      sx={{
                        mt:2,
                        textAlign:"center",

                        "& .MuiInputBase-input":{
                        padding:"13px 0px",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px"
                      }
                    }}
                      InputLabelProps={{
                      sx:{
                        fontWeight:300,
                        color:"rgba(0, 0, 0, 0.2)",
                        fontSize:"14px",
                        fontFamily:"monospace",
                        latterSpacing:"2px",
                        }
                      }}

                      inputProps={{
                        style: {
                          textAlign: "center",
                          fontWeight: 550,   // 🔥 important
                          fontSize: "18px",
                          letterSpacing: "3px"
                        }
                      }}
                      />
                    </Box>
                  </Box>

                  <Button
                  variant='contained'
                  fullWidth
                  type='submit'
                  disabled={loading}
                  sx={{
                    mt:5,
                    backgroundColor:"#FF1A1A",
                    color:"#fff",
                    height:"45px",
                    "&:hover":{
                      backgroundColor:"#F8232A"
                    }
                  }}
                  > 
                    {/* {loading ? "please wait....":"sign up"} */}
                  {loading ? <CircularProgress size={24} sx={{color:"success" }} /> : "Next"}
                  </Button>

                  {/* sign up with google */}
                 <Box sx={{
                  textAlign:"center",
                  justifyContent:'center'  
                 }}
                 href='https://accounts.google.co.in/'
                 target='_blank'
                 >
                  <Googleicon />
                 </Box>
                </Box>

                <Box mt={2} 
                sx={{
                  display:"flex",
                  mt:3,
                  justifyContent:"center",
                  alignItems:"center",
                  color:"#ffffff4f"
                }}
                >
                  <Typography variant='body5' color='black'>
                    New DreamHomes User?{" "}
                  </Typography>
                  <Button
                  variant='text'
                  color='primery'
                  onClick={()=>navigate('/Registration')}
                  sx={{
                    textTransform:"none",
                    color:"rgba(230, 0, 0, 1)",
                    fontWeight:400,fontSize:"1rem",
                    textDecoration:"underline",
                    "&:hover":{textDecoration:"underline"}}}
                  >
                    Sign Up
                  </Button>
              </Box>
              </form>

              

              {/* <Box
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                height:"80vh",
              }}
              >
                {loading && <CircularProgress />}

                {!loading && !error && (<Typography align='center' color='success' variant='h5'>You have been logged in successfully.</Typography>)}
                {!loading && error && (<Typography align='center' color='error' variant='h5'>An error occurred during login: {error}</Typography>)}
              </Box> */}
          </Paper>
        </Container>
        </Grid>
      </Grid>
    </Box>

  )
}


export default Login;