
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
<<<<<<< HEAD
          src="https://web-production-2b5327.up.railway.app/static/property/images/3BHK.png"
=======
          src="http://127.0.0.1:8000/static/property/images/3BHK.png"
>>>>>>> cb63a18ddda248b2650ce42d49997ae2d717fdc0
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