import React, { useState, useEffect } from "react";
import image1 from "../assets/image 1.png";
import image2 from "../assets/Image 2.jpeg";
import image3 from "../assets/image 3.png";

function Services() {
  const [margin, setMargin] = useState("10px");
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMargin("50px");
      } else if (window.innerWidth >= 768) {
        setMargin("30px");
      } else {
        setMargin("20px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial margin

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (index) => {
    if (hoveredButton === index) {
      return {
        backgroundColor: "#f07c14",
        color: "white",
        borderColor: "#f07c14",
        fontFamily: "'Georgia', serif",
      };
    }
    return {
      backgroundColor: "white",
      color: "#f07c14",
      borderColor: "#f07c14",
      fontFamily: "'Georgia', serif",
    };
  };

  const images = [image1, image2, image3];

  return (
    <div
      style={{
        marginLeft: margin,
        marginRight: margin,
        fontFamily: "'Georgia', serif",
      }}
    >
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Explore Services
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {["Ritual Services", "Spiritual Guidance", "Ceremonial Events"].map(
          (title, index) => (
            <div className="col" key={title}>
              <div
                className="card mb-4 rounded-3 shadow-sm"
                style={{ borderColor: "#f07c14" }}
              >
                <div className="card-body">
                  <img
                    src={images[index]} // Use corresponding image for each card
                    alt={title}
                    style={{
                      width: "100%", // Ensure image takes full width of the card
                      height: "200px", // Set a fixed height to ensure uniform size
                      objectFit: "cover", // Ensure the image covers the area without distortion
                      borderRadius: "0.25rem", // Optional: rounded corners
                      marginBottom: "15px", // Space between image and list
                    }}
                  />
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      {index === 0
                        ? "Puja, \nHavan, \nArathi"
                        : index === 1
                        ? "Personal Consultations & Advice"
                        : "Weddings, Naming, and Funerals"}
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg"
                    style={{ ...getButtonStyle(index), border: "2px solid" }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                              Coming Soon!
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Services;
