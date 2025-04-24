/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './FeedBack.css';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext.jsx';

const FeedBack = () => {
  const {url} = useContext(StoreContext)
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFeedBack({ ...feedBack, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    try {
      const response = await axios.post(`${url}/api/feedback`, feedBack);
      if (response.data.success) {
        setSubmissionStatus("success");
        setFeedBack({ name: "", email: "", feedback: "" });
      } else {
        setSubmissionStatus("error");
        alert(response.data.msg || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmissionStatus("error");
      alert("An error occurred while submitting feedback.");
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={feedBack.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={feedBack.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedBack.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={submissionStatus === "submitting"}>
          {submissionStatus === "submitting" ? "Submitting..." : "Submit"}
        </button>

        {submissionStatus === "success" && <p className="success-message">Thank you for your feedback!</p>}
        {submissionStatus === "error" && <p className="error-message">Failed to submit feedback. Please try again later.</p>}
      </form>
    </div>
  );
};

export default FeedBack;