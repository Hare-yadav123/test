import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  IconButton,
  Select,
  MenuItem
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const cities = [
  "Chennai",
  "Coimbatore",
  "Hyderabad",
  "Kodaikanal",
  "Dindigul",
  "Bengaluru",
  "Tiruppur"
];

const BuilderCard = () => {
  return (
    <Box p={2} mt={5}>
      {/* Top Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography fontWeight="bold">
          Showing 1 - 1 of 1
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Sort by:</Typography>
          <Select size="small" defaultValue="Relevance">
            <MenuItem value="Relevance">Relevance</MenuItem>
            <MenuItem value="Price">Price</MenuItem>
          </Select>
        </Stack>
      </Stack>

      <Typography variant="h6" fontWeight="bold" mb={2}>
        Residential Projects by Casagrand Builder Private Limited - 1246791
      </Typography>

      {/* Card */}
      <Card 
      elevation={1}
      sx={{ 
        borderRadius: 3,
        border:"1px solid rgba(0,0,0,0.1)",
        boxShadow: 0 ,
        width:{xs:'100%',md:'100%'}
       }}>
            <CardContent>
                <Stack direction="row" spacing={2}>
                    
                    {/* Logo */}
                    <Avatar
                    variant="rounded"
                    sx={{ width: 70, height: 70, bgcolor: "#f5a623" }}
                    >
                    C
                    </Avatar>

                    {/* Content */}
                    <Box flex={1}>
                        {/* Title */}
                        <Typography variant="h6" fontWeight="bold">
                            Casagrand Builder Private Limited
                        </Typography>

                        {/* Meta Info */}
                        <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                            <Typography variant="body2">
                            Year estd. <b>2004</b>
                            </Typography>

                            <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography variant="body2">
                                Projects <b>1</b>
                            </Typography>
                            <IconButton size="small">
                                <InfoIcon fontSize="small" />
                            </IconButton>
                            </Stack>
                        </Stack>

                        {/* Cities */}
                        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                            {cities.map((city, index) => (
                            <Chip
                                key={index}
                                label={city}
                                size="small"
                                variant="outlined"
                            />
                            ))}
                            <Chip label="2+" size="small" />
                        </Stack>

                        {/* Description */}
                        <Typography variant="body2" mt={2} color="text.secondary">
                            Casagrand Builder Private Limited is a real estate enterprise committed to building aspirations and delivering value. In the last fifteen years...
                            <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
                            {" "}Read more
                            </Typography>
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
      </Card>
    </Box>
  );
};

export default BuilderCard;