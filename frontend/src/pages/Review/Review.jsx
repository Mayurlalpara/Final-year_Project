/* eslint-disable no-unused-vars */
import React, { useState,useContext } from "react";
import "./Review.css";
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext.jsx';


const Review = () => {
    const {url} = useContext(StoreContext)
    const [feedBack, setFeedBack] = useState({
        name: "",
        email: "",
        feedback: "",
      });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const {list,setList} = useContext(StoreContext)

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
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedBack.name}
          onChange={handleChange}
          required
        /><input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email Address"
        onChange={handleChange}
        value={feedBack.email}
        required
      />
        <textarea
          placeholder="Write your review here..."
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
      <ul className="review-list">
        {list.reverse().map((list, index) => (
            <li key={index} className="review-item">
            <p><strong>{list.name}</strong></p>
            <p>{list.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
