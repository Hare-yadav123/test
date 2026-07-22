
import { Typography, Stack, Button, Box ,Dialog,DialogContent} from "@mui/material";
import ContactSeller from "./ContactySeller";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PropertyHeader() {
  const {id} = useParams();
  const [headData,setHeadData] = useState([]);
  const [openContact, setOpenContact] = useState(false);

  useEffect(()=>{

    axios.get(`https://web-production-2b5327.up.railway.app/api/business/${id}/`,
      {
        headers:{
          Authorization:`Bearere ${localStorage.getItem("access_token")}`
        }
      }
    )
    .then((res)=>{
      console.log([res.data.data]);
      setHeadData([res.data.data]);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id])
  return (

    <Box
    sx={{
      top:0,
      left:0
    }}
    >
      {
          headData.map((item,index)=>(
            <Box key={index}
            sx={{
              display:"flex",
              alignItems:"center",
              gap:"33rem"
            }}
            >

              <Box>
                <Typography variant="h5"
                sx={{
                  fontWeight:"bold"
                }}
                > {item.businessname} </Typography>

                <Typography color="text.secondry" 
                sx={{
                  fontWeight:300
                }}
                >{item.location.state}, {item.location.city}, {item.location.pincode}, {item.location.country}</Typography>
              </Box>

              <Box>
                <Typography
                variant="h5"
                color="primary"
                > 
                ₹{item.price}Lac - ₹2.04Cr
                </Typography>

                <Button variant="contained"
                onClick={()=>setOpenContact(true)}
                >
                  Contact Developer
                </Button>

                <Dialog
                open={openContact}
                onClose={()=>setOpenContact(false)}
                maxWidth="sm"
                fullWidth
                >
                  <DialogContent>
                    <ContactSeller />
                  </DialogContent>
                </Dialog>
              </Box>
            </Box>  
          ))
        }

      {/* <Box>
        <Typography variant="h5"
        sx={{
          fontWeight:"bold"
        }}
        >  Bivega The Silver Altair </Typography>

        <Typography color="text.secondry" 
        sx={{
          fontWeight:300
        }}
        >Ravar Pimpary Chinchwad pune MH </Typography>
      </Box>

      <Box>
        <Typography
        variant="h5"
        color="primary"
        > 
         ₹90L - ₹2.04Cr
        </Typography>

        <Button variant="contained"
        onClick={()=>setOpenContact(true)}
        >
          Contact Developer
        </Button>

        <Dialog
        open={openContact}
        onClose={()=>setOpenContact(false)}
        maxWidth="sm"
        fullWidth
        >
          <DialogContent>
            <ContactSeller />
          </DialogContent>
        </Dialog>
      </Box>
      
       */}
      
    </Box>
    
  );
}