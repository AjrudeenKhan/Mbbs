import React, { useState } from "react";

const RussiaDetails = () => (
  <div className="russia-details">
    <h3>MBBS in Russia</h3>
    <h4>Reasons to choose MBBS in Russia</h4>
    <ul>
      <li>Medical degrees are recognized all over the world.</li>
      <li>No donation.</li>
      <li>MBBS in Russia provides direct admission.</li>
      <li>Climate is very pleasant.</li>
      <li>Professors of the university are highly educated and degree holders from different nations.</li>
      <li>The country has a total of 57 medical universities.</li>
      <li>Medium of study is English.</li>
      <li>Russia’s medical colleges are recognized by MCI, WHO, ECFMG-USA, GMC-UK, AMC-Australia. Students can work in any part of the world including USA, Canada, UK, India, Europe, Gulf countries, and others.</li>
      <li>Universities of Russia are top ranked in the world and so if you are looking for MBBS admission in Russia then contact Edugiant.</li>
      <li>Fees structure is very low and affordable for students. Students can easily travel around Russia at a very low cost.</li>
      <li>There is less crime in Russia and the country maintains a very good relation with India. This is the main reason for the students to choose MBBS in Russia.</li>
      <li>The country offers internships for the students after the completion of the course. The country has many hospitals where the students can enroll themselves.</li>
    </ul>

    <h4>Far Eastern Federal University</h4>
    <img src="https://tse1.mm.bing.net/th?id=OIP.9GMZHRUiSnNyjgGfPwQc_QAAAA&pid=Api&P=0&h=180" style={{height:'50vh'}} loading="lazy"/>
    <p>
      Far Eastern Federal University (FEFU) is a federal state autonomous educational institution of higher education.
      The President of the Russian Federation issued Decree No. 1172 on October 21, 2009, and the Russian Federation’s Government issued Decree No. 503-r on April 2, 2010, renaming the type of state educational institution of higher professional education to “Far Eastern State University.”
    </p>
    <p>
      Medical education at FEFU began in 2013, and English-medium education started in 2016. FEFU also provides an English-medium curriculum called “General Medicine” in addition to Russian-medium programs. FEFU currently has roughly 500 students enrolled in this program.
    </p>
    <h5>Why Far Eastern Federal University is Special</h5>
    <ul>
      <li>FEFU cooperates with 240+ international partners, including UNESCO, G20, BRICS, ASEAN, and others.</li>
      <li>Supported by advanced research and development centers with a focus on global significance areas such as oceanography and cybersecurity.</li>
      <li>Innovative learning process with access to global lectures, online libraries, and distinguished faculty members.</li>
      <li>World-class facilities for study and recreation on a modern campus that hosted the APEC conference in 2012.</li>
      <li>Over 350 high-tech laboratories and significant R&D allocations.</li>
      <li>International environment with a creative atmosphere for learning and cultural exchange.</li>
    </ul>

    <h5>Student Life at FEFU</h5>
    <p>
      Students live on the FEFU campus, which is located on a beautiful island surrounded by lush greenery, lakes, and the sea. The campus offers modern dormitories, sports facilities, and numerous cultural activities. Over 3,500 international students are enrolled, ensuring a diverse and inclusive community.
    </p>
    <h5>Accommodation and Facilities</h5>
    <ul>
      <li>Hostels with 2- and 3-seater rooms, communal kitchens, and laundry facilities.</li>
      <li>Special emphasis on the safety and comfort of students, including female students.</li>
      <li>Access to a library with over 2 million volumes and advanced medical facilities at the FEFU Medical Center.</li>
    </ul>
  </div>
);

const Countries = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleKnowMore = () => {
    setShowDetails(true);
  };

  const countries = ["Russia"];

  return (
    <section id="countries" className="countries">
      <h2>Countries We Cover</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            {country}
            {country === "Russia" && (
              <>
                <p>
                  MBBS in Russia is a great option for Indian students who wish to
                  study MBBS from abroad. Lots of students appear for the NEET exam
                  every year but fail to get admission to Indian medical colleges.
                  The cut-off list goes very high, and because of the limited number
                  of seats in government colleges, students are left with no other
                  option than choosing universities from abroad.
                </p>
                <button onClick={handleKnowMore}>Know More</button>
              </>
            )}
          </div>
        ))}
      </div>
      {showDetails && <RussiaDetails />}
    </section>
  );
};

export default Countries;
