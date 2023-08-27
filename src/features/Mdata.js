import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



export default function BasicGrid() {
    return (
        <Box className='grid1' sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <img className='black-img' src='./Images/black.png' alt=''/>
                    <h2>James Howard</h2>
                    <p>Private chef, Barbados</p>
                </Grid>
                <Grid item xs={6}>
                    <img className='black2-img' src='./Images/black2.png' alt=''/>
                    <h1 className='black-h'>Memorable people.<br />
                        All-star team
                    </h1>
                    <p className='black-p'>Our team knows a thing or two about luxury,
                        and our longstanding relationships with local
                        professionals provide our guests with authentic
                        travel moments.</p>
                       <Link to="/Team"><button className='b-villa'>Meet our team </button></Link> 
                        
                </Grid>
            </Grid>
        </Box>
    );
}
