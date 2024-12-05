import React from "react";
// import "./Countries.css";

const Countries = () => {
  const countries = [
    "Russia", "Georgia", "Philippines", "China", "Kyrgyzstan", "Kazakhstan"
  ];

  return (
    <section id="countries" className="countries">
      <h2>Countries We Cover</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">{country}</div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
