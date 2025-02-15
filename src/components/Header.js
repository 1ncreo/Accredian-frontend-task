import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: 'none' }}>
      <Toolbar>
        {/* Left Side: Logo and Courses Dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: '20px' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          </Typography>

          {/* Courses Dropdown */}
          <Button
            color="#2575fc"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClick}
            sx={{ textTransform: 'none', fontSize: '16px' }}
          >
            Courses
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Course 1</MenuItem>
            <MenuItem onClick={handleClose}>Course 2</MenuItem>
            <MenuItem onClick={handleClose}>Course 3</MenuItem>
          </Menu>
        </Box>

        {/* Right Side: Links and Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Typography variant="body1" sx={{ cursor: 'pointer' }}>
            Refer and Earn
          </Typography>
          <Typography variant="body1" sx={{ cursor: 'pointer' }}>
            Resources
          </Typography>
          <Typography variant="body1" sx={{ cursor: 'pointer' }}>
            About Us
          </Typography>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              borderColor: '#6a11cb',
              color: '#6a11cb',
              '&:hover': {
                borderColor: '#2575fc',
                color: '#2575fc',
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              backgroundColor: '#6a11cb',
              '&:hover': {
                backgroundColor: '#2575fc',
              },
            }}
          >
            Try Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;