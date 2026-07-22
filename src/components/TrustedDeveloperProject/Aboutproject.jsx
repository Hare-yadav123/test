import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Divider,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  Collapse
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PropertyOverviewPage() {
  const [showMore, setShowMore] = useState(false);
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

  return (
    <Box
      sx={{
        background: "#f5f5f5",
        minHeight: "100vh",
        py: 2,
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        {/* TOP MENU */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            borderBottom: "1px solid #ddd",
            pb: 1.5,
            px: 1,
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#7b2ff7",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Overview/Home
          </Typography>

          <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
            Around This Project
          </Typography>

          <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
            More About Project
          </Typography>

          <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
            About Project
          </Typography>

          <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
          {data?.location?.city},{data?.location?.state} P2 Floor Plans and Pricing
          </Typography>

          <KeyboardArrowRightOutlinedIcon
            sx={{
              fontSize: 18,
              color: "#666",
            }}
          />
        </Box>

        {/* CONTENT AREA */}
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          {/* LEFT SECTION */}
          <Grid xs={12} md={8}>
            {/* LOCATION CARD */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    color: "#7b2ff7",
                    mt: 0.3,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#777",
                    }}
                  >
                    Property Location
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    1287/2 P, {data?.location?.city},{data?.location?.state}
                  </Typography>
                </Box>
              </Box>

              {/* AROUND PROJECT */}
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#666",
                    mb: 1.5,
                  }}
                >
                  Around This Project
                </Typography>

                <Grid container spacing={2}>
                  {/* CARD */}
                  <Grid xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        border: "1px solid #eee",
                        borderRadius: "6px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "13px",
                        }}
                      >
                        🏫 School
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#666",
                          mt: 0.5,
                        }}
                      >
                        Little Millennium Preschool
                        Wagheshwar, Pune
                      </Typography>
                    </Paper>
                  </Grid>

                  {/* CARD */}
                  <Grid xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        border: "1px solid #eee",
                        borderRadius: "6px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: "13px",
                            }}
                          >
                            <DirectionsBusOutlinedIcon
                              sx={{
                                fontSize: 16,
                                mr: 0.5,
                              }}
                            />
                            Bus Stand
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "#666",
                              mt: 0.5,
                            }}
                          >
                            Ubale Nagar Bus Stop
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          6 mins
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>

                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    color: "#7b2ff7",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  View more on Maps
                </Typography>
              </Box>
            </Paper>

            {/* OVERVIEW SECTION */}
            <Paper
              elevation={0}
              sx={{
                mt: 2,
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
              }}
            >
              {/* TITLE */}
              <Box
                sx={{
                  p: 2,
                  borderBottom: "1px solid #eee",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                >
                  Lodha {data?.location?.city},{data?.location?.state} P2 Overview
                </Typography>
              </Box>

              {/* DETAILS */}
              <Grid container>
                {[
                  ["Project Units", "68"],
                  ["Area Units", "sq.ft."],
                  ["Project Area", "0.57 Acres"],
                  ["Sizes", "1424 - 1652 sq.ft."],
                  ["Project Size", "1 Building - 68 units"],
                  ["Launch Date", "Sep, 2023"],
                  ["Avg. Price", "₹17.84 K/sq.ft"],
                  ["Possession Starts", "Oct, 2027"],
                  ["Configurations", "3, 4 BHK Apartments"],
                ].map((item, index) => (
                  <Grid
                    xs={12}
                    sm={4}
                    key={index}
                  >
                    <Box
                      sx={{
                        p: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#777",
                          fontSize: "12px",
                        }}
                      >
                        {item[0]}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          mt: 0.5,
                        }}
                      >
                        {item[1]}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<ShareOutlinedIcon />}
                  sx={{
                    flex: 1,
                    textTransform: "none",
                    color: "#7b2ff7",
                    borderColor: "#ddd",
                  }}
                >
                  Share
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<FavoriteBorderOutlinedIcon />}
                  sx={{
                    flex: 1,
                    textTransform: "none",
                    color: "#7b2ff7",
                    borderColor: "#ddd",
                  }}
                >
                  Save
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    flex: 1.5,
                    background:
                      "linear-gradient(90deg,#7b2ff7,#9b4dff)",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Ask For Details
                </Button>
              </Box>
            </Paper>

            {/* ABOUT PROJECT */}
            <Paper
              elevation={0}
              sx={{
                mt: 2,
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderBottom: "1px solid #eee",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                >
                  About Lodha {data?.location?.city},{data?.location?.state} P2
                </Typography>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  Check out this residential project for sale by
                  Lodha Group in Wagholi, Pune. Lodha Kharadi
                  Pune P2 offers Apartment as property type.

                  {/* 🔥 Hidden part */}
                  {showMore && (
                    <>
                      {" "}
                      The project has been developed in an area of
                      0.57 Acres. It includes modern amenities,
                      good connectivity, and a premium lifestyle
                      experience for residents.
                    </>
                  )}
                </Typography>

                <Typography
                  onClick={() => setShowMore(!showMore)}
                  sx={{
                    mt: 3,
                    textAlign: "center",
                    color: "#7b2ff7",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {showMore ? "Show Less" : "Show More About Project"}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
}