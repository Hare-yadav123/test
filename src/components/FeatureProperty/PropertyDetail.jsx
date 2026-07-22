
import { Box, Container, Grid } from "@mui/material";
import { toast } from "react-toastify"
import ContactSeller from "./ContactySeller.jsx";
import PropertyHeader from "./PropertyHeader.jsx"
import PropertyGallery from "./PropertyGallery.jsx";
import PropertyHighlights from "./PropertyHighlights.jsx"
import PropertyOverview from "./PropertyOverview.jsx";
import PropertyFloorPlans from "./PropertyFloorPlans.jsx";

export const PropertyDetails = () => {
  return (
    <Container  maxWidth="lg"
    sx={{ 
      mt:"100px",
      px:{xs:2,md:0},
     }}
     >
      {/* Header */}
      <PropertyHeader />

      {/* Image + Contact */}
      <Grid container spacing={4}  >
        
        <Grid item xs={12} md={8}  >
          <PropertyGallery />
          <PropertyHighlights />
          <PropertyOverview />
          <PropertyFloorPlans />
        </Grid>

        <Grid item xs={12} md={4} position={"sticky"} mt={"0px"} alignSelf={"flex-start"}>
        <ContactSeller />
      </Grid>

      </Grid>
    </Container>
  );
}

export default PropertyDetails;