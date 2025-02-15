import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReferralModal = ({ open, handleClose }) => {
  const initialValues = {
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
  };

  const validationSchema = Yup.object({
    referrerName: Yup.string().required('Required'),
    referrerEmail: Yup.string().email('Invalid email').required('Required'),
    refereeName: Yup.string().required('Required'),
    refereeEmail: Yup.string().email('Invalid email').required('Required'),
    courseName: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        handleClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: '20px',
            color: '#333',
          }}
        >
          Refer a Friend
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              name="referrerName"
              label="Your Name"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '20px' }}
            />
            <ErrorMessage name="referrerName" component="div" />

            <Field
              as={TextField}
              name="referrerEmail"
              label="Your Email"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '20px' }}
            />
            <ErrorMessage name="referrerEmail" component="div" />

            <Field
              as={TextField}
              name="refereeName"
              label="Friend's Name"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '20px' }}
            />
            <ErrorMessage name="refereeName" component="div" />

            <Field
              as={TextField}
              name="refereeEmail"
              label="Friend's Email"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '20px' }}
            />
            <ErrorMessage name="refereeEmail" component="div" />

            <Field
              as={TextField}
              name="courseName"
              label="Course Name"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '20px' }}
            />
            <ErrorMessage name="courseName" component="div" />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '12px',
                fontWeight: 'bold',
                fontSize: '16px',
                backgroundColor: '#6a11cb',
                '&:hover': {
                  backgroundColor: '#2575fc',
                },
              }}
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default ReferralModal;