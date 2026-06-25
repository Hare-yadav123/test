// src/components/HeroSection.jsx
import React,{useRef,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Typography,
  Button,
  Container,
  Grid,
  Autocomplete, 
  TextField,
  Tabs,
  Tab,
  MenuItem,
  Paper,
  Menu,
  ListItemButton,
  List,
  Popper
}
from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { KeyboardArrowDown } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const images = [
  "https://web-production-2b5327.up.railway.app/static/property/images/plot4.png",
  "https://web-production-2b5327.up.railway.app/static/property/images/plot5.png",
]

const Heropage = () => {
  const [city,setCity] = useState();
  const cities = ['Pune','Mumbai','Delahi','Patna','Hydrabad','Kolkata','Banglore','Ranchi','Noida',];
  const ref = useRef();
  const [value, setValue] = React.useState("BUY")
  const [index,setIndex] = useState(0);
  const [options,setOption] = useState([]);
  const [loading,setLoading] = useState(false);
  const [textLoading, setTextLoading] = useState();
  const [onInputChange,setOnInputChange] = useState();
  const [noOptionText,setNoOptionText] = useState();
  const [anchorEl,setAnchorE1] = useState(null);
  const navigati = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error,setError] = useState({});
  const [query,setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex((prev)=>(prev + 1)%images.length);
    },10000);
    return ()=>clearInterval(timer);
  },[]);

  // search button --------------------------------
  const handleSearch = async(e)=>{
    try{
      const response = await axios.get(`https://web-production-2b5327.up.railway.app/api/search/?q=${query}`);
      setData(response.data);
    }catch(e){
      setError(e.message);
    }
    finally{
      setLoading(false);
    }
  }
  
  // search suggestions ----------------------------------
  const buildSuggestions = (data, query) => {
    if (!Array.isArray(data)) return [];
    if (!query) return [];

    const q = query.toLowerCase();
    const isNumber = !isNaN(query); // 🔥 check number

    const exactMatch = [];
    const partialMatch = [];
    const others = [];

    data.forEach((item) => {
      const city = item.city?.toLowerCase() || "";
      const price = Number(item.price); // assume price field hai

      const suggestion = {
        type: 'property',
        label: item.businessname,
        sub: `${item.city}, ${item.state} - ₹${item.price}`,
        raw: item
      };

      // 🔥 PRICE LOGIC
      if (isNumber) {
        if (price === Number(query)) {
          exactMatch.push(suggestion);
        } else if (price <= Number(query)) {
          partialMatch.push(suggestion);
        } else {
          others.push(suggestion);
        }
      }

      // 🔥 CITY LOGIC
      else {
        if (city === q) {
          exactMatch.push(suggestion);
        } else if (city.includes(q)) {
          partialMatch.push(suggestion);
        } else {
          others.push(suggestion);
        }
      }
    });

    return [
      {
        type: 'search',
        label: `Search for ${query}`,
      },
      ...exactMatch,
      ...partialMatch,
      ...others
    ];
  };
  
  // --------****************
  const CustomPopper = (props) => (
    <Popper
      {...props}
      placement="bottom-start"
      modifiers={[
        {
          name: "flip",
          enabled: false, // 🚀 prevents going upward
        },
        {
          name: "preventOverflow",
          enabled: true,
        },
      ]}
    />
  );

  return (
    <Box
      sx={{
        width:"100%",
        minHeight:"85vh",                                     // slightly less than full screen
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${images[index]})`,
        backgroundColor:"#fff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        transition:"transform 1s ease",
        zIndex:1,
        overflowY:"hidden",
        "&:hover":{
          transform:"scale(1.0001)"
        }
      }}
    >
      
      <Grid container alignItems="center"
        sx={{
          position: "relative",
          zIndex: 1,
          inset:0,
          textAlign: "center",
          p:4,    
          maxWidth:{xs:"600px",sm:"900px",md:"900px",lg:"1200px"}
        }}
      >
        <Grid item xs={12} md={6}>
         <Typography variant="h3" sx={{ mb:2, fontWeight:300 }}>
            Find Your DreamHomes
          </Typography>

          <Box 
          sx={{
            position:"relative",
            height:40,
            background:"linear-gradient(180deg, #2ecc70ca, #2ecc70bc)",
            overflow:"hidden",
            padding:"10px 24px",
            color:"#fff",
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            overflow:"hidden",
            // boxShadow:"inset 0 0 12px rgba(0,0,0,0.15)",
            // backdropFilter:"blur(6px)",
          }}
          >
            <Tabs  
            value={value}
            onChange={(e,newValue)=>setValue(newValue)}
            textColor="inherit"
            TabIndicatorProps={{
              style:{
                backgroundColor:"#fff",
                maxHeight:"3px",
                borderRadius:"50%"
              }
            }}
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "12px",
                minWidth: 50,
                minHeight:36,
                paddingTop:0,
                paddingBottom:1,
                gap:5,
              },
            }}
            >
              <Tab label="BUY" value="BUY" onClick={()=>navigati('/registration')} />
              <Tab label="RENT" value="RENT" />
              <Tab label="COMMERCIAL" value="COMMERCIAL" />
              <Tab label="PG/CO-LIVING" value="PG" />
              <Tab label="PLOTS" value="PLOTS" />
            </Tabs>
          </Box>

          <Paper elevation={0}
          sx={{
            position:"relative",
            width: "100%",
            // maxWidth: 1000,
            borderRadius:open? "24px 24px 24px 0" : "24px",
            overflow: "visible",
            height:50,
            display:"flex",
            alignItems:"center",
            background:"rgba(255, 255, 255, 1)",
            backdropFilter:"blur(0px)",
            border:"1px solid rgba(255, 255, 255, 1)",
            textAlign:"center",
            mt:-2.3,
            zIndex:1300,
          }}
          >
            <Box sx={{width:"100%", display:"flex",alignItems:"center",gap:1.5}}>
              {/* <Typography variant="h6" sx={{mt:4,mb:4,fontWeight:400,color:"#f5f5f5"}}>
              Explore the best properties in your city with ease.
              </Typography> */}

              <Box 
              ref={ref}
              onClick={()=>setOpen(!open)}
              sx={{
                position:'relative',
                // width:120,
                padding:"10px 24px",
                border:"1 px solid white",
                borderRadius:"24px",
                background:"#fff",
                cursor:"pointer",
             
              }}
              >
              {city || "City"} 
               <KeyboardArrowDown 
               sx={{
                position:"absolute",
                mt:0,
                ml:2,
                color:"rgba(0,0,0,0.4)",
                transform:open ? "rotate(180deg)" :"rotate(0deg)",
               }}
               />
              </Box>

              <Popper 
              open={open}
              anchorEl={ref.current}
              placement="bottom-start"
              modifiers={[
                {name :"flip" , enabled:false},
                {name:"offset",options:{offset:[0,4.5]}},
              ]}
              sx={{
                "& . MuiOutlinedInput-root":{
                  borderRadius:open ? "24px 24px 0 0":"50px"
                }
              }}
              >
                <List sx={{background:"#fff",
                  width:120,height:200,
                  borderRadius:0,
                  overflowY:"auto",
                  }}>
                  {cities.map((c)=>(
                    <ListItemButton
                    key={c.id}
                    onClick={()=>(
                      setCity(c),
                      setOpen(false)
                    )}
                    sx={{
                      justifyContent:"flex-start",
                      fontWeight:400,
                      fontSize:"15px",
                      "&:hover":{
                        color:"#fff",
                        backgroundColor:"blue"
                      }
                    }}
                    >
                      {c}
                    </ListItemButton>
                  ))}
                </List>
              </Popper>   

              {/* search bar */}
              <Autocomplete 
                PopperComponent={CustomPopper}
                slotProps={{
                  paper: {
                    sx: {
                      zIndex: 1100,
                      boxShadow: 3,
                      backgroundColor: "#fff",
                      borderRadius: "10px"
                    }
                  }
                }}

              freeSolo
              fullWidth
              inputValue={query}
              options={buildSuggestions(data,query)}  //{options} //{cities || []}
              onInputChange={(event,value)=>setQuery(value)}
              size="small"
              loading={loading}
              disablePortal={false}          // stays attached to search bar while scrolling
              getOptionLabel={(option)=>option.lable || ""}
              filterOptions={(x)=>x}
              // onChange={(e)=>setQuery(e.target.value)}
              
              renderOption={(props,option)=>(
                <li {...props}>
                  <Box sx={{display:"flex",gap:1.5,alignItems:"center"}}>

                    {/* icons */}
                    <span>
                      {option.type === "search" && "🔍"}
                      {option.type === "property" && "🏠"}
                      {option.type === "location" && "📍"}
                      {option.type === "price" && "₹"}
                    </span>

                    {/* text */}
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>
                        {option.label }
                      </Box>
                      
                      {option.sub && (
                        <Box sx={{ fontSize: "12px", color: "#070707" }}>
                          {option.sub}
                        </Box>
                      )}
                    </Box>

                  </Box>
                </li>
              )}

              onChange={(event,value)=>{
                if(!value) return;
                
                if(value.type==='property'){
                  console.log("Go to property",value.raw.id);
                }

                if(value.type==='location'){
                  setQuery(value.lable);
                }

                if(value.type==='search'){
                  console.log('search',query)
                }
              }}

              renderInput={(props)=>(
                <TextField {...props} placeholder="search city or locality or project"  
                size="small"
                sx={{
                  width:600,
                  "& .MuiInputBase-input":{
                    ml:5
                  },
                  "& .MuiOutlinedInput-root":{
                    borderRadius:open ? "24px 24px 0 0" : "50px",
                    "& fieldset":{border:"none"},
                    "&:hover fieldset":{border:"none"},
                    "& .Mui-focused fieldset":{border:"none"}
                  }
                }}
                /> 
              )}
              />

              <Button onClick={handleSearch}
              variant="contained"
              // startIcon={<SearchIcon />}
              sx={{
                width:"20%",
                height:50,
                right:0,
                position:"absolute",
                top:"42.5%",
                transform:"translateY(-50%)",
                color:"#fff",
                background:"#000000e0",
                textTransform:"none",
                fontWeight:600,
                p:0,
                mt:0.5,
                borderRadius:"24px",
                textAlign:"center",
                // boxShadow:"0 12px 25px rgba(0,0,0,0.15)",
                "&:hover":{
                  background:"#000"
                },
              }}
              >
              Search</Button>
          </Box>
          </Paper>
       </Grid>
      </Grid>
    </Box>
  );
};

export default Heropage;
