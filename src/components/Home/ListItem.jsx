import { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

export default function CityMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [city, setCity] = useState("");

  return (
    <>
      <Box>
        <Card
        sx={{
          width:CARD_WIDTH,
          height:170,
          display: "flex",
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: 1,
          transition: "transform 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 8px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={item}
          sx={{
            height: 170,
            width: 160,
            objectFit: "cover",
            flexShrink:0
          }}
        />

        <CardContent>
          <Stack spacing={1}>
            <Typography>Nerul Home</Typography>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              2,3,4BHK Flats
            </Typography>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              Pune , Wagholi 412207
            </Typography>
            <Typography
            sx={{ display:"flex", alignItems:"center" }}
            >
              <CurrecyRupeeIcon fontSize="small" 
              sx={{
              fontWeight:20,
              fontSize:"17px", 
              color:"rgba(0,0,0,0.8)"
              }}
              /> 80
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      
      </Box>
    </>
  );
}
