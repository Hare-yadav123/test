import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Button,
  Chip,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
];

function PropertyCard() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <Card
    elevation={1}
      sx={{
        display: "flex",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:0,
        p: 2,
        gap: 3,
        maxWidth: "1200px",
        mx: "auto",
        mt: 5,
      }}
    >
      {/* LEFT IMAGE SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "45%",
          minHeight: "320px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={images[currentImage]}
          alt="property"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* TOP LABEL */}
        <Typography
          sx={{
            position: "absolute",
            top: 15,
            left: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: "22px",
            backgroundColor: "rgba(0,0,0,0.4)",
            px: 1,
            borderRadius: 1,
          }}
        >
          Aqura Builder & Developer
        </Typography>

        {/* LEFT BUTTON */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* RIGHT BUTTON */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* IMAGE COUNT */}
        <Box
          sx={{
            position: "absolute",
            bottom: 15,
            right: 15,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            px: 1.5,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          {currentImage + 1}/{images.length}
        </Box>
      </Box>

      {/* RIGHT CONTENT */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Chip
            label="Zero Brokerage"
            sx={{
              mb: 2,
              backgroundColor: "#f3f4f6",
            }}
          />

          <Typography variant="h4" fontWeight="bold">
            Aqura Pride
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 1,
              color: "#333",
            }}
          >
            2, 3 BHK Flats in Vadgaon Budruk
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#666",
              fontSize: "22px",
            }}
          >
            2 BHK Flat
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "34px",
            }}
          >
            ₹72 L
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#555",
              fontSize: "18px",
            }}
          >
            Avg. Price: ₹13.22 K/sq.ft • Possession: Sep, 2026
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#777",
            }}
          >
            Updated 6d ago
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <IconButton
            sx={{
              border: "1px solid #ddd",
              p: 1.5,
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              px: 10,
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "18px",
              background:"linear-gradient(to right, #7c3aed, #5b21b6)",
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default PropertyCard;