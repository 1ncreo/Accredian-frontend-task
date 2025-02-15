import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const TopOverlay = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e3f2fd', // Light blue background
        padding: '10px 0', // Padding for the overlay
        textAlign: 'center', // Center the content
      }}
    >
      <Typography variant="body1" sx={{ display: 'inline', fontSize: '16px' }}>
        Navigate your ideal career path with tailored expert advice
      </Typography>
      <Link
        href="#contact-expert" // Replace with the actual link
        sx={{
          marginLeft: '10px',
          color: '#1a73e8', // Blue color for the link
          fontWeight: 'bold',
          textDecoration: 'none', // Remove underline
          '&:hover': {
            textDecoration: 'underline', // Add underline on hover
          },
        }}
      >
        Contact Expert
      </Link>
    </Box>
  );
};

export default TopOverlay;