import {
  Box,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function DreamHomesMarketing() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          height: 70,
          bgcolor: "#111",
          color: "#fff",
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          DreamHomes
        </Typography>

        <Stack direction="row" spacing={3}>
          <Typography>Products</Typography>
          <Typography>Pricing</Typography>
          <Typography>Contact</Typography>
        </Stack>
      </Box>

      {/* Hero */}
      <Box
        sx={{
          height: 350,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.35)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            Want to List your Property?
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Explore premium products designed for builders,
            brokers and property owners.
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          centered
          sx={{ mt: 4 }}
        >
          <Tab label="Broker" />
          <Tab label="Developer" />
        </Tabs>

        {/* Section 1 */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight={700}>
            AD PRODUCTS
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 5,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Site Take Over
              </Typography>

              <Typography sx={{ mt: 2, color: "#666" }}>
                Maximum visibility across the platform with
                premium placement and branding solutions.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#6c3cff",
                }}
              >
                I'm Interested
              </Button>
            </Box>

            <Card elevation={3}>
              <CardMedia
                component="img"
                height="280"
                image="https://images.unsplash.com/photo-1460317442991-0ec209397118"
              />
            </Card>
          </Box>
        </Box>

        {/* Section 2 */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" fontWeight={700}>
            CONTENT PRODUCTS
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 5,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Virtual Tours
              </Typography>

              <Typography sx={{ mt: 2, color: "#666" }}>
                Showcase your property using immersive
                interactive experiences.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#6c3cff",
                }}
              >
                I'm Interested
              </Button>
            </Box>

            <Card elevation={3}>
              <CardMedia
                component="img"
                height="280"
                image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              />
            </Card>
          </Box>
        </Box>

        {/* Section 3 */}
        <Box sx={{ mt: 10, mb: 10 }}>
          <Typography variant="h4" fontWeight={700}>
            VIDEO OFFERINGS
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 5,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Drone Videos
              </Typography>

              <Typography sx={{ mt: 2, color: "#666" }}>
                High-quality aerial footage to present your
                project professionally.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#6c3cff",
                }}
              >
                I'm Interested
              </Button>
            </Box>

            <Card elevation={3}>
              <CardMedia
                component="img"
                height="280"
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              />
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}