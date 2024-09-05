import React, { useState } from "react"; // Import React and useState
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; // Import Button component
import flower from "../assets/flower.png";
import yes from "../assets/yes.jpg";

function Navbars() {
  // State to track if the navbar is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle navbar toggle
  const handleToggle = () => setIsExpanded(!isExpanded);

  // Handle navbar close
  const handleClose = () => setIsExpanded(false);

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#f07c14" }}
      expanded={isExpanded} // Set the expanded state of the navbar
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", fontFamily: "'Georgia', serif" }}
        >
          <img
            src={flower} // Replace with your logo URL
            alt="Logo"
            style={{
              height: "40px", // Adjust the height of the logo
              width: "auto", // Maintain aspect ratio
              marginRight: "10px", // Space between logo and text
              borderRadius: 10,
            }}
          />
          p u j a
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle} // Toggle the navbar
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          onClick={handleClose} // Close the navbar on click outside
        >
          <Nav className="ms-auto d-flex align-items-center">
            <Button
              variant="light" // Light variant for white background
              style={{
                color: "#f07c14", // Text color
                borderColor: "#f07c14", // Border color
                borderRadius: "10px", // Border radius
                marginLeft: "10px", // Space between links and button
                fontFamily: "'Georgia', serif",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              Coming Soon!
            </Button>
            <div
              className="d-flex align-items-center"
              style={{
                marginLeft: "10px", // Space between button and image
                marginTop: isExpanded ? "10px" : "0", // Apply marginTop conditionally
              }}
            >
              <img
                src={yes} // Replace with your profile image URL
                alt="Profile"
                style={{
                  height: "40px", // Adjust the height of the image
                  width: "auto", // Maintain aspect ratio
                  borderRadius: "10px",
                  maxWidth: "50px",
                }}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
