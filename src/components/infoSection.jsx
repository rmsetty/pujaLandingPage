import React from "react";

function InfoSection() {
  const highlightStyle = {
    backgroundColor: "#f07c14",
    color: "white",
    padding: "2px 4px",
    borderRadius: "4px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7", // Light background for contrast
        padding: "20px",
        boxSizing: "border-box",
        margin: "20px auto",
        maxWidth: "1200px",
        borderRadius: "10px",
        fontFamily: "'Georgia', serif",
      }}
    >
      <h2
        style={{
          color: "#f07c14",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Explore Our Marketplace
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Reviews Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          <h3 style={{ color: "#f07c14", marginBottom: "10px" }}>Reviews</h3>
          <p>
            Hear from others who have found{" "}
            <span style={highlightStyle}>spiritual guidance</span> through our
            marketplace:
          </p>
          <blockquote style={{ margin: "20px 0", fontStyle: "italic" }}>
            <p>
              "A truly enriching experience! The priest’s blessings brought
              immense peace to my family."
            </p>
            <footer style={{ marginTop: "10px", color: "#f07c14" }}>
              — Priya Patel
            </footer>
          </blockquote>
          <blockquote style={{ fontStyle: "italic" }}>
            <p>
              "Exceptional service! The rituals were performed with utmost
              devotion and respect."
            </p>
            <footer style={{ marginTop: "10px", color: "#f07c14" }}>
              — Rajesh Kumar
            </footer>
          </blockquote>
        </div>

        {/* Q/A Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          <h3 style={{ color: "#f07c14", marginBottom: "10px" }}>Q/A</h3>
          <p>
            Common questions about booking{" "}
            <span style={highlightStyle}>religious services</span>:
          </p>
          <dl>
            <dt style={{ fontWeight: "bold", marginBottom: "5px" }}>
              How do I book a priest for a ritual?
            </dt>
            <dd style={{ marginBottom: "10px" }}>
              Browse our marketplace, select the{" "}
              <span style={highlightStyle}>priest</span> based on their
              expertise, and book a time slot.
            </dd>
            <dt style={{ fontWeight: "bold", marginBottom: "5px" }}>
              What types of services can I request?
            </dt>
            <dd>
              We offer a variety of services including{" "}
              <span style={highlightStyle}>Pujas</span>,{" "}
              <span style={highlightStyle}>Homas</span>, and other{" "}
              <span style={highlightStyle}>religious ceremonies</span>.
            </dd>
          </dl>
        </div>

        {/* About Us Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          <h3 style={{ color: "#f07c14", marginBottom: "10px" }}>About Us</h3>
          <p>
            We are a dedicated team committed to connecting devout Hindus with
            experienced <span style={highlightStyle}>priests</span> who offer a
            range of <span style={highlightStyle}>religious services</span>. Our
            goal is to facilitate a{" "}
            <span style={highlightStyle}>seamless experience</span> for you to
            find spiritual guidance and perform rituals with reverence.
          </p>
        </div>

        {/* How It Works Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          <h3 style={{ color: "#f07c14", marginBottom: "10px" }}>
            How It Works
          </h3>
          <p>
            Here’s how to connect with a{" "}
            <span style={highlightStyle}>priest</span> and book your services:
          </p>
          <ol style={{ paddingInlineStart: "20px", textAlign: "left" }}>
            <li style={{ marginBottom: "10px" }}>
              <span style={highlightStyle}>Sign up</span> on our platform and
              create an account.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span style={highlightStyle}>Browse</span> through our list of{" "}
              <span style={highlightStyle}>priests</span> and their offered
              services.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span style={highlightStyle}>Select</span> a priest and book a
              service that suits your needs.
            </li>
            <li>
              Confirm the booking and prepare for your{" "}
              <span style={highlightStyle}>spiritual experience</span>.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
