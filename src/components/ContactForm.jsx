import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress
} from '@mui/material';
import { sendContactEmail } from '../AdianceAdmin/api/blogs';

const EMS_API_URL = `${process.env.REACT_APP_API_URL || "https://backend.adiance.com:443/api"}/crm-lead`;

const ContactForm = ({ redirectUrl = "/thank-you" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   try {
  //     await sendContactEmail(formData);
  //     navigate(redirectUrl);
  //     // setSubmitStatus('success');
  //     setFormData({
  //       fullName: '',
  //       email: '',
  //       phone: '',
  //       message: ''
  //     });
  //   } catch (error) {
  //     setSubmitStatus('error');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Send the Contact Email (as you were doing)
      const emailPromise = sendContactEmail(formData);

      // 2. Prepare and send CRM Payload
      const crmPayload = {
        name: formData.fullName, // Blog uses fullName
        mobile: formData.phone,
        email: formData.email,
        company: "N/A",           // Default for blog leads
        location: "N/A",          // Default for blog leads
        clientCategory: "Dealer",
        industryType: "N/A",
        source: "Adiance Website-(Blog)", // Changed source to track origin
        customerType: "Dealer",
        requirement: [],
        customerQuantity: "0", // Default for blog leads,
        domain: "Adiance",
      };

      // Using axios for CRM as seen in your contact page code
      const crmPromise = axios.post(EMS_API_URL, crmPayload);

      // 3. Wait for both to finish
      await Promise.all([emailPromise, crmPromise]);

      // Success Actions
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Navigate to success/redirect URL
      navigate(redirectUrl);

    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        maxHeight: '320px',
        overflowY: 'auto',
        pr: 1,
        '&::-webkit-scrollbar': { width: '6px' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c7c7c7',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontSize: '18px',
          color: '#1a1a1a',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Send Us a{' '}
        <span style={{ color: '#BF0603' }}>Message</span>
      </Typography>

      {submitStatus === 'success' && (
        <Alert severity="success" sx={{ marginBottom: '16px' }}>
          Thank you! Your message has been sent successfully.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert severity="error" sx={{ marginBottom: '16px' }}>
          Sorry, there was an error sending your message. Please try again.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="fullName"
          label="Full name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          sx={{
            marginBottom: '16px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '14px',
              padding: '12px 14px',
            },
          }}
        />

        <TextField
          fullWidth
          name="email"
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
          sx={{
            marginBottom: '16px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '14px',
              padding: '12px 14px',
            },
          }}
        />

        <TextField
          fullWidth
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          sx={{
            marginBottom: '16px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '14px',
              padding: '12px 14px',
            },
          }}
        />

        <TextField
          fullWidth
          name="message"
          label="Write your message"
          value={formData.message}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-input': {
              fontSize: '14px',
              padding: '12px 14px',
            },
          }}
        />

        <Button
          type="submit"
          // fullWidth
          variant="contained"
          justifyContent="center"
          alignItems="center"
          disabled={isSubmitting}
          sx={{
            backgroundColor: '#BF0603',
            color: '#ffffff',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#850606ff',
            },
            '&:disabled': {
              backgroundColor: '#cccccc',
            },
          }}
        >
          {isSubmitting ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            'Submit'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;