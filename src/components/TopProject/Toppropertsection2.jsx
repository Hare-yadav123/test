import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ContactSection from "./ContactSection.jsx";
import Logosection from './Logosection.jsx';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
];

export default function PropertyCard() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <Box
      sx={{
        background: "#fff",
        minHeight: "100vh",
        p:0,
      }}
    >
     {/* <Logosection /> */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        {/* LEFT SECTION */}
        <Box sx={{ flex: 1 }}>
          <Card
          elevation={2}
            sx={{
              mt: "10px",
              p: 2,
              borderRadius: "20px",
              border:"1px solid rgba(0,0,0,0.2)",
              // overflow: "hidden",
              boxShadow:"0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: {
                  xs: "wrap",
                  md: "nowrap",
                },
              }}
            >
              {/* IMAGE SLIDER */}
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "42%",
                  },
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={`${images[currentImage]}?w=1200`}
                  alt="property"
                  sx={{
                    width: "100%",
                    height: 260,
                    objectFit: "cover",
                    borderRadius: "15px",
                    display:"block"
                  }}
                />

                {/* LEFT BUTTON */}
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    background: "#ffffffcc",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>

                {/* RIGHT BUTTON */}
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    background: "#ffffffcc",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>

                {/* IMAGE COUNT */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    background: "#00000099",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "12px",
                  }}
                >
                  {currentImage + 1}/{images.length}
                </Box>
              </Box>

              {/* PROPERTY DETAILS */}
              <Box sx={{ flex: 1 }}>
                <Chip
                  label="Zero Brokerage"
                  sx={{
                    background: "#f3f3f3",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={1}
                >
                  Casagrand Caladium
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#555",
                    mb: 2,
                  }}
                >
                  2, 3 BHK Flats in Wagholi
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  ₹1.2 Cr
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    mb: 2,
                  }}
                >
                  Avg. Price: ₹13.04 K/sq.ft • Possession: Jun, 2029
                </Typography>

                <Typography
                  sx={{
                    color: "#777",
                    mb: 4,
                  }}
                >
                  Updated 2d ago
                </Typography>

                {/* BUTTONS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      border: "1px solid #ddd",
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>

                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(90deg,#7b2ff7,#9b4dff)",
                      px: 5,
                      py: 1.3,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* RIGHT CONTACT SECTION */}
        {/* <ContactSection /> */}
      </Box>
    </Box>
  );
}