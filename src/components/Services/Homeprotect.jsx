import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Stack,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function DreamHomesProtect() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Cyber Safe",
      color:
        "linear-gradient(135deg,#0F766E,#064E3B)",
      description:
        "Protect yourself from online fraud and cyber threats.",
      details: [
        "Identity Theft Protection",
        "UPI Fraud Coverage",
        "Online Scam Monitoring",
        "24x7 Emergency Support",
        "Financial Fraud Assistance",
      ],
    },
    {
      title: "Rent Protect",
      color:
        "linear-gradient(135deg,#7C3AED,#4C1D95)",
      description:
        "Protect your rental property and rental income.",
      details: [
        "Tenant Verification",
        "Rental Agreement Support",
        "Rent Dispute Assistance",
        "Property Damage Coverage",
        "Legal Consultation",
      ],
    },
  ];

  const handleOpen = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#063B35,#011F1C)",
          color: "#fff",
          overflow: "hidden",
          position: "relative",
          mt:7
        }}
      >
        {/* Background Glow */}

        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "rgba(20,184,166,0.15)",
            filter: "blur(100px)",
            right: -100,
            top: 120,
          }}
        />

        <Container maxWidth="xl">
          {/* Header */}

          <Box
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
            >
              DREAMHOMES
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: 20,
                bgcolor: "#14B8A6",
              }}
            >
              Protect Plans
            </Button>
          </Box>

          {/* Hero Section */}

          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              minHeight: "85vh",
            }}
          >
            {/* LEFT */}

            <Grid item xs={12} md={6}>
              <Chip
                label="INTRODUCING"
                sx={{
                  bgcolor: "#EC4899",
                  color: "#fff",
                  mb: 4,
                  fontWeight: 700,
                }}
              />

              <Typography
                variant="h2"
                fontWeight={800}
                gutterBottom
              >
                DreamHomes Protect
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#D1D5DB",
                  mb: 5,
                  maxWidth: 500,
                }}
              >
                Home & Lifestyle protection
                plans made simple with
                DreamHomes Protect.
              </Typography>

              {/* Offer Box */}

              <Box
                sx={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 6,
                  p: 4,
                  backdropFilter: "blur(20px)",
                  background:
                    "rgba(255,255,255,0.03)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  mb={3}
                >
                  WE OFFER
                </Typography>

                <Grid container spacing={3}>
                  {plans.map((plan) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      key={plan.title}
                    >
                      <Card
                        sx={{
                          background:
                            plan.color,
                          color: "#fff",
                          borderRadius: 5,
                          height: "100%",
                        }}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius:
                                "50%",
                              bgcolor:
                                "rgba(255,255,255,0.15)",
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              mb: 2,
                            }}
                          >
                            {plan.title ===
                            "Cyber Safe" ? (
                              <SecurityIcon />
                            ) : (
                              <HomeIcon />
                            )}
                          </Box>

                          <Typography
                            variant="h5"
                            fontWeight={700}
                            mb={2}
                          >
                            {plan.title}
                          </Typography>

                          <Typography
                            sx={{
                              mb: 3,
                              color:
                                "rgba(255,255,255,0.85)",
                            }}
                          >
                            {
                              plan.description
                            }
                          </Typography>

                          <Button
                            endIcon={
                              <ArrowForwardIosIcon />
                            }
                            onClick={() =>
                              handleOpen(
                                plan
                              )
                            }
                            sx={{
                              color:
                                "#fff",
                              p: 0,
                            }}
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* RIGHT */}

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 450,
                    height: 450,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle,#14B8A6,#063B35)",
                    display: "flex",
                    justifyContent:
                      "center",
                    alignItems:
                      "center",
                    boxShadow:
                      "0 0 120px rgba(20,184,166,0.5)",
                  }}
                >
                  <ShieldIcon
                    sx={{
                      fontSize: 260,
                      color: "#fff",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Dialog */}

      <Dialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {selectedPlan?.title}
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{ mb: 3 }}
          >
            {
              selectedPlan?.description
            }
          </Typography>

          <Stack spacing={2}>
            {selectedPlan?.details.map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor:
                      "#F5F5F5",
                  }}
                >
                  {item}
                </Box>
              )
            )}
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() =>
              setOpen(false)
            }
          >
            Close
          </Button>

          <Button
            variant="contained"
          >
            Get Protected
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}