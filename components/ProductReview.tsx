import React, { useState } from 'react';

interface ProductReviewProps {
  productId: string;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  createdAt: Date;
}

const ProductReview: React.FC<ProductReviewProps> = ({ productId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmitReview = () => {
    if (rating > 0 && comment.trim() !== '' && userName.trim() !== '') {
      const newReview: Review = {
        id: `review-${Date.now()}`,
        rating,
        comment,
        userName,
        createdAt: new Date(),
      };

      setReviews((prevReviews) => [...prevReviews, newReview]);
      setRating(0);
      setComment('');
      setUserName('');
    }
  };

  return (
    <div>
      <h2>Leave a Review</h2>
      <div>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => handleRatingChange(parseInt(e.target.value))}
          />
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <label>
          Name:
          <input type="text" value={userName} onChange={handleUserNameChange} />
        </label>
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>
      <div>
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
            <p>By: {review.userName}</p>
            <p>Date: {review.createdAt.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;

