import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import  amenities  from "../Data/Amenities.js";

export default function AmenitiesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll ? amenities : amenities.slice(0, 12);

  return (
    <Paper
      elevation={0}
      sx={{
        mt:4,
        p: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        background: "#f5f5f5",
      }}
    >
      <Typography fontWeight="bold" fontSize="18px" mb={2}>
        Lodha Kharadi Pune Phase II Tower 7 Top Amenities
      </Typography>

      <Grid container spacing={3}>
        {visibleAmenities.map((item, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Box textAlign="center">
              
              {/* ✅ REAL ICON */}
              <Box
                component="img"
                src={item.icon}
                alt={item.name}
                sx={{
                  width: 32,
                  height: 32,
                  mb: 1,
                  opacity: 0.8,
                }}
              />
              <Typography fontSize="12px">{item.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ✅ More / Less */}
      <Box textAlign="center" mt={3}>
        <Typography
          onClick={() => setShowAll(!showAll)}
          sx={{
            display: "inline-block",
            px: 3,
            py: 1,
            background: "#e6e6fa",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            color: "#6c3bff",
          }}
        >
          {showAll ? "Less ▲" : "More ▼"}
        </Typography>
      </Box>
    </Paper>
  );
}