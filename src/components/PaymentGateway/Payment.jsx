import React, { useState } from "react";

import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress
} from "@mui/material";

import axios from "axios";

const RazorpayPayment = () => {

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(500);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: ""
  });

  const paymentMethods = [
    "UPI",
    "Credit / Debit Card",
    "Netbanking",
    "Wallet",
    "EMI"
  ];

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {

    try {

      setLoading(true);

      // CREATE ORDER

      const orderResponse = await axios.post(
        "https://web-production-2b5327.up.railway.app/api/payment/",
        {
          amount: amount,
          email:formData.email
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      );

      const orderData = orderResponse.data;

      // RAZORPAY OPTIONS

      const options = {

        key: orderData.key,

        amount: orderData.amount,

        currency: "INR",

        name: "My Company",

        description: "Purchase Payment",

        order_id: orderData.order_id,

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact
        },

        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
          emi: true,
        },
        config: {
          display: {
            preferences: {
              show_default_blocks: true
            }
          }
        },

        handler: async function (response) {

          try {

            await axios.post(
              "https://web-production-2b5327.up.railway.app/api/verify_payment/",
              {
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature
              }
            );

            alert("Payment Successful");

          } catch (error) {

            console.log(error);
            console.log(error.response);
            console.log(error.response.data);
            console.log(error.response.status);

            alert("Verification Failed");
          }
        },

        theme: {
          color: "#0f172a"
        }
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.log(error);

      alert("Payment Failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        display:"flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >

      <Grid container spacing={4}>

        {/* LEFT SIDE */}

        <Grid item xs={12} md={4}>

          {/* <Paper sx={{ padding: 3 }}>

            <Typography variant="h6" gutterBottom>
              Payment Methods
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <List>

              {
                paymentMethods.map((method, index) => (

                  <ListItem key={index} disablePadding>

                    <ListItemButton>

                      <ListItemText primary={method} />

                    </ListItemButton>

                  </ListItem>
                ))
              }

            </List>

          </Paper> */}

        </Grid>

        {/* RIGHT SIDE */}

        <Grid item xs={12} md={4}>

          <Paper sx={{ padding: 4 }}>

            <Typography variant="h5" gutterBottom>
              Bye Now - Plans/Home/Plot/Apparment/Flat
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <TextField
              label="Full Name"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Mobile Number"
              name="contact"
              fullWidth
              margin="normal"
              value={formData.contact}
              onChange={handleChange}
            />

            <TextField
              label="Amount"
              type="number"
              fullWidth
              margin="normal"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />

            <Box mt={4}>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handlePayment}
                disabled={loading}
              >

                {
                  loading
                  ?
                  <CircularProgress
                    size={24}
                    color="inherit"
                  />
                  :
                  `Pay ₹${amount}`
                }

              </Button>

            </Box>

          </Paper>

        </Grid>

      </Grid>

    </Box>
  );
};

export default RazorpayPayment;