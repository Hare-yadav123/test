import { TextField } from '@mui/material';
import { Box,Container,Paper } from '@mui/material';
import React, {useState, useEffect } from 'react'
import Button from "@mui/material/Button";
import { toast } from 'react-toastify';
import axios from 'axios';
const  PropertyImage = ()=> {

    const [error, setError] = useState({});
    const[loading,setLoading] = useState(false);

    const [data, setData] = useState({
        image : null
    });

    // update form
    const typeupdate =(e)=>{

        console.log(e.target.files[0]);
        setData({
            ...data,
            [e.target.name]:e.target.files[0]
        })
    }

    // validate form
    const validateImageData = () =>{
        const newError = {};

        if(!data.image) newError.image = "image is required ";
        setError(newError);
        return Object.keys(newError).length === 0;
    }

    // submit form
    const Protypesubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
         const isValid = validateImageData();

         if(!isValid){
            toast.error("Please fill all requred fields");
            console.log("validation failed");
            return;
         }

        try{
            const token = localStorage.getItem("access_token")
            console.log("Token:",token)
            const response = await axios.post(`http://127.0.0.1:8000/api/images/`,
                {
                    image:data.image
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"multipart/form-data"
                    }
                }
            )
            toast.success("Property type added successfully");
            setData({
                image:null
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
        <Container
        sx={{
            mt:2,
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Paper
            elevation={0}
            sx={{
                p:2,
                width:"100%",
                maxWidth:285,
                height:"50%",
                maxHeight:50
                
                
            }}
            >
                <form onSubmit={Protypesubmit}
                style={{
                    display:"flex",
                    gap:5,
                    alignItems:"center"
                }}
                >
                    
                    <TextField 
                    type="file"
                    name="image"
                    variant="outlined"
                    required
                    fullWidth
                    value={data.image}
                    onChange={typeupdate}
                    size='small'
                    />

                    <Button type="submit"
                    sx={{
                    px:2,   
                    py:1,
                    borderRadius:2,
                    fontWeight:"bold",
                    textTransform:"none",
                    }}
                    >Submit</Button>
                </form>
            </Paper>
        </Container>
    </>
  )
}

export default PropertyImage;