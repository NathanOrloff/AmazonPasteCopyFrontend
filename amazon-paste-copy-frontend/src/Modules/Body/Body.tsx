import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from '@mui/material';

const Body: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Text Input Demo
        </Typography>
        
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <TextField
            label="Enter your text"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            maxRows={8}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={!inputValue.trim()}
          >
            Submit
          </Button>
        </Box>

        {submittedValue && (
          <Box sx={{ mt: 4, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="h6">You submitted:</Typography>
            <Typography sx={{ mt: 1 }}>{submittedValue}</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Body;