import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width:150,height:65,margin:4.5,}}
      style={{height:"60px",borderRadius:"50px 0px 0px 50px"}} 
      renderInput={(params) => <TextField {...params} placeholder="Where would you like to go" />}
    />
  );
}

const top100Films = [
   {label: 'All Destinations' },
   {label:"Barbados"},
   {label:"St. Martin"},
   {label:"St. Barts"},
];