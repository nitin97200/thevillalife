import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

export default function Team() {
    return (
        <div>
            <Header/>
            <div className='team-h'>
                <h1 className='team-h1' >
                    Bespoke travel moments in the
                    world’s most iconic villas
                </h1>
            </div>
            <div>
                <h5 className='VILLA-LIFE'>THE VILLA LIFE</h5>
                <h1 className='villa-h1'>We bring 20+ Years of Luxury Villa Rentals<br />
                    Experience and longstanding relationships with<br />
                    trusted suppliers and partners to make your trip a<br />
                    memorable one.</h1>
            </div>
            <div>
                <img className='item-img' src='./Images/mountain.jpeg' alt='' />
            </div>
            <div className='team-flex'>
                <div>
                    <h3>We give back.</h3>
                    <p style={{ fontSize: "17px" }}>We believe in giving back to the beautiful islands we<br />
                        operate in. We strive to enrich the lives of our guests<br />
                        and the communities we operate in.</p>
                </div>
                <div>
                    <h3>We value diversity.</h3>
                    <p style={{ fontSize: "17px" }}>We are committed to inclusivity in all aspects of our<br />
                        business and support diverse suppliers and vendors.</p>
                </div>
                <div>
                    <h3>We are guest-obsessed.</h3>
                    <p style={{ fontSize: "17px" }}>We value our guests and leave nothing to chance.<br />
                        Driven by passion and innovation, our tools ensure<br />
                        your one-of-a-kind trip is tailored to you.</p>
                </div>
            </div>
            <div className='term-back-clr'>
                <h1 className='term-back-clr-h'>“ Guests are treated with bespoke experiences—<br />
                    from a private photoshoot, to surf lessons—we go<br />
                    above and beyond to make their villa life<br />
                    memorable. ”
                    <p className='jaaz'>JAZZ, CO-FOUNDER</p>
                </h1>
               
            </div>
            <Footer/>
        </div>
    )
}
