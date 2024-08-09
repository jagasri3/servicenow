import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './FeedbackForm.css'; // Add your own styling here

const FeedbackForm = () => {
  const [ratings, setRatings] = useState({ rating1: 0, rating2: 0, rating3: 0 });
  const [comments, setComments] = useState("");

  const handleRatingClick = (ratingName, ratingValue) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [ratingName]: ratingValue,
    }));
    console.log({ [ratingName]: ratingValue, comments });
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
    console.log({ ratings, comments: e.target.value });
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>

      <div className="rating-section">
        <h3>Rating 1</h3>
        <div className="rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                type="button"
                key={`rating1-${i}`}
                className="star-button"
                onClick={() => handleRatingClick('rating1', ratingValue)}
              >
                <FaStar
                  className="star"
                  color={ratingValue <= ratings.rating1 ? "#ffc107" : "#e4e5e9"}
                  size={30}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="rating-section">
        <h3>Rating 2</h3>
        <div className="rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                type="button"
                key={`rating2-${i}`}
                className="star-button"
                onClick={() => handleRatingClick('rating2', ratingValue)}
              >
                <FaStar
                  className="star"
                  color={ratingValue <= ratings.rating2 ? "#ffc107" : "#e4e5e9"}
                  size={30}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="rating-section">
        <h3>Rating 3</h3>
        <div className="rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                type="button"
                key={`rating3-${i}`}
                className="star-button"
                onClick={() => handleRatingClick('rating3', ratingValue)}
              >
                <FaStar
                  className="star"
                  color={ratingValue <= ratings.rating3 ? "#ffc107" : "#e4e5e9"}
                  size={30}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="comments">
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={comments}
          onChange={handleCommentsChange}
        ></textarea>
      </div>
    </div>
  );
};

export default FeedbackForm;
