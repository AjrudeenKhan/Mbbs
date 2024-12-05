import React from "react";
// import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const reasons = [
    "Tie-ups with top universities abroad",
    "Comprehensive visa and admission support",
    "Proven track record",
    "Affordable fees and guidance",
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul>
        {reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
