import React, { useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip,
  IconButton
} from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// 🔥 Feature Icons
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SecurityIcon from "@mui/icons-material/Security";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const reviewdata = {
  overall: 4.7,
  totalReviews: 83,
  features: [
    { label: "Connectivity", rating: 4.7, icon: <DirectionsCarIcon /> },
    { label: "Neighbourhood", rating: 4.7, icon: <LocationOnIcon /> },
    { label: "Safety", rating: 4.7, icon: <SecurityIcon /> },
    { label: "Livability", rating: 4.7, icon: <HomeIcon /> },
  ],
  reviews: [
    {
      name: "Veejay S",
      time: "12 months ago",
      rating: 5,
      good: "BA Vermont is very posh society on Baif road...",
      bad: "Nothing to mention that I don't like...",
    },
    {
      name: "Sarthak",
      time: "1 year ago",
      rating: 4,
      good: "Nearby to Pune, good rooftop amenities...",
      bad: "Construction quality could improve...",
    },
    {
      name: "Rahul",
      time: "10 months ago",
      rating: 5,
      good: "Great connectivity and peaceful location...",
      bad: "Maintenance could be better...",
    },
     {
      name: "Rahul",
      time: "10 months ago",
      rating: 5,
      good: "Great connectivity and peaceful location...",
      bad: "Maintenance could be better...",
    },
     {
      name: "Rahul",
      time: "10 months ago",
      rating: 5,
      good: "Great connectivity and peaceful location...",
      bad: "Maintenance could be better...",
    },
  ],
};

export default function RatingsPreview() {
  const navigate = useNavigate();
  const scrollRef = useRef();
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


  // 👉 Scroll functions
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

//   -----------------
    const [index, setIndex] = useState(0);
    const visibleCount = 2;

    const handleNext = () => {
    if (index + visibleCount < reviewdata.reviews.length) {
        setIndex(index + 1);
    }
    };

    const handlePrev = () => {
    if (index > 0) {
        setIndex(index - 1);
    }
};

  return (
    <Paper sx={{ p: 2, borderRadius: 2 }}>

      {/* Header */}
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography fontSize={14} color="gray">
            Lodha {data?.location?.city},{data?.location?.state} Phase II Tower 7 Ratings & Reviews
          </Typography>
          <Typography fontWeight="bold">{data?.location?.city}</Typography>
        </Box>

        <Chip
          icon={<StarIcon />}
          label={`${reviewdata.overall} / 5`}
          sx={{ background: "#eee", fontWeight: 600 }}
        />
      </Box>

      {/* 🔥 Feature Ratings */}
      <Typography mt={3} mb={1} fontWeight={600}>
        Ratings based on features
      </Typography>

      <Grid container spacing={2}>
        {reviewdata.features.map((item, i) => (
          <Grid item xs={3} key={i}>
            <Box textAlign="center">
              
              {/* 🔥 Circle with ICON */}
              <Box
                sx={{
                  border: "2px solid #4caf50",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                {item.icon}
                <Typography fontSize={12}>{item.rating}/5</Typography>
              </Box>

              <Typography fontSize={12} mt={1}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Reviews Header */}
        <Box mt={3} display="flex" justifyContent="space-between">
            <Typography fontWeight={600}>
            All resident reviews ({reviewdata.totalReviews})
            </Typography>

            <Typography
            sx={{ color: "#7b2ff7", cursor: "pointer" }}
            onClick={() => navigate("/reviews")}
            >
            View All →
            </Typography>
      </Box>

      {/* 🔥 Slider Wrapper */}
        <Box position="relative" mt={2}>

            {/* LEFT BUTTON */}
            <IconButton
                onClick={handlePrev}
                disabled={index === 0}
                sx={{
                position: "absolute",
                left: -10,
                top: "40%",
                zIndex: 1,
                background: "#fff",
                boxShadow: 2,
                }}
            >
                <ChevronLeftIcon />
            </IconButton>

            {/* RIGHT BUTTON */}
            <IconButton
                onClick={handleNext}
                disabled={index + visibleCount >= reviewdata.reviews.length}
                sx={{
                position: "absolute",
                right: -10,
                top: "40%",
                zIndex: 1,
                background: "#fff",
                boxShadow: 2,
                }}
            >
                <ChevronRightIcon />
            </IconButton>

            {/* 🔥 FIXED VIEW (NO SCROLL) */}
            <Box
                sx={{
                display: "flex",
                gap: 2,
                overflow: "hidden", // ❌ no scroll
                px: 4,
                }}
            >
            {reviewdata.reviews
            .slice(index, index + visibleCount)
            .map((r, i) => (
                <Paper
                key={i}
                sx={{ width: "50%", p: 2, borderRadius: 3 }}
                >
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" gap={1}>
                        <Avatar>{r.name[0]}</Avatar>
                        <Box>
                            <Typography fontSize={14}>{r.name}</Typography>
                            <Typography fontSize={12} color="gray">
                            {r.time}
                            </Typography>
                        </Box>
                        </Box>

                        <Chip label={`${r.rating} ★`} color="success" size="small" />
                    </Box>

                    <Box mt={2}>
                        <Typography fontWeight={600}>Good things</Typography>
                        <Typography fontSize={13}>
                        {r.good} <span style={{ color: "#7b2ff7" }}>read more</span>
                        </Typography>
                    </Box>

                    <Box mt={1}>
                        <Typography fontWeight={600}>Things need improvement</Typography>
                        <Typography fontSize={13}>
                        {r.bad} <span style={{ color: "#7b2ff7" }}>read more</span>
                        </Typography>
                    </Box>
                </Paper>
            ))}
            </Box>
        </Box>
    </Paper>
  );
}