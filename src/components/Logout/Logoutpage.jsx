import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Box,
    CircularProgress
} from "@mui/material";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Refresh } from '@mui/icons-material';
import  "./logout.css";

export const Logout = () => {
    const [loading, setLoading] = useState(true);
    const [error,setError] =  useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const logoutUser = async () => {
            try {
                const refresh = localStorage.getItem("refresh");
                const token = localStorage.getItem("token");

                if(refresh && token){
                    await axios.post(`https://web-production-2b5327.up.railway.app/api/logout/`,
                    {refresh},
                    {headers: {Authorization: `Bearer ${token}`}}
                    );
                    localStorage.removeItem("token");
                    localStorage.removeItem("refresh");
                }
            } catch (error) {
                setError(error.message);
                toast.error("An error occoured during logout. Please try again.")
                setLoading(false);
            }
            finally{
                setLoading(false);
                toast.info('Redirecting to loging page......',{
                    position:"top-right"
                })
                setTimeout(()=>{navigate('/login')},2000)
            }
        }
        logoutUser();

    },[navigate])
    return (
    <Box
    sx={{
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"80vh",
    }}
    >
        {!loading && <CircularProgress />}

        {!loading && !error && (<Typography variant='h5' align='center' color='primary'>You have been logged out successfully. Redirecting to login page...</Typography>)}

        {error && (<Typography variant='h5' align='center' color='error'>An error occurred during logout: {error}</Typography>)}
    </Box>
    )
}

export default Logout;