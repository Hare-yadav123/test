
import { Card, CardContent, Typography, List, ListItem,Box } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function PropertyHighlights() {

  const highlights = [
    "Prime Location with Easy Connectivity",
    "Largest Carpet Area for 3 BHK",
    "Modern Gym & Crossfit Area",
    "Earthquake-resistant RCC Structure",
    "Spacious & Well-Planned Layout",
    "Modern Amenities for Comfortable Living",
    "High-Quality Construction Standards",
    "24/7 Security & CCTV Surveillance",
    "Ample Parking Space Available",
    "Green & Open Spaces Around",
    "Power Backup for Common Areas",
    "Water Supply with Proper Management",
  ];

  const [data , setData] = useState([]);
  const {id} = useParams();

  useEffect(()=>{

    axios.get(`https://web-production-2b5327.up.railway.app/api/business/${id}/`,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("access_token")}`
        }
      })
      .then(res=>{
        console.log([res.data.data])
        setData([res.data.data])
      })
      .catch((err)=>{
        console.log(err);
      })
    
  },[id])


  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>

        <Typography variant="h6">
          Highlights
        </Typography>

        <List>
          <Box
          sx={{
            ml:2
          }}
          >
            <Typography variant="h6">
              • {data[0]?.description}
            </Typography>
          </Box>

          {highlights.map((item, index) => (
            <ListItem key={index} variant="h6">
              • {item}
            </ListItem>
          ))}
        </List>

      </CardContent>
    </Card>
  );
}