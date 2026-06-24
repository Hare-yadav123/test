import { Container, Grid, Box } from "@mui/material";

import Topprojectsection from "./Toppropertsection2.jsx";
import ContactSection from "./ContactSection.jsx";
import Logosection from "./Logosection.jsx";
import Contectform from '../AgentProfile/Contactform.jsx'
export const PropertyDetails = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: "50px",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
      >
        {/* LEFT SIDE */}
        <Grid
          size={{ xs: 12, md: 8 }}
        >
          <Logosection />

          <Box mt={2}>
            <Topprojectsection />
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
            <ContactSection />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyDetails;