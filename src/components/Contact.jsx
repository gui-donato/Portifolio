import React from "react";

const Contact = () => (
  <section style={{ textAlign: "center", padding: "20px",  borderTop: "1px solid #ddd" }} id="contact" className="section">
    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>Contato</h2>
      <p style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "18px", color: "#333", marginBottom: "5px" }}>
      📧{"E-mail "}
      <a 
        href="guidonato.contato@hotmail.com" 
        style={{ color: "#007bff", textDecoration: "none", fontSize:"0.9em" }}
        onMouseOver={(e) => (e.target.style.color = "#0056b3")}
        onMouseOut={(e) => (e.target.style.color = "#007bff")}
      >
         guidonato.contato@hotmail.com
      </a>
    </p>
  </section>
);

export default Contact;

