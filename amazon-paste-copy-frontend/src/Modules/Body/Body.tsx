import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Container,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';

const Body: React.FC = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [days, setDays] = useState<number>(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputTitle('');
    setInputValue('');
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDays(Number(event.target.value));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>   
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
          label="Title"
          variant="outlined"
          fullWidth
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <TextField
          label="Enter your text"
          variant="outlined"
          fullWidth
          multiline
          minRows={20}
          maxRows={25}
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
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">Select retention period:</Typography>
            <FormControl size="small">
              <InputLabel id="day-select-label">Duration</InputLabel>
              <Select
                labelId="day-select-label"
                value={days.toString()}
                label="Duration"
                onChange={handleChange}
              >
                <MenuItem value="1">24 hours</MenuItem>
                <MenuItem value="30">30 days</MenuItem>
                <MenuItem value="365">365 days</MenuItem>
              </Select>
            </FormControl>
            
          </Box>
          <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!inputValue.trim()}
            >
              Submit
            </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Body;