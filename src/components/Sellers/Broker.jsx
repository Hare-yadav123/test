import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const products = [
    {
    title: "DreamHomes Ultra",
    tag: "Elite",
    },
    {
    title: "DreamHomes Expert",
    tag: "Premium",
    },
    {
    title: "Premier",
    tag: "Value",
    },
    {
    title: "Housing Select",
    tag: "Starter",
    },
    {
    title: "Audience Maximizer",
    tag: "Marketing",
    },
    {
    title: "New Project Pinning",
    tag: "Popular",
    },
    {
    title: "Featured Agent",
    tag: "Agent",
    },
    {
    title: "Project Highlight",
    tag: "Featured",
    },
    {
    title: "DreamHomes Shorts",
    tag: "Video",
    },
    {
    title: "Rent Billboard",
    tag: "Rental",
    },
    {
    title: "DigiLite",
    tag: "Digital",
    },
    {
    title: "Lead Booster",
    tag: "Growth",
    },
];

const featureList = [
    "Top placement in search results",
    "Premium property branding",
    "Higher visibility across platform",
    "Verified listing badge",
    "Priority customer support",
];

const BrokerPage = () => {
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ bgcolor: "#f7f7f7", minHeight: "100vh" }}>
        {/* Banner Section */}
            <Box
            sx={{
            height: 190,
            backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            }}
            >
            <Box
            sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.40)",
            }}
            />

                <Box
                sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "#fff",
                    textAlign: "center",
                }}
                >
                <Typography variant="h4" fontWeight="bold">
                    Want to List your Property for Sale or Rent?
                </Typography>

                <Typography sx={{ mt: 1 }}>
                    Explore DreamHomes marketing products built for brokers
                    and developers.
                </Typography>
                </Box>
            </Box>

            {/* Tabs */}
            <Box
                sx={{
                bgcolor: "#fff",
                borderBottom: "1px solid #e5e5e5",
                }}
            >
                <Tabs
                value={tab}
                onChange={(e, value) => setTab(value)}
                centered
                >
                <Tab label="Broker" />
                <Tab label="Developer" />
                </Tabs>
            </Box>

            {/* Product Cards */}
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Grid container spacing={3}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                        sx={{
                        height: 520,
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #e0e0e0",
                        boxShadow: "none",
                        borderRadius: 2,
                        transition: "0.3s",

                        "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        },
                        }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Chip
                            label={product.tag}
                            size="small"
                            color="primary"
                            sx={{ mb: 2 }}
                        />

                        <Typography
                            variant="h6"
                            fontWeight={700}
                            gutterBottom
                        >
                            {product.title}
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <Typography
                            fontWeight={600}
                            sx={{ mb: 1 }}
                        >
                            Features
                        </Typography>

                        <List dense>
                            {featureList.map((feature, i) => (
                            <ListItem
                                key={i}
                                disablePadding
                                sx={{ mb: 1 }}
                            >
                                <ListItemIcon
                                sx={{ minWidth: 28 }}
                                >
                                <CheckCircleIcon
                                    color="warning"
                                    fontSize="small"
                                />
                                </ListItemIcon>

                                <ListItemText
                                primary={feature}
                                primaryTypographyProps={{
                                    fontSize: 13,
                                }}
                                />
                            </ListItem>
                            ))}
                        </List>
                        </CardContent>

                        <Box sx={{ p: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                            mb: 1,
                            }}
                        >
                            Call Customer Support
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                            bgcolor: "#5E35B1",
                            }}
                        >
                            Request More Info
                        </Button>
                        </Box>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>


    );
};

export default BrokerPage;
