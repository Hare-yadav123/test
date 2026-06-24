
import { Card, CardContent, TextField, Button, Stack, Typography, Box, Avatar,IconButton } from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import { useParams } from "react-router-dom";

export default function ContactSeller() {
 
  const [form,setForm] = useState({
    name:'',
    phone:'',
    email:'',
    message :'',
  });
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState({});
  const [agent,setAgent] = useState(null);
  const {id} = useParams();
  // console.log('id:',id)

  // update form state on input change and also clear error if any
  const haldleUpdateForm = (e) =>{
    const  {name,value} = e.target;
    setForm(prev=>({...prev,[name]:value}))

    if(error[name]) setError(prev=>({...prev,[name]:""}))
    
  };

  // validate form and sumit data tp backend to get contact details
  const validateFormData = () =>{
    const newError = {};

    if(!form.name.trim()) newError.name = "Name is required ";
    if(!form.phone.trim()) newError.phone = "Phone is required";
    if(!form.email) newError.email = "Email is required";
    setError(newError);
    return Object.keys(newError).length === 0;
  }

  // submit form data 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log("before validation ")
    // console.log("Property ID:", id); 

    const isValid  = validateFormData();

    if(!isValid){
      toast.error("Please fill all requred fields");
      console.log("validation failed");
      return;
    }

    setLoading(true);
    try {
      //make api call to get contact details
      const token = localStorage.getItem("access_token")
      // console.log("Token:",token)
      const response = await axios.post("http://127.0.0.1:8000/api/contact/",
        {
          property : id,
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message
        },
        {
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":"application/json"
          }
        }
      );
      toast.success("Contact details sent to seller  email successfully");
      setForm({
        name:"",
        phone:"",
        email:"",
        message:""
      })
    }catch (error){
      console.error("Error getting contact details:",error);
      const mes =
      error?.response?.data?.error ||
      error?.response?.data?.detail ||
      JSON.stringify(error?.response?.data) ||
      "Failed to get Contact details";

      toast.error(mes);
    }
      finally{
        setLoading(false);
      };
  }

  // get agent details
  useEffect(()=>{
    if(!id) return;
    
    axios.get(`http://127.0.0.1:8000/api/agent/${id}/`,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("access_token")}`
        }
      }
    )
    .then(res=>{
      console.log(id)
      console.log(res.data.data);
      setAgent(res.data.data)})
    .catch((e)=>{
      console.log(e);
    })
  },[id]);

  return (
    <Card
    elevation={1}
    sx={{
      mt:4,
      height:{xs:200,md:500}
    }}>

      <CardContent>
        <Box
        sx={{
          background:"#fff8e1",
          border:"1px solid #fbc02d",
          borderRadius:5,
          mb:2,
          p:1
        }}
        >
          <Typography fontSize="12px">
          ⚡ You have a fine taste. This property is great!
          </Typography>
        </Box>

        <Typography variant="h6" mb={1}>
          Contact Seller
        </Typography>
        <Box 
        sx={{
          display:'flex',
          alignItems:"center",
          mb:2,
          gap:3
        }}
        >
        <Avatar
          src={agent?.profileimage ? `http://127.0.0.1:8000${agent.profileimage}` : ""}
          alt="Agent Image"
          sx={{bgcolor: "#4caf50"}}
        >
          {!id?.profileimage && "RS"}
        </Avatar>
          <Box>
            <Typography fontWeight="bold" fontSize="14px">
              {agent?.user || "Agent Contact"}
            </Typography>

            <Typography fontSize="12px" color="grey">
              Developer
            </Typography>

            <Typography fontSize="13px">
              {agent?.contactnumber  || "+91xxxxxxxxx"}
            </Typography>
          </Box>
        </Box>
        <form  onSubmit={handleSubmit}>
         <Stack spacing={0}>
            <TextField

              InputLabelProps={
                {
                  sx:{
                    fontWeight:200,
                    color:"gray",
                    fontSize:"12px"
                  }
                }
              }
                name="name"
                label="Name" 
                variant="standard"
                fullWidth
                value={form.name}
                onChange={haldleUpdateForm}
                error={!!error?.name}
                helperText=" "
                size="small"
              />

            <TextField 
            InputLabelProps={{
              sx:{
                fontWeight:200,
                color:"gray",
                fontSize:"12px"
              }
            }}
            name="phone"
            label="Phone"
            variant= "standard"
            fullWidth
            value={form.phone}
            onChange={haldleUpdateForm}
            error={!!error?.phone}
            helperText=" "
            size="small"
            />

            <TextField
            InputLabelProps={{
              sx:{
                fontWeight:200,
                color:"gray",
                fontSize:"12px"
              }
            }}
            name="email"
            label="Email"
            variant = "standard"
            fullWidth 
            value={form.email}
            onChange={haldleUpdateForm}
            error={!!error?.email}
            helperText=" "
            size="small"
            />

            <TextField 
            InputLabelProps={{
              sx:{
                fontWeight:200,
                color:"gray",
                fontSize:"12px"
              }
            }}
            name="message"
            label="Message"
            fullWidth
            value={form.message}
            onChange={haldleUpdateForm}
            error={!!error?.message}
            helperText=" "
            size="small"
            />

            <Button variant="contained"
            type="submit"
            disabled={loading}
            sx={{
              backgroundColor:"#1976d2",
              textTransform:"none",
              "&hover":{
                backgroundColor:"#1565c0"
              } 
            }}
            >
              Get Contact Details
            </Button>
          </Stack>
        </form>
       {/* ----------------- */}
      </CardContent>
    </Card>
  );
}