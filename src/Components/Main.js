import React from 'react'
import SimpleSlider2 from '../features/Slider2'
import SimpleSlider from '../features/Slider'
import SimpleSlider3 from '../features/Slidr3'
import BasicGrid from '../features/Mdata'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

export default function Main() {
    return (
        <div className=''>
            <Header />
            <SimpleSlider />
            <SimpleSlider2 />
            <SimpleSlider3 />
            <BasicGrid />
            <Footer />
        </div>
    )
}
