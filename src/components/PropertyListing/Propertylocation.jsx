import {Box,Container, Stack,Paper, TextField, Typography } from '@mui/material';
import React, {useState, useEffect } from 'react'
import Button from "@mui/material/Button";
import { toast } from 'react-toastify';
import axios from 'axios';
const  Propertytypes = ()=> {

    const [error, setError] = useState({});
    const[loading,setLoading] = useState(false);

    const [data, setData] = useState({
        city : "",
        state:"",
        country:"",
        pincode:"",
        latitude:"",
        longitude:"",
    });

    // update form
    const typeupdate =(e)=>{
        e.preventDefault();

       setData({
        ...data,
        [e.target.name]:e.target.value
       })
    }

    // validate form
    const validateFormData = () =>{
        const newError = {};

        if(!data.city.trim()) newError.city = "Name is required ";
        if(!data.state.trim())newError.state = "Name is required ";
        if(!data.country.trim()) newError.country = "Name is required ";
        if(!data.pincode.trim()) newError.pincode = "Name is required ";
        if(!data.latitude.trim()) newError.latitude = "Name is required ";
        if(!data.longitude.trim()) newError.longitude = "Name is required ";
    
        setError(newError);
        return Object.keys(newError).length === 0;
    }

    // submit form
    const Protypesubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
         const isValid = validateFormData();

         if(!isValid){
            toast.error("Please fill all requred fields");
            console.log("validation failed");
            return;
         }

        try{
            const token = localStorage.getItem("access_token")
            console.log("Token:",token)
            const response = await axios.post(`https://web-production-2b5327.up.railway.app/api/location/`,
                {
                    city:data.city,
                    state:data.state,
                    country:data.country,
                    pincode:data.pincode,
                    latitude:data.latitude,
                    longitude:data.longitude
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"application/json"
                    }
                }
            )
            toast.success("Property type added successfully");
            setData({
                city : "",
                state:"",
                country:"",
                pincode:"",
                latitude:"",
                longitude:""
            })
        }catch(error){
            console.log("error geting contact details from backend",error);
            const mes =
                error?.response?.data?.status  ||
                error?.response.data?.message ||
                error?.message ||
                JSON.stringify(error?.res?.data);
                console.log("STATUS:", error.response?.status);
                console.log("DATA:", error.response?.data);
                console.log("HEADERS:", error.response?.headers);
            setError(mes);
        }finally{
            setLoading(false);
        }
    }

    
  return (
    <>
        <Box
        sx={{
            mt:2,
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Container maxWidth="sm">
                <Paper
                elevation={0}
                sx={{
                    p:1,
                    mt:5,
                    borderRadius:2,
                    width:"50%",
                    mx:"auto",
                }}
                >
                    <form onSubmit={Protypesubmit}>
                        <Typography variant="h5" fontWeight="bold" mb={2}>
                            Property Location
                        </Typography>

                        <Stack spacing={2} mb={2}>
                            <TextField 
                            type="text"
                            name="city"
                            label="city" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.city}
                            onChange={typeupdate}
                            error={!!error.city}
                            helperText={error.city}
                            size='small'
                            />

                            <TextField 
                            type="text"
                            name="state"
                            label="state" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.state}
                            onChange={typeupdate}
                            error={!!error.state}
                            helperText={error.state}
                            size='small'
                            />

                            <TextField 
                            type="text"
                            name="country"
                            label="country" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.country}
                            onChange={typeupdate}
                            error={!!error.country}
                            helperText={error.country}
                            size='small'
                            />

                            <TextField 
                            type="text"
                            name="pincode"
                            label="pincode" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.pincode}
                            onChange={typeupdate}
                            error={!!error.pincode}
                            helperText={error.pincode}
                            size='small'
                            />

                            <TextField 
                            type="number"
                            name="latitude"
                            label="latitude" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.langitude}
                            onChange={typeupdate}
                            error={!!error.latitude}
                            helperText={error.latitude}
                            size='small'
                            />

                            <TextField 
                            type="number"
                            name="longitude"
                            label="longitude" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.longitude}
                            onChange={typeupdate}
                            error={!!error.longitude}
                            helperText={error.longitude}
                            size='small'
                            />

                            <Box
                            sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            }}
                            >
                                <Button type="submit"
                                sx={{
                                backgroundColor:"primary.main",
                                color:"white",
                                px:5,   
                                py:1,
                                borderRadius:2,
                                fontWeight:"bold",
                                textTransform:"none",
                                textAlign:"center"
                                }}
                                >Submit</Button>
                            </Box>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </Box>
    </>
  )
}

export default Propertytypes;