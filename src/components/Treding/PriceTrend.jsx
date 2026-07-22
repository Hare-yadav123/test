import { Box, Typography, Select, MenuItem, Card } from "@mui/material";
import { useState } from "react";
import TredingChart from "../Treding/TredingChart.jsx";
import  {trendData} from "../Data/tredData.js";
import  {useNavigate}  from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function PriceTrend() {
  const [year, setYear] = useState(1);
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  
    useEffect(()=>{
      axios.get(`https://web-production-2b5327.up.railway.app/api/business/${id}/`,
        {
          headers:{
            Authorization:`Bearer ${localStorage.getItem("access_token")}`
          }
        }
      )
      .then((res)=>{
        console.log('api location data :',res.data.data);
        setData(res.data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[id]);
  
  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold">
        House/Flates/Apartments Price Trends for {data?.businessname} <br />
     
      </Typography>

      {/* Top Right Dropdown */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Select value={year} onChange={(e) => setYear(e.target.value)}>
          <MenuItem value={1}>Last 1 Year</MenuItem>
          <MenuItem value={2}>Last 2 Years</MenuItem>
          <MenuItem value={3}>Last 3 Years</MenuItem>
        </Select>
      </Box>

      {/* Chart */}
      <Card  elevation={1}sx={{ p: 3, mt: 2, width: "100%", maxWidth: "1600px", mx: "auto" }}>
        <TredingChart data={trendData[year]} />
      </Card>

      {/* Bottom Info */}
      <Box mt={2}>
        <Typography color="green">▲ 4.71% Last 1 Year</Typography>
        <Typography>₹6.6K/sq.ft Avg. rate</Typography>
      </Box>

      {/* Link */}
      <Typography
        mt={2}
        sx={{ cursor: "pointer", color: "blue" }}
        onClick={() => navigate(`/details`)}
      >
        See price trends in {data?.location?.city} →
      </Typography>
    </Box>
  );
}