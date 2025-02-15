import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const HeroSection = ({ handleOpenModal }) => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 20px',
        borderRadius: '10px',
        marginTop: '50px',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '48px',
            marginBottom: '20px',
          }}
        >
          Refer & Earn
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '40px',
          }}
        >
          Refer a friend and earn exciting rewards!
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            padding: '12px 40px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '5px',
            backgroundColor: '#ff6f61',
            '&:hover': {
              backgroundColor: '#ff4a3d',
            },
          }}
        >
          Refer Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;