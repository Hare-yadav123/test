
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function PropertyOverview() {
  return (
    <Card sx={{ mt: 3 }}>

      <CardContent>

        <Typography variant="h6" mb={2}>
          Property Overview
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={6}>
            <Typography>Project Units</Typography>
            <Typography fontWeight="bold">56</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Area</Typography>
            <Typography fontWeight="bold">815 - 1565 sq.ft</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Possession</Typography>
            <Typography fontWeight="bold">Dec 2028</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Configurations</Typography>
            <Typography fontWeight="bold">2,3,4 BHK</Typography>
          </Grid>
{/* 
          <Grid item xs={6}>
            <Typography>Rent</Typography>
            <Typography fontWeight="bold">2,3,4 BHK, 1RK Sell and Rent</Typography>
          </Grid> */}
        </Grid>

      </CardContent>

    </Card>
  );
}