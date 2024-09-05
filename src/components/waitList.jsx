import React from "react";
import footerFlower from "../assets/footerFlower.png";
import candle from "../assets/candle.png";

function WaitList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
        backgroundImage: `url(${candle})`, // Set the background image
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
        fontFamily: "'Georgia', serif", // Set font family
      }}
    >
      {/* Orange Bold Text Above Image */}
      <div
        style={{
          fontSize: "clamp(24px, 4vw, 36px)", // Responsive font size
          color: "#f07c14", // Orange color
          fontWeight: "bold",
          marginBottom: "10px", // Space between text and image
          padding: "0 10px", // Ensure text doesn't touch the edges on small screens
        }}
      >
        A Website to Select/Book Local Hindu Priests
      </div>

      {/* Logo Image */}
      <img
        src={footerFlower}
        alt="Logo"
        style={{
          height: "20vw", // Adjusted to be responsive
          maxHeight: "200px", // Maximum height for large screens
          width: "auto",
          marginBottom: "20px", // Space between image and below text
        }}
      />

      {/* Gray Text Below Image */}
      <div
        style={{
          fontSize: "clamp(24px, 4vw, 36px)", // Responsive font size
          color: "#f07c14", // Orange color
          fontWeight: "bold",
          marginBottom: "10px", // Space between text and image
          padding: "0 10px", // Ensure text doesn't touch the edges on small screens
        }}
      >
        Anywhere, Anytime, with Rewards & Discounts
      </div>
      <div
        style={{
          fontSize: "clamp(16px, 2vw, 24px)", // Responsive font size
          color: "#555",
          marginBottom: "20px",
          padding: "0 10px", // Ensure text doesn't touch the edges on small screens
        }}
      >
        Sign up with your email to get notified when the website goes live for
        priest discounts
      </div>

      {/* Email Input and Sign Up Button */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "10px", // Margin for better spacing on small screens
            width: "100%", // Full width on small screens
            maxWidth: "300px", // Maximum width for larger screens
          }}
        />
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%", // Full width on small screens
            maxWidth: "300px", // Maximum width for larger screens
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default WaitList;
