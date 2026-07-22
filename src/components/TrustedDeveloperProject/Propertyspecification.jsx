import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Specifications() {
  const [expanded, setExpanded] = useState("panel1");
  const [data,setData] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/business/${id}/`,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("access_token")}`
        }
      }
    )
    .then((res)=>{
      console.log('api location data :',res.data.data);
      setData(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id]);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
        <Typography fontWeight="bold" fontSize="18px">
          Lodha {data?.location?.city},{data?.location?.state} II Tower 7 Specifications
        </Typography>
      </Box>

      {/* 🔹 Floor & Counter */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        elevation={0}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Floor & Counter</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Living/Dining</Typography>
              <Typography fontSize="14px">Vitrified Tiles</Typography>

              <Typography mt={2} fontSize="13px" color="gray">Kitchen</Typography>
              <Typography fontSize="14px">Vitrified Tiles</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Master Bedroom</Typography>
              <Typography fontSize="14px">Floor Vitrified tiles</Typography>

              <Typography mt={2} fontSize="13px" color="gray">Toilets</Typography>
              <Typography fontSize="14px">Anti Skid Tiles</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Other Bedroom</Typography>
              <Typography fontSize="14px">Vitrified Tiles</Typography>

              <Typography mt={2} fontSize="13px" color="gray">Balcony</Typography>
              <Typography fontSize="14px">Anti Skid Tiles</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* 🔹 Fitting */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        elevation={0}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Fitting</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Toilets</Typography>
              <Typography fontSize="14px">
                CP fittings, Jaquar/Marc/American Standard fittings, ISI Mark Bath Fittings
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Kitchen</Typography>
              <Typography fontSize="14px">
                Stainless Steel Sink, Granite Platform, RO Provision, Modular Cabinets
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Doors</Typography>
              <Typography fontSize="14px">Flush Door</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* 🔹 Wall & Ceiling */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        elevation={0}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Wall & Ceiling</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Interior</Typography>
              <Typography fontSize="14px">Distemper Paints</Typography>

              <Typography mt={2} fontSize="13px" color="gray">Toilets</Typography>
              <Typography fontSize="14px">Ceramic Tiles</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Exterior</Typography>
              <Typography fontSize="14px">Distemper Paints</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize="13px" color="gray">Kitchen</Typography>
              <Typography fontSize="14px">Ceramic Tiles</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}