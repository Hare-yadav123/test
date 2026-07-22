import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
const data = [
  {
    name: "Kalubai Nagar",
    price: "₹6,031",
    range: "₹3,370 - ₹8,972",
    props: "36 Properties",
  },
  {
    name: "Siddhartha Nagar",
    price: "₹6,865",
    range: "₹4,508 - ₹14,714",
    props: "31 Properties",
  },
  {
    name: "Wageshwar Nagar",
    price: "₹7,311",
    range: "₹4,885 - ₹10,626",
    props: "21 Properties",
  },
  {
    name: "Savannah",
    price: "₹5,469",
    range: "₹5,070 - ₹5,153",
    props: "2 Properties",
  },
];

export default function TrendDetails() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const TrendPage = () =>{
    console.log("navigate to top property page with id:")
    setLoading(true);
    
    setTimeout(()=> navigate(`/price`),500)
  }
  return (
    <Box p={4} mt={10}>
      <Typography variant="h5" fontWeight="bold">
        Property Rates in for Apparments in - 2026
      </Typography>

      <Typography mt={1}>
        Avg. Price / Sqft: ₹6,614 (+4.34% YoY)
      </Typography>

      <Typography mt={1}>
        Price Range: ₹2,714 - ₹16,734
      </Typography>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Locality</TableCell>
            <TableCell>Avg Price</TableCell>
            <TableCell>Range</TableCell>
            <TableCell>Trend</TableCell>
            <TableCell>Properties</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={data?.location?.city}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.range}</TableCell>
              <TableCell style={{ color: "blue", cursor: "pointer" }} onClick={TrendPage}>
                send detail 
              </TableCell>
              <TableCell style={{ color: "blue", cursor: "pointer" }}>
                {row.props}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}