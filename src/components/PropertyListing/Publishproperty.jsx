import {Box,Container, Stack,Paper, TextField, Typography ,MenuItem} from '@mui/material';
import React, {useState, useEffect } from 'react'
import Button from "@mui/material/Button";
import { toast } from 'react-toastify';
import axios from 'axios';
const  Publishprop = ()=> {
    const [error, setError] = useState({});
    const[loading,setLoading] = useState(false);
    const [location, setLocation] = useState([]);
    const [propertyType, setPropertyType] = useState([]);
    const [status, setStatus] = useState([]);
    const [image, setImage] = useState([]);


    const [data, setData] = useState({
        businessname : "",
        description:"",
        price:"",
        location_id: "",
        propertytype_id: "",
        status_id: "",
        images: []
    });

    // fetch relational data
    useEffect(() => {
        setLoading(true);
        const fetchdata = async (id) =>{
            try{
                const locationdata = await axios.get(`https://web-production-2b5327.up.railway.app/api/location/`)
                setLocation(locationdata.data.data)
                
                const propertytypedata = await axios.get(`https://web-production-2b5327.up.railway.app/api/type/`)
                setPropertyType(propertytypedata.data.data)
                const statusdata = await axios.get(`https://web-production-2b5327.up.railway.app/api/status/`)
                setStatus(statusdata.data.data)
                const imagedata = await axios.get(`https://web-production-2b5327.up.railway.app/api/images/`)
                setImage(imagedata.data.data)
            }catch(e){
                console.log(e);
                setError(e.message);
            }finally{
                setLoading(false);
            }
        }
        fetchdata();
    },[]);

    console.log("FORM DATA:", data);
    console.log("JSON:", JSON.stringify(data, null, 2));

    // update form
   const typeupdate = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    console.log("name =", name);
    console.log("value =", value);

    setData((prev) => ({
        ...prev,
        [name]: value
    }));
    }
    // validate form
    const validateFormData = () =>{
        const newError = {};

        if(!data.businessname.trim()) newError.businessname = "Name is required ";
        if(!data.description.trim())newError.description = "Name is required ";
        if(!data.price.trim()) newError.price = "Name is required ";
        if(!data.location_id) newError.location = "Name is required ";
        if(!data.propertytype_id) newError.propertytype = "Name is required ";
        if(!data.status_id) newError.status = "Name is required ";
        if(!data.images.length) newError.images = "At least one image is required ";
    
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
            const response = await axios.post(`https://web-production-2b5327.up.railway.app/api/business/`,
                {
                    businessname:data.businessname,
                    description:data.description,
                    price:data.price,
                    location_id:data.location_id,
                    propertytype_id:data.propertytype_id,
                    status_id:data.status_id,
                    images:data.images
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
                businessname : "",
                description:"",
                price:"",
                location_id:"",
                propertytype_id:"",
                status_id:"",
                images:[]
            })
        }catch(error){
            console.log("error geting contact details from backend",error);
            const mes =
                error?.response?.data?.status  ||
                error?.response.data?.message ||
                error?.response?.data ||
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
                            Add Property
                        </Typography>

                        <Stack spacing={2} mb={2}>
                            <TextField 
                            type="text"
                            name="businessname"
                            label="businessname" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.businessname}
                            onChange={typeupdate}
                            error={!!error.businessname}
                            helperText={error.businessname}
                            size='small'
                            />

                            <TextField 
                            type="description"
                            name="description"
                            label="description" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.description}
                            onChange={typeupdate}
                            error={!!error.description}
                            helperText={error.description}
                            size='small'
                            />

                            <TextField 
                            type="number"
                            name="price"
                            label="Price" 
                            inputProps={{
                                step: "0.01"
                            }}
                            fullWidth
                            variant="outlined"
                            required
                            value={data.price}
                            onChange={typeupdate}
                            error={!!error.price}
                            helperText={error.price}
                            size='small'
                            />

                            <TextField 
                            select
                            name="location_id"
                            label="Location" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.location_id}
                            onChange={typeupdate}
                            error={!!error.location_id}
                            helperText={error.location_id}
                            size='small'
                            // onChange={(e) => setLocation(e.target.value)}
                            >
                            {
                                location.map((loc)=>{
                                    return(
                                        <MenuItem key={loc.id} value={loc.id}>{loc?.city} {loc?.state}</MenuItem>
                                    )})
                            }
                            </TextField>

                            <TextField 
                            select
                            name="propertytype_id"
                            label="propertytype" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.propertytype_id}
                            onChange={typeupdate}
                            error={!!error.propertytype_id}
                            helperText={error.propertytype_id}
                            size='small'

                            >
                            {
                                propertyType.map((item)=>{
                                    return(
                                        <MenuItem key={item.id} value={item.id}>{item?.property_typename}</MenuItem>
                                    )
                                })
                            }
                            </TextField>

                            <TextField 
                            select
                            name="status_id"
                            label="status" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.status_id}
                            onChange={typeupdate}
                            error={!!error.status_id}
                            helperText={error.status_id}
                            size='small'
                            >
                            {
                                status.map((item)=>{
                                    return(
                                        <MenuItem key={item.id} value={item.id}>{item?.property_statusname}</MenuItem>
                                    )
                                })
                            }
                            </TextField>

                            <TextField 
                            select
                            name="images"
                            label="Photo" 
                            fullWidth
                            variant="outlined"
                            required
                            value={data.images}
                            onChange={typeupdate}
                            error={!!error.images}
                            helperText={error.images}
                            size='small'

                            SelectProps={{
                                multiple: true
                            }}
                            >
                                {
                                    image.map((item)=>{
                                        return(
                                            <MenuItem key={item.id} value={item.id}>{item.image}</MenuItem>
                                        )
                                    })
                                }
                            </TextField>

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
                                >Publish Your Property</Button>
                            </Box>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </Box>
    </>
  )
}

export default Publishprop;