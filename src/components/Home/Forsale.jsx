import React, { useEffect, useState } from "react";
import axios from "axios";

import {
Box,
Card,
CardMedia,
Typography,
Button,
Stack,
CircularProgress,
} from "@mui/material";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

const Home = () => {
const [loading, setLoading] = useState(true);
const [fixdata, setFixData] = useState([]);
const [error, setError] = useState("");

const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
        try {
        setLoading(true);

            const response = await axios.get(
            "http://127.0.0.1:8000/api/business/"
            );

            setFixData(response.data.data || []);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchProperties();
    }, []);

    const handleNavigateTrustedPage = (id) => {
    navigate(`/Trustedpagelayout/${id}`);
    };

    if (loading) {
    return (
        <Box
        sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
        }}
        > <CircularProgress /> </Box>
        );
        }

        if (error) {
        return ( <Typography color="error" textAlign="center">
        {error} </Typography>
        );
        }

        return (
            <Box
            sx={{
            maxWidth: "1100px",
            mx: "auto",
            py: 10,
            }}
            >
                <Box>
                    <Typography variant="h6" fontWeight="light" mb={2}>
                        Homes / Plots / For Sell
                    </Typography>

                </Box>
            {fixdata.map((item) => (
                <Card
                key={item.id}
                onClick={() => handleNavigateTrustedPage(item.id)}
                sx={{
                display: "flex",
                mb: 3,
                p: 2,
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                boxShadow: "none",
                "&:hover": {
                boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
                },
                }}
                >
                    <CardMedia
                        component="img"
                        image={
                        item?.images_data?.[0]?.image
                            ? `http://127.0.0.1:8000${item.images_data[0].image}`
                            : ""
                        }
                        alt={item.businessname}
                        sx={{
                        width: 320,
                        height: 230,
                        borderRadius: 2,
                        objectFit: "cover",
                        flexShrink: 0,
                        }}
                    />

                    <Box
                        sx={{
                        flex: 1,
                        px: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {item.businessname}
                            </Typography>

                            <Typography
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {item.location?.city}, {item.location?.state}
                            </Typography>

                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 3,
                                }}
                            >
                                <CurrencyRupeeIcon />
                                {item.price}
                            </Typography>

                            {/* Information Row */}

                            <Box
                                sx={{
                                display: "flex",
                                gap: 5,
                                flexWrap: "wrap",
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Property Type
                                    </Typography>

                                    <Typography fontWeight={600}>
                                        {item.propertytype?.property_typename}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Status
                                    </Typography>

                                    <Typography fontWeight={600}>
                                        {item.status?.property_statusname}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Location
                                    </Typography>

                                    <Typography fontWeight={600}>
                                        {item.location?.city}
                                    </Typography>
                                </Box>
                            </Box>

                        {/* Tags */}

                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                mt: 3,
                                flexWrap: "wrap",
                                }}
                            >
                                <Box
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                }}
                                >
                                Verified
                                </Box>

                                <Box
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                }}
                                >
                                Premium Property
                                </Box>

                                <Box
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                }}
                                >
                                Ready To Move
                                </Box>
                            </Stack>
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                        }}
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Updated Recently
                            </Typography>

                            <Button
                                variant="contained"
                                onClick={(e) => {
                                e.stopPropagation();
                                }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Box>
                </Card>
            ))}
        </Box>
    )
};

export default Home;




