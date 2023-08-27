import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./Images/tenis.png" },
  { url: "Images/beach.png" },
  { url: "Images/teen.png" },

];

const SimpleSlider3 = () => {
  return (
    <div className="slider3">
      <SimpleImageSlider
        width={1519}
        height={700}
        images={images}
        showNavs={true}
      />
    </div>
  );
}
export default SimpleSlider3;