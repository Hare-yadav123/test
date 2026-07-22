
import { Card, CardContent, Typography, Box,CardMedia } from "@mui/material";

export default function FloorPlans() {
  return (
    <Card sx={{
      mt: 3, 
      background: "#F8FAFC",
      width:"100%",
      maxWidth:700,
      maxHeight:500,
      mb:5
    }}>
      <CardContent>
        <Typography variant="h6" mb={0}>
          Floor Plans
        </Typography>
      </CardContent>

       <CardMedia
          component="img"
          src="http://127.0.0.1:8000/static/property/images/3BHK.png"
          sx={{
            width:"100%" ,
            borderRadius: 2,
            objectFit:"cover",
            height:"400px"
           }}
        />
    </Card>
  );
}