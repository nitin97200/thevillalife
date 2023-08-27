import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Reason for Enqury</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          style={{width:"381px"}}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>I want to book a villa trip</MenuItem>
          <MenuItem value={20}>My wants to book a villa trip</MenuItem>
          <MenuItem value={30}>Media Inqury</MenuItem>
          <MenuItem value={40}> I want to start booking activities</MenuItem>
          <MenuItem value={50}> I want to cancel my trip</MenuItem>
          <MenuItem value={60}>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
