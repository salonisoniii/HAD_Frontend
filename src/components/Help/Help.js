import React, { useState } from 'react';
import { FaQuestionCircle, FaBook } from 'react-icons/fa';
import Sidebar from '../doctor/Sidebar';
import Navbar1 from '../doctor/Navbar1';

const Help = () => {

  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [displayContent, setDisplayContent] = useState('');
  const [query, setQuery] = useState('');

  const faqs = [
    { question: "How do I reset my password?", answer: "Go to Settings > Account > Reset Password." },
    { question: "Who do I contact in case of a technical issue?", answer: "Please contact our support team via email histeam40@gmail.com." },
    { question: "Can I access my patient history online?", answer: "Yes, all patient histories are available under the 'History' section of your profile." }
  ];

  const userGuidance = {
    nurse: "As a nurse, ensure to update patient status regularly and check daily schedules through the app.",
    doctor: "Doctors should verify patient prescriptions in the 'Prescriptions' tab and utilize the consult feature for second opinions."
  };

  const handleFAQClick = () => {
    const faqContent = (
      <div className="content-box">
        <h2>FAQs</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    );
    setDisplayContent(faqContent);
  };

  const handleGuidanceClick = () => {
    const guidanceContent = (
      <div className="content-box">
        <h2>User Guidance</h2>
        <p><strong>Nurse Guidance:</strong><br />{userGuidance.nurse}</p>
        <p><strong>Doctor Guidance:</strong><br />{userGuidance.doctor}</p>
      </div>
    );
    setDisplayContent(guidanceContent);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const url = `${process.env.REACT_APP_SECRET_KEY}/helpEmail?userId=${userId}&role=${role}`;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
          'Authorization': token,
        },
        body: JSON.stringify({ response: query })
      });
      console.log(query);

      
      if (!response.ok) {
        throw new Error('Something went wrong with sending the email.');
      }
      
      const data = await response.json();
      console.log('Email successfully sent!', data);
      alert('Email successfully sent!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div
      className="container-fluid  min-vh-100"
      style={{ backgroundColor: "#ECE3F0" }}
    >
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar Toggle={Toggle} />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar1 Toggle={Toggle} />

    <div className="background">
      <style>
        {`
          .background {
            // background: url(https://s7d1.scene7.com/is/image/wbcollab/Health_Background_Nov21) no-repeat center center fixed;
            // background-size: cover;
            // height: 100vh;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-direction: column;
            // text-align: center;
          }
          .container {
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 90%;
            max-width: 600px;
          }
          input, textarea, button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            box-sizing: border-box;
          }
          button {
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
          }
          .button-large {
            width: 48%;
            height: 50px;
            font-size: 16px;
            margin: 10px 1%;
            display: inline-block;
          }
          .content-box {
            text-align: left;
            background: white;
            padding: 15px;
            margin-top: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          .faq-list li {
            margin-bottom: 10px;
          }
          h1 {
            // color: white;
            margin-bottom: 20px;
            text-align:center;
            margin-top:'10px';
          }
        `}
      </style>
      <h1>HELP AND SUPPORT</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search in app..."
        />
        <div>
          <button className="button-large" onClick={handleFAQClick}>
            <FaQuestionCircle /> FAQs
          </button>
          <button className="button-large" onClick={handleGuidanceClick}>
            <FaBook /> User Guidance
          </button>
        </div>
        <div>
          {displayContent}
        </div>
        <textarea
          value={query}
          onChange={handleQueryChange}
          rows="4"
          placeholder="Write your query here..."
        />
        <button className="button-large" onClick={handleSubmit}>
          Send Email
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Help;

