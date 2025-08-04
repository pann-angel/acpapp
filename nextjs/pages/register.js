import React from "react";
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';


export default function AuthPage() {
  return (
    <Grid container spacing={2} style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
     
      {/* Login Section */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
            />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>


      {/* Register Section */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              type="password"
            />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
