import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Container, Stack, Typography, TextField, Button } from '@mui/material';

const auth = getAuth();

const ForgotPasswordFormBlock = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailVal = email; // Access the email value directly from the email state
      sendPasswordResetEmail(auth, emailVal)
        .then(() => {
          alert('Password reset email sent. Please check your email.');
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };
  

  return (
    <Container maxWidth="xs" sx={{ pt: 8 }}>
      <Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'semibold' }}>
              Forgot Password
            </Typography>
            <TextField
              onChange={handleEmailChange}
              type="email"
              label="Email"
              value={email}
              variant="filled"
              size="small"
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth>
              Reset Password
            </Button>
            <Link to="/login"><span class='back-to-login'>Back to Login</span></Link>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default ForgotPasswordFormBlock;
