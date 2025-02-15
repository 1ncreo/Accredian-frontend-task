import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
  // State for program dropdowns
  const [expandedProgram, setExpandedProgram] = useState(false);

  // Programs data
  const programCategories = {
    'Data Science and AI': [
      'Professional Certificate in Data Science',
      'Advanced Machine Learning Program',
      'AI for Business Leaders'
    ],
    'Product Management': [
      'Professional Certificate Program in Product Management',
      'Strategic Product Management',
      'Data Driven Product Management'
    ],
    'FinTech': [
      'FinTech Leadership Program',
      'Blockchain Fundamentals',
      'Digital Banking Solutions'
    ],
    'Business Analytics': [
      'Business Analytics Certification',
      'Data-Driven Decision Making',
      'Marketing Analytics'
    ],
    'Digital Transformation': [
      'Digital Business Transformation',
      'Digital Leadership Program',
      'Enterprise Digital Solutions'
    ],
    'Business Management': [
      'Strategic Management Program',
      'Business Leadership Certificate',
      'Operations Management'
    ],
    'Project Management': [
      'PMP Certification Training',
      'Agile Project Management',
      'Digital Project Leadership'
    ],
    'Senior Management': [
      'Executive Leadership Program',
      'Strategic Decision Making',
      'Change Management'
    ]
  };

  return (
    <Box sx={{ backgroundColor: '#282828', color: '#fff', padding: '40px 0' }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #fff',
          paddingBottom: '20px',
          marginBottom: '40px'
        }}>
          {/* Logo */}
          <img src="/logo-white.png" alt="Logo" style={{ height: '40px' }} />
          
          {/* Schedule Call Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1a73e8',
              color: '#fff',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#1557b0'
              }
            }}
          >
            Schedule a 1 on 1 call Now
          </Button>
        </Box>

        {/* Bottom Section */}
        <Grid container spacing={15}>
          {/* Programs Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
              Programs
            </Typography>
            {Object.entries(programCategories).map(([category, programs]) => (
              <Accordion 
                key={category}
                sx={{ 
                  backgroundColor: 'transparent',
                  color: '#fff',
                  '&:before': { display: 'none' },
                  boxShadow: 'none'
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                  <Typography>{category}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {programs.map((program) => (
                    <Typography 
                      key={program}
                      sx={{ 
                        marginBottom: '8px',
                        fontSize: '0.9rem',
                        color: '#ccc'
                      }}
                    >
                      {program}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
              Contact Us
            </Typography>
            <Typography sx={{ marginBottom: '10px' }}>
              <a href="mailto:admissions@accredian.com" style={{ color: '#fff', textDecoration: 'none' }}>
                Email us (For Data Science Queries): admissions@accredian.com
              </a>
            </Typography>
            <Typography sx={{ marginBottom: '10px' }}>
              Student Helpline: +91 7969322507
            </Typography>
            <Typography>
              Office Address:4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram<br />
              Haryana 122015
            </Typography>
          </Grid>

          {/* Accredian Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
              Accredian
            </Typography>
            {['About', 'Career', 'Blog', 'Admission Policy', 'Referral Policy', 'Privacy Policy', 'Terms of Service']
              .map((item) => (
                <Typography 
                  key={item}
                  sx={{ 
                    marginBottom: '10px',
                    '&:hover': { color: '#1a73e8', cursor: 'pointer' }
                  }}
                >
                  {item}
                </Typography>
              ))
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;