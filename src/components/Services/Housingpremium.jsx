import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Chip,
} from "@mui/material";
import Testmonial from "./Testmonial";
const plans60 = [
  {
    id: 1,
    name: "Connect",
    price: "₹5,999",
    highlight: false,
    features: [
      "Dedicated Relationship Manager",
      "Property Promotion",
      "Verified Buyers",
    ],
  },
  {
    id: 2,
    name: "Connect+",
    price: "₹8,999",
    highlight: true,
    features: [
      "Everything in Connect",
      "Premium Listing",
      "Featured Property",
    ],
  },
  {
    id: 3,
    name: "Relax",
    price: "₹14,999",
    highlight: false,
    features: [
      "Site Visits",
      "Buyer Management",
      "Negotiation Support",
    ],
  },
  {
    id: 4,
    name: "Relax+",
    price: "₹19,999",
    highlight: false,
    features: [
      "Everything in Relax",
      "Legal Assistance",
      "Priority Service",
    ],
  },
];

const plans100 = [
  {
    id: 1,
    name: "Connect",
    price: "₹7,999",
    highlight: false,
    features: [
      "Dedicated Relationship Manager",
      "Property Promotion",
      "Verified Buyers",
    ],
  },
  {
    id: 2,
    name: "Connect+",
    price: "₹11,999",
    highlight: true,
    features: [
      "Everything in Connect",
      "Premium Listing",
      "Featured Property",
    ],
  },
  {
    id: 3,
    name: "Relax",
    price: "₹17,999",
    highlight: false,
    features: [
      "Site Visits",
      "Buyer Management",
      "Negotiation Support",
    ],
  },
  {
    id: 4,
    name: "Relax+",
    price: "₹24,999",
    highlight: false,
    features: [
      "Everything in Relax",
      "Legal Assistance",
      "Priority Service",
    ],
  },
];

export default function PremiumPage() {
  const [duration, setDuration] = useState("60");
  const [selectedPlan, setSelectedPlan] = useState("Connect+");

  const plans = duration === "60" ? plans60 : plans100;

  return (
    <Box sx={{ bgcolor: "#f8fafc" }}>

      {/* HERO */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "#fff",
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            DREAMHOMES Premium Selling Plans
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.8,
              maxWidth: 700,
            }}
          >
            Choose the perfect plan to sell
            your property faster with verified
            buyers and premium support.
          </Typography>
        </Container>
      </Box>

      {/* DURATION */}

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <ToggleButtonGroup
            value={duration}
            exclusive
            onChange={(e, value) =>
              value && setDuration(value)
            }
          >
            <ToggleButton value="60">
              60 Days
            </ToggleButton>

            <ToggleButton value="100">
              100 Days
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* PLAN CARDS */}

        <Grid
          container
          spacing={3}
          sx={{ mt: 4 }}
        >
          {plans.map((plan) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={plan.id}
            >
              <Card
                onClick={() =>
                  setSelectedPlan(plan.name)
                }
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  border:
                    selectedPlan === plan.name
                      ? "3px solid #2563eb"
                      : "1px solid #ddd",
                  transform:
                    selectedPlan === plan.name
                      ? "scale(1.03)"
                      : "scale(1)",
                  transition: "0.3s",
                  position: "relative",
                }}
              >
                {plan.highlight && (
                  <Chip
                    label="POPULAR"
                    color="primary"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                    }}
                  />
                )}

                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                  >
                    {plan.price}
                  </Typography>

                  {plan.features.map((f) => (
                    <Typography
                      key={f}
                      sx={{ mb: 1 }}
                    >
                      ✓ {f}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Testmonial />
      </Container>
    </Box>
  );
}