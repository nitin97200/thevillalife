import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 400 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Select Role</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                >
                    <MenuItem >
                    </MenuItem>
                    <MenuItem value={21}>Customer</MenuItem>
                    <MenuItem value={22}>Agent</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}