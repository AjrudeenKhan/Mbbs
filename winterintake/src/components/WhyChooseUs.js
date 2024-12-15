import React from "react";
const WhyChooseUs = () => {
  const reasons = [
    "No One time fee",
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
