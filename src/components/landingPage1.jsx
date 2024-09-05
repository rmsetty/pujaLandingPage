import React from "react";
import candle from "../assets/candle.png";
import landingPageEx from "../assets/landingPageEx.png";
import orange_Corner from "../assets/orange_Corner.png";
import Services from "./services";

function LandingPage1() {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {/* Candle Image Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <img
          src={candle}
          alt="Candle"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            maxWidth: "calc(50% - 20px)",
            color: "white",
            fontFamily: "'Georgia', serif",
            padding: "10px",
            boxSizing: "border-box",
            paddingLeft: "5%",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#f07c14",
              textAlign: "left",
              fontWeight: "bold", // Added fontWeight property
            }}
          >
            Thank You For Signing Up!
          </div>
        </div>
        <img
          src={landingPageEx}
          alt="Landing Page Example"
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            width: "50%",
            height: "auto",
          }}
        />
      </div>

      {/* Orange Corner Image with Centered Services */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          minHeight: "calc(100vh - 80px)", // Adjust height to ensure the orange corner image is tall enough
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0", // Remove space between the sections
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={orange_Corner}
            alt="Orange Corner"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              minHeight: "100%", // Ensure the image covers the entire container
            }}
          />
          <div
            style={{
              position: "relative",
              width: "80%", // Adjust width as needed
              maxWidth: "1200px", // Optional: set a maximum width
              padding: "10px",
              boxSizing: "border-box",
              zIndex: 1, // Ensure the Services component is above the image
            }}
          >
                      <Services />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage1;
