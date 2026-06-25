import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  IconButton,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";
import axios from "axios";

const propertyData = {
  name: "Midori Tower",
  builder: "SHREE VENKATESH BUILDCON PVT LTD",
  address: "Vishal Nagar, DP road, Pimple Nilakh, Pimpri Chinchwad, Pune",
  priceRange: "₹1.14 Cr - 2.3 Cr",
  emi: "₹56.4 K",
  updated: "Apr 27, 2026",
  configurations: "2, 3, 4 BHK Apartment, Duplex",
  possession: "Sep, 2027",
  avgPrice: "Price on request",
  sizes: "779 - 2014 sq.ft",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop",
  ],
};

// Main Function 
export default function PropertyDetails() {
  const [data, setData] = useState();
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://web-production-2b5327.up.railway.app/api/business/${id}/`,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("access_token")}`
        }
      }
    )
    .then((res)=>{
      console.log('api image data :',res.data.data);
      setData(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id]);

  return (
    <Box
      sx={{
        mt:3,
        background: "#f8fafc",
        minHeight: "100vh",
        p: {
          xs: 2,
          md: 0,
        },
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        {/* BREADCRUMB */}
        <Typography
          sx={{
            color: "#666",
            mb: 2,
            fontSize: "14px",
          }}
        >
          Home / {data?.location?.state} / {data?.location?.city} / Midori Tower
        </Typography>

        {/* HEADER SECTION */}
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
        >
          {/* LEFT */}
          <Grid item xs={12} lg={8}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {data?.businessname} (Midori Tower)


              <Chip
                label="RERA"
                size="small"
                sx={{
                  background: "#e6f4ea",
                  fontWeight: 600,
                }}
              />
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#6b21a8",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              By // {data?.businessname}
            </Typography>

            <Typography
              sx={{
                color: "#555",
                mt: 1,
                fontSize: "16px",
              }}
            >
              {data?.location?.city}, {data?.location?.state}-{data?.location?.pincode}, {data?.location?.country}
            </Typography>
          </Grid>

          {/* RIGHT PRICE */}
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              textAlign: {
                xs: "left",
                lg: "right",
              },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {data?.location?.city} {data?.location?.state} {data?.location?.pincode}
            </Typography>

            <Typography
              sx={{
                color: "#6b21a8",
                mt: 1,
              }}
            >
              EMI starts at {propertyData.emi}
            </Typography>

            <Typography
              sx={{
                color: "#777",
                fontSize: "14px",
                mt: 0.5,
              }}
            >
              All Inclusive Price
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                background:
                  "linear-gradient(90deg,#7b2ff7,#9b4dff)",
                borderRadius: "10px",
                textTransform: "none",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                boxShadow: "none",
              }}
            >
              Contact Sellers
            </Button>
          </Grid>
        </Grid>

        {/* IMAGE SECTION */}
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          sx={{
            mt: 2,
          }}
        >
          {/*TOP LEFT BIG IMAGE */}
          <Grid  item xs={12} lg={8}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={
                  data?.images_data?.[0]?.image
                  ? `https://web-production-2b5327.up.railway.app${data.images_data[0].image}`
                  : "/no image found"
                }                    //{propertyData.images[0]}
                alt="property"
                sx={{
                  width: "100%",
                  height: {
                    xs: "300px",
                    md: "450px",
                  },
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                }}
              />

              {/* COVER IMAGE */}
              <Chip
                label="Cover Image"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  background: "#fff",
                  fontWeight: 500,
                }}
              />

              {/* SHARE SAVE */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  display: "flex",
                  gap: 1,
                }}
              >
                <Button
                  startIcon={<ShareIcon />}
                  sx={{
                    background: "#fff",
                    color: "#111",
                    textTransform: "none",
                    borderRadius: "10px",
                    px: 2,
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  Share
                </Button>

                <Button
                  startIcon={<FavoriteBorderIcon />}
                  sx={{
                    background: "#fff",
                    color: "#111",
                    textTransform: "none",
                    borderRadius: "10px",
                    px: 2,
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
              }}
            >
              {/* VIDEO */}
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={propertyData.images[1]}
                  alt="video"
                  sx={{
                    width: "100%",
                    height: {
                      xs: "200px",
                      md: "215px",
                    },
                    borderRadius: "12px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "#ffffffcc",
                    width: 65,
                    height: 65,
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: 40,
                    }}
                  />
                </IconButton>
              </Box>

              {/* MORE IMAGE */}
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={propertyData.images[2]}
                  alt="more"
                  sx={{
                    width: "100%",
                    height: {
                      xs: "200px",
                      md: "215px",
                    },
                    borderRadius: "12px",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.75)",
                  }}
                />

                <Typography
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  +27 more
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM INFO BAR */}
        <Grid
          container
          sx={{
            mt: 3,
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #eee",
            overflow: "hidden",
          }}
        >
          {/* ITEM */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              p: 3,
              borderRight: {
                md: "1px solid #eee",
              },
            }}
          >
            <Typography fontWeight="bold">
              {propertyData.configurations}
            </Typography>

            <Typography color="#777" mt={1}>
              Configurations
            </Typography>
          </Grid>

          {/* ITEM */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              p: 3,
              borderRight: {
                md: "1px solid #eee",
              },
            }}
          >
            <Typography fontWeight="bold">
              {propertyData.possession}
            </Typography>

            <Typography color="#777" mt={1}>
              Possession Starts
            </Typography>
          </Grid>

          {/* ITEM */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              p: 3,
              borderRight: {
                md: "1px solid #eee",
              },
            }}
          >
            <Typography fontWeight="bold">
              {propertyData.avgPrice}
            </Typography>

            <Typography color="#777" mt={1}>
              Avg. Price
            </Typography>
          </Grid>

          {/* ITEM */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              p: 3,
            }}
          >
            <Typography fontWeight="bold">
              {propertyData.sizes}
            </Typography>

            <Typography color="#777" mt={1}>
              Sizes
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}