import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const TestLayout = () => {
  const navigate = useNavigate();
  return <>

  <Box sx={{ mt: 8 }}>

    <Typography
      variant="h4"
      textAlign="center"
      fontWeight="bold"
      mb={4}
    >
      Compare Plans
    </Typography>

  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Features
          </TableCell>
          <TableCell>
            Connect
          </TableCell>
          <TableCell>
            Connect+
          </TableCell>
          <TableCell>
            Relax
          </TableCell>
          <TableCell>
            Relax+
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>
            Relationship Manager
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            Premium Promotion
          </TableCell>
          <TableCell>
            ✗
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            Legal Assistance
          </TableCell>
          <TableCell>
            ✗
          </TableCell>
          <TableCell>
            ✗
          </TableCell>
          <TableCell>
            ✗
          </TableCell>
          <TableCell>
            ✓
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>

  {/* COUPON */}

  <Paper sx={{ p: 4, mt: 5 }}>
    <Typography
      variant="h6"
      mb={2}
    >
      Have a Coupon?
    </Typography>

    <TextField
      fullWidth
      placeholder="Enter Coupon Code"
    />

    <Button
      variant="contained"
      sx={{ mt: 2 }}
    >
      Apply Coupon
    </Button>
  </Paper>

  {/* BUY */}

  <Box
    sx={{
      textAlign: "center",
      mt: 4,
    }}
  >
    <Button
      size="large"
      variant="contained"
      sx={{
        px: 8,
        py: 2,
      }}
      onClick={()=>(navigate('/payment'))}
    >
      Buy Selected Plan
    </Button>
  </Box>

  {/* TESTIMONIALS */}

  <Box sx={{ mt: 10 }}>
    <Typography
      variant="h4"
      textAlign="center"
      fontWeight="bold"
      mb={4}
    >
      Testimonials
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          ⭐⭐⭐⭐⭐
          <Typography mt={2}>
            DreamHomes helped me sell my
            property within 20 days.
          </Typography>
          <Typography
            fontWeight="bold"
            mt={2}
          >
            Amit Sharma
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          ⭐⭐⭐⭐⭐
          <Typography mt={2}>
            Amazing support and quality
            leads.
          </Typography>
          <Typography
            fontWeight="bold"
            mt={2}
          >
            Rahul Verma
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          ⭐⭐⭐⭐⭐
          <Typography mt={2}>
            Premium plan was worth every
            rupee.
          </Typography>
          <Typography
            fontWeight="bold"
            mt={2}
          >
            Priya Gupta
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>

  {/* FEATURED */}

  <Box sx={{ mt: 10, mb: 10 }}>
    <Typography
      variant="h4"
      textAlign="center"
      fontWeight="bold"
      mb={4}
    >
      Featured In
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={6} md={3}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          Times Realty
        </Paper>
      </Grid>

      <Grid item xs={6} md={3}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          Property News
        </Paper>
      </Grid>

      <Grid item xs={6} md={3}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          Dream TV
        </Paper>
      </Grid>

      <Grid item xs={6} md={3}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          Real Estate Today
        </Paper>
      </Grid>
    </Grid>
  </Box>

</Box>
  </>;
}

export default TestLayout;