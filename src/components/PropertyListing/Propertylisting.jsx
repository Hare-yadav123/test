import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  CircularProgress,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import axios from "axios";
import Propertytypes from "./Propertytypes.jsx";
import Propertstatus from "./Propertstatus.jsx";
import PropertyImage from "./UploadPropertyImage.jsx"
import Propertylocation from "./Propertylocation.jsx";
import Publishproperty from "./Publishproperty.jsx";
const PropertyUpload = () => {
  

  return (
    <Box sx={{ backgroundColor: "#f7f8fa", minHeight: "100vh", mt:5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "450px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.5))",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            pt: 15,
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
          >
            List Your Property
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: 2, maxWidth: 700 }}
          >
            Reach thousands of buyers and tenants.
            Publish your property in minutes and
            start receiving genuine enquiries.
          </Typography>
        </Container>
      </Box>

      {/* Property Status */}
      <Box>
        <Propertytypes />
        <Propertstatus />
        <PropertyImage />
        <Propertylocation />
        <Publishproperty />
      </Box>

      
    </Box>
  );
};

export default PropertyUpload;