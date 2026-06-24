// OwnerPage.jsx

import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LoginIcon from "@mui/icons-material/Login";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate } from "react-router-dom";
const plans = [
  {
    title: "Basic",
    duration: "30 Days",
    price: "₹1,499",
    features: [
      "Property Visibility",
      "Verified Buyers",
      "Email Support",
    ],
  },
  {
    title: "Premium",
    duration: "60 Days",
    price: "₹3,999",
    popular: true,
    features: [
      "Top Visibility",
      "Verified Buyers",
      "Priority Support",
      "Featured Listing",
    ],
  },
];

const benefits = [
  {
    title: "Verified Buyers",
    icon: <VerifiedUserIcon fontSize="large" />,
    desc: "Connect only with genuine and verified buyers.",
  },
  {
    title: "Maximum Visibility",
    icon: <VisibilityIcon fontSize="large" />,
    desc: "Reach thousands of property seekers daily.",
  },
  {
    title: "Smart Promotion",
    icon: <TrendingUpIcon fontSize="large" />,
    desc: "Boost your listing and get more leads.",
  },
];

const steps = [
  {
    step: "01",
    title: "Upload Property",
    desc: "Provide property details, images and location.",
  },
  {
    step: "02",
    title: "Choose Package",
    desc: "Select a plan suitable for your property.",
  },
  {
    step: "03",
    title: "Promote Listing",
    desc: "Get better visibility and quality leads.",
  },
  {
    step: "04",
    title: "Receive Leads",
    desc: "Connect with interested buyers and tenants.",
  },
];

export default function OwnerPage() {
    const navigate = useNavigate();
  return (
    <Box
    sx={{
      mt:7
    }}
    >

        <Box
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: 1000,
          mt:0
        }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                    py:2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    }}
                >
                    <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="white"
                    >
                    DREAMHOMES
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            sx={{
                            color: "white",
                            borderColor: "white",
                            }}
                            startIcon={<LoginIcon />}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                            bgcolor: "white",
                            color: "#5B21B6",
                            fontWeight: 700,
                            }}
                            onClick={()=>navigate('/propertylisting')}
                        >
                            + List Property
                        </Button>
                    </Stack>
                </Box>
            </Container>
      </Box>

      {/* HERO SECTION */}

      <Box
        sx={{
          minHeight: "70vh",
          background:
            "linear-gradient(135deg,#4F1D95,#24147A)",
          color: "white",
          display: "flex",
          alignItems: "center",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <Container maxWidth="lg" sx={{mt:8}}>
            <Grid container spacing={6} alignItems="center">

                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ mb: 3 }}
                    >
                        Sell or Rent Your Property
                        Effortlessly with DreamHomes
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                        opacity: 0.9,
                        mb: 5,
                        }}
                    >
                        India's trusted platform to connect
                        property owners with genuine buyers
                        and renters.
                    </Typography>

                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                        bgcolor: "white",
                        color: "#4F1D95",
                        px: 5,
                        py: 2,
                        fontWeight: 700,
                        }}
                    >
                        Explore Owner Plans
                    </Button>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper
                    elevation={10}
                    sx={{
                    p: 5,
                    borderRadius: 6,
                    textAlign: "center",
                    }}
                    >
                        <HomeWorkIcon
                        sx={{
                            fontSize: 180,
                            color: "#5B21B6",
                        }}
                        />

                        <Typography
                        variant="h6"
                        fontWeight="bold"
                        >
                        Verified Property Listing
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
      </Box>

      {/* PRICING */}

        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={6}
            >
            Get 10X More Leads
            </Typography>

        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={6} key={plan.title}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  border: plan.popular
                    ? "2px solid #673AB7"
                    : "",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    {plan.title}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    {plan.duration}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ my: 3 }}
                  >
                    {plan.price}
                  </Typography>

                  {plan.features.map((item) => (
                    <Typography key={item} sx={{ mb: 1 }}>
                      ✓ {item}
                    </Typography>
                  ))}

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={() => navigate("/payment")}
                  >
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* BENEFITS */}

      <Box
        sx={{
          py: 10,
          bgcolor: "#F8F7FC",
        }}
      >
        <Container maxWidth="lg">

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={6}
          >
            Why Property Owners Choose DreamHomes
          </Typography>

          <Grid container spacing={4}>
            {benefits.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  {item.icon}

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mt={2}
                  >
                    {item.title}
                  </Typography>

                  <Typography mt={2}>
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>

      {/* HOW IT WORKS */}

      <Container maxWidth="lg" sx={{ py:10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={8}
        >
          4 Easy Steps To List &
          Promote Your Property
        </Typography>

        <Grid container spacing={3}>
          {steps.map((item) => (
            <Grid item xs={12} md={4} key={item.step}>
              <Card sx={{
                p: 4,
                textAlign: "center",
                height: "80%" 
                }}>
                <Typography
                  variant="h2"
                  color="primary"
                  fontWeight="bold"
                >
                  {item.step}
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mt={2}
                >
                  {item.title}
                </Typography>

                <Typography mt={2}>
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}

      <Box
        sx={{
          py: 4,
          bgcolor: "#24147A",
          color: "white",
        }}
      >
        <Container>
          <Typography textAlign="center">
            © 2026 DreamHomes. All Rights Reserved.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}