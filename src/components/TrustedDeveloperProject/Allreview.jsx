import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { reviewsData as data } from "../Data/reviewsData.js";

export default function AllReviewsPage() {
  return (
    <Box
      sx={{
        maxWidth: "1100px",   // 🔥 center width control
        margin: "0 auto",     // 🔥 center align
        mt: 10,
        px: 2,                // 🔥 side spacing
      }}
    >

      {/* Header */}
      <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="bold" fontSize={18}>
            All Ratings & Reviews
          </Typography>

          <Chip
            icon={<StarIcon />}
            label={`${data.overall} / 5`}
            sx={{ fontWeight: 600 }}
          />
        </Box>
      </Paper>

      {/* Feature Ratings */}
      <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
        <Typography fontWeight={600} mb={2}>
          Ratings based on features
        </Typography>

        <Grid container spacing={2}>
          {data.features.map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Box textAlign="center">
                <Box
                  sx={{
                    border: "2px solid #4caf50",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                >
                  <Typography>{item.rating}</Typography>
                </Box>
                <Typography fontSize={12} mt={1}>
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Reviews */}
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={2}>
          All Reviews ({data.totalReviews})
        </Typography>

        <Box
          sx={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {data.reviews.map((r, i) => (
            <Box
              key={i}
              sx={{
                mb: 3,
                pb: 2,
                borderBottom:
                  i !== data.reviews.length - 1
                    ? "1px solid #eee"
                    : "none",
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" gap={1}>
                  <Avatar>{r.name[0]}</Avatar>
                  <Box>
                    <Typography fontWeight={500}>{r.name}</Typography>
                    <Typography fontSize={12} color="gray">
                      {r.time}
                    </Typography>
                  </Box>
                </Box>

                <Chip
                  label={`${r.rating} ★`}
                  color="success"
                  size="small"
                />
              </Box>

              {/* Good */}
              <Box mt={2}>
                <Typography fontWeight={600}>Good things</Typography>
                <Typography fontSize={13}>{r.good}</Typography>
              </Box>

              {/* Bad */}
              <Box mt={1}>
                <Typography fontWeight={600}>
                  Things need improvement
                </Typography>
                <Typography fontSize={13}>{r.bad}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

    </Box>
  );
}