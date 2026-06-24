import { TextField,Container,Paper } from '@mui/material';
import { alignItems, borderRadius, Box, fontWeight, textTransform} from '@mui/material';
import Button from "@mui/material/Button";
import React, {useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
const  Propertystatus = ()=> {

    const [error, setError] = useState({});
    const[loading,setLoading] = useState(false);

    const [status, setStatus] = useState({
        property_statusname :""
    });

    // update form
    const typeupdate =(e)=>{
        e.preventDefault();

       setStatus({
        ...status,
        [e.target.name]:e.target.value
       })
    }

    // validate form
    const validateFormData = () =>{
        const newError = {};

        if(!status.property_statusname.trim()) newError.property_typename = "Name is required ";
    
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
            const response = await axios.post(`http://127.0.0.1:8000/api/status/`,
                {
                    property_statusname:status.property_statusname
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"application/json"
                    }
                }
            )
            toast.success("Property type added successfully");
            setStatus({
                property_statusname:""
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
            >
                <form onSubmit={Protypesubmit}
                style={{
                    display:"flex",
                    gap:5,
                    alignItems:"center",
                }}
                >
                    
                    <TextField 
                    type="text"
                    name="Pending"
                    label="Property Status" 
                    fullWidth
                    variant="outlined"
                    required
                    value={status.property_statusname}
                    onChange={typeupdate}
                    size='small'
                    /> 

                    <Button type="submit" varient="contained"
                    sx={{
                        px:2,   
                        py:1,
                        borderRadius:2,
                        fontWeight:"bold",
                        textTransform:"none",
                        // background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                        // boxShadow: 0,
                        // "&:hover": {
                        // background: "linear-gradient(45deg, #1565c0, #1e88e5)",
                        // transform: "translateY(-2px)",
                        // },
                    }}
                    >
                        Submit</Button>
                </form>
            </Paper>
        </Container>
    </>
  )
}

export default Propertystatus;