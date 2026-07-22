import { Container, Grid, Box } from "@mui/material";
import { toast } from "react-toastify";
import Gallary from './Gallary.jsx'
import Aboutproject from './Aboutproject.jsx';
import ContactSeller from "../AgentProfile/Contactform.jsx";
import Amenities from './Topamenities.jsx';
import Propertyspecification from './Propertyspecification.jsx';
import Review from './Review.jsx';
import PriceTrend from "../Treding/PriceTrend.jsx";
import QueryPage from "./QueryPage.jsx";
import Propertylocation from "./Propertylocation.jsx";

export const PropertyDetails = () => {

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#f5f5f5",
        mt: "50px",
      }}
    >
      <Grid 
      container
      spacing={2}
      >
        <Grid item sx={12} md={12}>
          <Gallary />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        // alignItems="flex-start"
      >
        {/* LEFT SIDE */}
        <Grid
          size={{ xs: 12, md: 8 }}>
  
          <Box mt={2}>
            <Aboutproject />
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 20,
            }}
          >
            <ContactSeller />
          </Box>
        </Grid>
      </Grid>
      <Grid
      container
      spacing={2}
      >

        <Amenities />
        <Propertyspecification />
        <Review />
        <PriceTrend />
        <Propertylocation />
        <QueryPage />
      </Grid>
    </Container>
  );
};

export default PropertyDetails;