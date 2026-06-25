import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css"; 
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton
} from "@mui/material";
import { useParams } from "react-router-dom";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CommuteIcon from "@mui/icons-material/Commute";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import { useMap } from "react-leaflet";

// Fix marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function NeighbourhoodMap() {
  const [data, setData] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    axios.get(`https://web-production-2b5327.up.railway.app/api/business/${id}`,
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("access_token")}`
            }
        }
    )
      .then((res)=>{
        console.log('API data',res.data.data);
        setData(res.data.data ? [res.data.data] : []);
      })
      .catch(err => console.error(err));

  }, [id]);

  function FixMapSize() {
    const map = useMap();
    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();   // 👈 THIS IS THE REAL FIX
      }, 1000);
    }, [map]);
  
    return null;
  }
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        height: 700,
        width: "100%",   // 👈 ADD THIS
        borderRadius:1,
        overflow: "hidden",
        mb:5,
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Explore Neighbourhood
      </Typography>

      {/* Map */}
      <Box sx={{
        height: 500,
        width: "100%",
        "& .leaflet-container": {
        height: "100%",
        width: "100%",
        },
        borderRadius:1,
        overflow: "hidden" 
        }}>
        <MapContainer
        center={[18.5204, 73.8567]}   // default Pune
        zoom={12} 
        zoomControl={true}
        style={{ height: "100%", width: "100%" }}
        whenReady={(map) => {
            setTimeout(() => map.target.invalidateSize(), 200);
        }}
        >
            {/* <zoomControl position="topright" /> */}
          <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        {/* <FixMapSize />    */}

          {data.map((item) => {
            const lat = Number(item.location.latitude);
            const lng = Number(item.location.longitude);
            // const center =(lat && lng) ? [lat, lng]  : [18.5204, 73.8567]
            const center =
              !isNaN(lat) && !isNaN(lng)
              ? [lat, lng]
              : [18.5204, 73.8567];
              console.log("Marker:", lat, lng);

            // if (lat==null || lat==null ) return null;
            if (isNaN(lat) || isNaN(lng)) return null;

            return (
              <Marker key={item.id} position={[lat, lng]}>
                <Popup>
                  <b>{item?.businessname}</b><br />
                  {item?.location?.city}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </Box>

      {/* Bottom Icons */}
      <Grid container justifyContent="space-around" mt={2}>
        <Grid item textAlign="center">
          <IconButton>
            <LocalHospitalIcon color="primary" />
          </IconButton>
          <Typography variant="body2">Healthcare</Typography>
        </Grid>

        <Grid item textAlign="center">
          <IconButton>
            <CommuteIcon color="primary" />
          </IconButton>
          <Typography variant="body2">Commute</Typography>
        </Grid>

        <Grid item textAlign="center">
          <IconButton>
            <RestaurantIcon color="primary" />
          </IconButton>
          <Typography variant="body2">Food</Typography>
        </Grid>

        <Grid item textAlign="center">
          <IconButton>
            <ShoppingCartIcon color="primary" />
          </IconButton>
          <Typography variant="body2">Shopping</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}


