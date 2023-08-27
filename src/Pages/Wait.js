import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from '../Layout/Footer';
import Header1 from '../Layout/Header2';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
    return (

        <div>
            <Header1/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className='p-grid' container spacing={0}>
                    <Grid className='left-grid' item xs={6}>

                        <h1 className='d-villa'>Invest in your<br /> Dream Villa</h1>
                        <p className='p-villa'>
                            Make empowered investing decisions through our co-<br />
                            ownership program. Invest in a fully managed and hand-picked<br />
                            Luxury Villa and grow your real estate portfolios. Join the Wait<br />
                            List to get early Beta Access!
                        </p>
                        <button className='b-villa'>Join the Waitlist</button>
                    </Grid>
                    <Grid className='right-grid' item xs={6}>
                        <img className='w-img' src='./Images/homess.jpg' alt='' />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}
