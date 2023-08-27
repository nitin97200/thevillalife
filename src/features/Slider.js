
import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SimpleSlider = () => {
    const labels = ['01. Iconic villas', '02. Unique experiences', '03. Local expertise'];
    const config = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '50px',
        initialSlide: 0,
        arrows: false,
        adaptiveHeight: true,
        appendDots: (dots) => (
            <ul>{dots}</ul>
        ),
        customPaging: function(i) {
            return (
              <p>
              {labels[i]}
              </p>
            );
          },
        }
  return (
    <Box className='mainbanner' >
    <Stack className='banner-stack'>
        <Slider {...config}>
            <Grid className='banner-img-1'>
                <img src='https://villalife-prod.s3.amazonaws.com/hmbnr_sld1.png' alt='header' loading='lazy' />
                <Box className='banner-head-box'>
                    <Grid className='banner-head-1'>
                        <Typography variant='h2'>
                            <span className='blk_span'>Iconic</span> Villas
                        </Typography>
                        <Typography variant='body2'>
                            Fully-equiped and vetted to exceptional standards, our villas leave nothing to
                            chance.
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid className='banner-img-1'>
                <img
                    src='https://villalife-prod.s3.amazonaws.com/nh_hjm_bnrnw2.png'
                    alt='header'
                    loading='lazy'
                />
                <Box className='banner-head-box'>
                    <Grid className='banner-head-1'>
                        <Typography variant='h2'>
                            <span className='blk_span'>Curated</span> Moments
                        </Typography>
                        <Typography variant='body2'>
                            Unique experiences with local professionals that make your trips personalized and
                            unforgettable.{' '}
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid className='banner-img-1'>
                <img
                    src='https://villalife-prod.s3.amazonaws.com/nh_hjm_bnrnw3.png'
                    alt='header'
                    loading='lazy'
                />
                <Box className='banner-head-box'>
                    <Grid className='banner-head-1'>
                        <Typography variant='h2'>
                            <span className='blk_span'>Memorable</span> People
                        </Typography>
                        <Typography variant='body2'>
                            We work with trusted local professionals to provide our guests with authentic travel
                            moments.
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </Slider>
    </Stack>
</Box>
  )
}
export default SimpleSlider;
