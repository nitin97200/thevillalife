import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "./Images/mango.jpg" },
    { url: "./Images/mango2.jpg" },
    { url: "./Images/mango3.jpg" },
    { url: "./Images/mango4.jpeg" },
    { url: "./Images/mango5.jpg" }

];

const SimpleSlider2 = () => {
    return (
        <div className="slider2-main">
            <div className="slider2-text">
                <h2 className="s2-text">
                    Iconic villas.<br />
                    Five-star everything.
                </h2>
                <p className="s2-p">Explore our featured villas. A collection of<br />
                    one of a kind villas. From simple luxury to<br />
                    unexpected grandeur.</p>
                <button className='b-villa'>Begin exploring </button>
            </div>
            <SimpleImageSlider
                width={519}
                height={500}
                images={images}
                showNavs={true}
            />
        </div>
        
    );
}
export default SimpleSlider2