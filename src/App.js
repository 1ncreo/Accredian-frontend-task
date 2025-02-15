import React, { useRef, useState } from 'react';
import { Container, Box, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the expand icon
import Header from './components/Header';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';
import TopOverlay from './components/TopOverlay'; // Import the TopOverlay component
import './styles.css'; // Import the external CSS file

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Add these handlers near other functions
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  // Create refs for each section
  const referRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqsRef = useRef(null);
  const supportRef = useRef(null);

  // State to track the active link
  const [activeLink, setActiveLink] = useState('refer');

  // State for Benefits Section
  const [showTable, setShowTable] = useState(false); // Controls table visibility
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Tracks button click state
  const [showAllRows, setShowAllRows] = useState(false); // Controls "Show More" functionality

  // State for FAQ Section
  const [activeFAQ, setActiveFAQ] = useState('eligibility'); // Tracks active FAQ category
  const [expanded, setExpanded] = useState(null); // Tracks expanded FAQ question

  // Table data
  const programsData = [
    { program: 'Professional Certificate Program in Product Management', referrerBonus: 'Rs. 5,000', referreeBonus: 'Rs. 2,000' },
    { program: 'PG Certificate Program in Strategic Product Management', referrerBonus: 'Rs. 4,000', referreeBonus: 'Rs. 1,500' },
    { program: 'Executive Program in Data Driven Product Management', referrerBonus: 'Rs. 3,000', referreeBonus: 'Rs. 1,000' },
    { program: 'Executive Program in Product Management', referrerBonus: 'Rs. 6,000', referreeBonus: 'Rs. 2,500' },
    { program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: 'Rs. 6,000', referreeBonus: 'Rs. 2,500' },
    { program: 'Advanced Certification in Product Management', referrerBonus: 'Rs. 6,000', referreeBonus: 'Rs. 2,500' },
    { program: 'Executive Program in Product Management and Project Management', referrerBonus: 'Rs. 6,000', referreeBonus: 'Rs. 2,500' },
  ];

  // FAQ data
  const faqData = {
    eligibility: [
      { question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?', answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.' },
      { question: 'Can I refer myself?', answer: 'No, self-referrals are not allowed.' },
      { question: 'Is there a limit to the number of referrals I can make?', answer: 'No, there is no limit to the number of referrals.' },
    ],
    howToUse: [
      { question: 'How do I submit a referral?', answer: 'You can submit a referral through the referral section on our website.' },
      { question: 'How will I know if my referral is successful?', answer: 'You will receive an email notification once your referral enrolls in a program.' },
      { question: 'Can I track my referral status?', answer: 'Yes, you can track your referral status in your dashboard.' },
    ],
    termsAndConditions: [
      { question: 'What are the terms and conditions for the referral program?', answer: 'Referrals must enroll in a paid program to qualify for rewards.' },
      { question: 'When will I receive my referral bonus?', answer: 'You will receive your bonus 30 days after your referral enrolls.' },
      { question: 'Can I refer someone who has already enrolled?', answer: 'No, only new enrollments are eligible for rewards.' },
    ],
  };

  // Function to scroll to a section and set the active link
  const scrollToSection = (ref, linkName) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(linkName);
    } else {
      console.error(`Ref for ${linkName} is not attached to a valid DOM element.`);
    }
  };

  // Function to handle button click in Benefits Section
  const handleButtonClick = () => {
    setShowTable(!showTable); // Toggle table visibility
    setIsButtonClicked(!isButtonClicked); // Toggle button click state
  };

  // Function to handle "Show More" button click
  const handleShowMoreClick = () => {
    setShowAllRows(!showAllRows); // Toggle showing all rows
  };

  // Function to handle FAQ category click
  const handleFAQClick = (category) => {
    setActiveFAQ(category);
    setExpanded(null); // Reset expanded question when category changes
  };

  // Function to handle FAQ question click
  const handleQuestionClick = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expanded question
  };

  return (
    <div>
      {/* Top Overlay (outside the Container) */}
      <TopOverlay />

      {/* Container for the rest of the content */}
      <Container maxWidth="lg" sx={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <Header />
        {/* First Curved Rectangle Box */}
        <Box className="curved-box" sx={{ marginTop: '40px' }}> {/* Add spacing here */}
          <Typography
            className={`curved-box-text ${activeLink === 'refer' ? 'active' : ''}`}
            onClick={() => scrollToSection(referRef, 'refer')}
          >
            Refer
          </Typography>
          <Typography
            className={`curved-box-text ${activeLink === 'benefits' ? 'active' : ''}`}
            onClick={() => scrollToSection(benefitsRef, 'benefits')}
          >
            Benefits
          </Typography>
          <Typography
            className={`curved-box-text ${activeLink === 'faqs' ? 'active' : ''}`}
            onClick={() => scrollToSection(faqsRef, 'faqs')}
          >
            FAQs
          </Typography>
          <Typography
            className={`curved-box-text ${activeLink === 'support' ? 'active' : ''}`}
            onClick={() => scrollToSection(supportRef, 'support')}
          >
            Support
          </Typography>
        </Box>

        {/* Second Curved Rectangle Box */}
        <Box className="second-curved-box" sx={{ marginBottom: '40px' }}> {/* Add spacing below */}
          <Grid container alignItems="center">
            {/* Grouped Text Box */}
            <Grid item xs={8} className="grouped-text">
              <Typography variant="h2">Let's Learn and Earn</Typography>
              <Typography variant="body1">
                Get a chance to win up-to <strong>Rs. 15,000</strong>
              </Typography>
              {/* Refer Now Button Container */}
              <Box sx={{ marginTop: '40px' }}> {/* Move the button lower */}
                <Button
                  variant="contained"
                  onClick={handleModalOpen}
                  sx={{
                    backgroundColor: '#1a73e8', // Blue background
                    color: '#fff', // White text
                    fontSize: '20px',
                    fontWeight: 'bold',
                    padding: '12px 40px',
                    borderRadius: '5px',
                    textTransform: 'none', // Prevent uppercase
                    '&:hover': {
                      backgroundColor: '#1557b0', // Darker blue on hover
                    },
                  }}
                >
                  Refer Now
                </Button>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={4} className="grouped-image">
              <img src="/earning-image.png" alt="Earning" />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Refer Section (outside the Container) */}
      <Box
        ref={referRef}
        sx={{
          backgroundColor: '#e3f2fd', // Light blue background for the entire section
          padding: '100px 0', // Add vertical padding
          textAlign: 'center', // Center the heading
          width: '100%', // Span the full width
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold', // Make the entire heading bold
            marginBottom: '20px', // Add spacing below the heading
          }}
        >
          How Do I{' '}
          <Box component="span" sx={{ color: '#1a73e8' }}>
            Refer
          </Box>
        </Typography>

        {/* Image Container */}
        <Box
          sx={{
            position: 'relative', // Required for absolute positioning of text
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px', // Spacing below the image
          }}
        >
          <img
            src="/r-image.png"
            alt="Refer Steps"
            style={{
              maxWidth: '60%', // Make the image smaller
              height: 'auto',
              marginTop: '-20px', // Push the image upward
            }}
          />
          
          {/* Text Overlay for Circle 1 */}
          <Box
            sx={{
              position: 'absolute',
              top: '53%', // Adjust based on the circle's position
              left: '29%', // Adjust based on the circle's position
              textAlign: 'center',
              width: '150px', // Adjust based on the circle's size
            }}
          >
            <img
              src="fr.png" // Replace with your image path
              alt="Step 1"
              style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust image size
            />
            <Typography variant="body2">
              Submit referrals easily via our website’s referral section
            </Typography>
          </Box>

          {/* Text Overlay for Circle 2 */}
          <Box
            sx={{
              position: 'absolute',
              top: '63%', // Adjust based on the circle's position
              left: '50%', // Adjust based on the circle's position
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '150px', // Adjust based on the circle's size
            }}
          >
            <img
              src="list.png" // Replace with your image path
              alt="Step 1"
              style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust image size
            />
            <Typography variant="body2">
              Earn rewards once your referral joins an Accredian program.
            </Typography>
          </Box>

          {/* Text Overlay for Circle 3 */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%', // Adjust based on the circle's position
              right: '30%', // Adjust based on the circle's position
              textAlign: 'center',
              width: '150px', // Adjust based on the circle's size
            }}
          >
            <img
              src="/wallet.png" // Replace with your image path
              alt="Step 1"
              style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust image size
            />
            <Typography variant="body2">
              Referrer receives a bonus 30 days after program enrollment.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
          <Button
            variant="contained"
            onClick={handleModalOpen}
            sx={{
              backgroundColor: '#1a73e8', // Blue background
              color: '#fff', // White text
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '12px 40px',
              borderRadius: '5px',
              textTransform: 'none', // Prevent uppercase
              '&:hover': {
                backgroundColor: '#1557b0', // Darker blue on hover
              },
            }}
          >
            Refer Now
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ paddingLeft: '24px', paddingRight: '24px', marginTop: '40px' }}>
        {/* Benefits Section */}
        <Box
          ref={benefitsRef}
          sx={{
            padding: '100px 0', // Add vertical padding
            textAlign: 'center', // Center the heading
            width: '100%', // Span the full width
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold', // Make the entire heading bold
              marginBottom: '20px', // Add spacing below the heading
            }}
          >
            What Are The{' '}
            <Box component="span" sx={{ color: '#1a73e8' }}>
              Referral Benefits
            </Box>
            ?
          </Typography>

          {/* "All Programs" Button and Table Container */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '20px', paddingLeft: '24px' }}>
            {/* "All Programs" Button */}
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                backgroundColor: isButtonClicked ? '#1a73e8' : '#fff', // White by default, blue when clicked
                color: isButtonClicked ? '#fff' : '#1a73e8', // Blue text by default, white when clicked
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                textTransform: 'none', // Prevent uppercase
                border: '1px solid #1a73e8', // Add border
                '&:hover': {
                  backgroundColor: '#1a73e8', // Blue on hover
                  color: '#fff', // White text on hover
                },
              }}
            >
              All Programs
              <span style={{ marginLeft: '10px', fontSize: '18px' }}>▶</span> {/* Arrow */}
            </Button>

            {/* Table to display program details */}
            {showTable && (
              <Box sx={{ position: 'relative' }}>
                <TableContainer
                  component={Paper}
                  sx={{
                    border: '1px solid #1a73e8', // Add border to the table
                    maxWidth: '900px', // Limit table width
                  }}
                >
                  <Table>
                    <TableHead sx={{ backgroundColor: '#e3f2fd' }}> {/* Light blue shade for table title */}
                      <TableRow>
                        <TableCell sx={{ color: '#0d47a1', fontWeight: 'bold', borderRight: '1px solid #1a73e8', width: '60%' }}>Program</TableCell>
                        <TableCell sx={{ color: '#0d47a1', fontWeight: 'bold', borderRight: '1px solid #1a73e8', width: '20%' }}>Referrer Bonus</TableCell>
                        <TableCell sx={{ color: '#0d47a1', fontWeight: 'bold', width: '20%' }}>Referree Bonus</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {programsData.slice(0, showAllRows ? programsData.length : 7).map((row, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ borderRight: '1px solid #1a73e8' }}>{row.program}</TableCell>
                          <TableCell sx={{ borderRight: '1px solid #1a73e8' }}>{row.referrerBonus}</TableCell>
                          <TableCell>{row.referreeBonus}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* "Show More" Button */}
                {!showAllRows && (
                  <Button
                    variant="text"
                    onClick={handleShowMoreClick}
                    sx={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent background
                      color: '#1a73e8', // Blue text
                      fontSize: '14px',
                      fontWeight: 'bold',
                      textTransform: 'none', // Prevent uppercase
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly less translucent on hover
                      },
                    }}
                  >
                    Show More <span style={{ marginLeft: '5px', fontSize: '14px' }}>▼</span> {/* Arrow */}
                  </Button>
                )}
              </Box>
            )}
          </Box>

          {/* "Refer Now" Button at the end of the Benefits Section */}
          <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
            <Button
              variant="contained"
              onClick={handleModalOpen}
              sx={{
                backgroundColor: '#1a73e8', // Blue background
                color: '#fff', // White text
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '12px 40px',
                borderRadius: '5px',
                textTransform: 'none', // Prevent uppercase
                '&:hover': {
                  backgroundColor: '#1557b0', // Darker blue on hover
                },
              }}
            >
              Refer Now
            </Button>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box
          ref={faqsRef}
          sx={{
            padding: '100px 0', // Add vertical padding
            textAlign: 'center', // Center the heading
            width: '100%', // Span the full width
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold', // Make the entire heading bold
              marginBottom: '20px', // Add spacing below the heading
            }}
          >
            Frequently Asked{' '}
            <Box component="span" sx={{ color: '#1a73e8' }}>
              Questions
            </Box>
          </Typography>

          {/* FAQ Content */}
          <Box sx={{ display: 'flex', gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
            {/* FAQ Categories */}
            <Box
              sx={{
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  border: '1px solid #1a73e8',
                  borderRadius: '5px',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: activeFAQ === 'eligibility' ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
                onClick={() => handleFAQClick('eligibility')}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: activeFAQ === 'eligibility' ? 'bold' : 'normal',
                    color: '#1a73e8',
                  }}
                >
                  Eligibility
                </Typography>
              </Box>
              <Box
                sx={{
                  border: '1px solid #1a73e8',
                  borderRadius: '5px',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: activeFAQ === 'howToUse' ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
                onClick={() => handleFAQClick('howToUse')}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: activeFAQ === 'howToUse' ? 'bold' : 'normal',
                    color: '#1a73e8',
                  }}
                >
                  How to Use?
                </Typography>
              </Box>
              <Box
                sx={{
                  border: '1px solid #1a73e8',
                  borderRadius: '5px',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: activeFAQ === 'termsAndConditions' ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
                onClick={() => handleFAQClick('termsAndConditions')}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: activeFAQ === 'termsAndConditions' ? 'bold' : 'normal',
                    color: '#1a73e8',
                  }}
                >
                  Terms and Conditions
                </Typography>
              </Box>
            </Box>

            {/* FAQ List */}
            <Box sx={{ width: '80%', textAlign: 'left' }}>
              {faqData[activeFAQ].map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={() => handleQuestionClick(index)}
                  sx={{ marginBottom: '10px', boxShadow: 'none', border: '1px solid #e0e0e0', borderRadius: '5px' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: expanded === index ? '#e3f2fd' : '#fff',
                      '&:hover': { backgroundColor: '#e3f2fd' },
                    }}
                  >
                    <Typography variant="h7" sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ color: '#555' }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
        
        {/* Support Section */}
        {/* Contact Us Section */}
        <Box
          ref={supportRef}
          sx={{
            padding: '40px 0', // Add vertical padding
            textAlign: 'center', // Center the heading
            width: '100%', // Span the full width
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold', // Make the entire heading bold
              marginBottom: '20px', // Add spacing below the heading
            }}
          >
          </Typography>

          {/* Curved Rectangle Box */}
          <Box
            sx={{
              backgroundColor: '#1A73E8', // Light blue background
              borderRadius: '15px', // Curved edges
              padding: '40px', // Increased padding for a larger box
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '1000px', // Increased width
              margin: '0 auto', // Center the box
            }}
          >
            {/* Left Side: Headphone Image */}
            <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
              <img src="/headphone.png" alt="Headphone" style={{ width: '100px', height: '100px' }} /> {/* Larger image */}
            </Box>

            {/* Middle: Text */}
            <Box sx={{ width: '60%', textAlign: 'left' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', fontSize: '20px' }}> {/* Larger text */}
                Want to delve deeper into the program?
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', fontSize: '16px', marginTop: '10px' }}> {/* Larger text */}
                Share your details to receive expert insights from our program team!
              </Typography>
            </Box>

            {/* Right Side: Get in Touch Button */}
            <Box sx={{ width: '20%' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#0d47a1', // Darker blue background
                  color: '#fff', // White text
                  fontSize: '16px',
                  fontWeight: 'bold',
                  padding: '12px 24px', // Larger button
                  borderRadius: '5px',
                  textTransform: 'none', // Prevent uppercase
                  '&:hover': {
                    backgroundColor: '#0b3d91', // Even darker blue on hover
                  },
                }}
              >
                Get in Touch <span style={{ marginLeft: '10px', fontSize: '18px' }}>→</span> {/* Right arrow */}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <ReferralModal open={modalOpen} handleClose={handleModalClose} />
      <Footer />
    </div>
  );
};

export default App;