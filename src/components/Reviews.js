import React, { useState } from "react";
import "../Reviews.css";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "Sophia Brown",
    image: "https://media.istockphoto.com/id/1270066894/photo/portrait-of-happy-african-woman-smiling.jpg?s=612x612&w=0&k=20&c=KIkxcTb--PTDUDxylElSKzEU7g4guEKsk38bl-6U-vo=",
    comment: "Absolutely love these products! My skin has never felt better.",
    rating: 5,
    backgroundImage: "https://i.redd.it/1rw2ttjsusrb1.jpg",
  },
  {
    id: 2,
    name: "Emily Carter",
    image: "https://thestoryexchange.org/app/uploads/2021/02/Janet_Mock_Head_Shot.jpg",
    comment: "Such amazing quality! I can see the results almost instantly.",
    rating: 4,
    backgroundImage: "https://us.123rf.com/450wm/fabrikacrimea/fabrikacrimea1704/fabrikacrimea170402313/76918446-brush-and-cosmetic-isolated-on-a-white-background-top-view.jpg?ver=6",
  },
  {
    id: 3,
    name: "Olivia Wilson",
    image: "https://t3.ftcdn.net/jpg/06/17/38/78/360_F_617387850_7y7xG5GjE8tswfynFyXs3Os04CbvkJlp.jpg",
    comment: "The best purchase I’ve ever made for my beauty routine!",
    rating: 5,
    backgroundImage: "https://aaftonline.com/blog/wp-content/uploads/2024/01/Advantages-of-Makeup-Complete-Overview.png",
  },
  {
    id: 4,
    name: "Liam Johnson",
    image: "https://media.istockphoto.com/id/1078084232/photo/businesswoman-portrait-outdoors.jpg?s=612x612&w=0&k=20&c=R02wxCeRZ_0Qb_atF-FhVjHLdgO4ATM23lqFubPWGeU=",
    comment: "Great customer service and top-notch products!",
    rating: 4,
    backgroundImage: "https://i.redd.it/1rw2ttjsusrb1.jpg",
  },
  {
    id: 5,
    name: "Ella Roberts",
    image: "https://media.istockphoto.com/id/1347431090/photo/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run.jpg?s=612x612&w=0&k=20&c=t6IMTQoG_YlCQVgsFUKCt7Fw9iUjO25kniyg6nJq2E4=",
    comment: "I’ve recommended these to all my friends. Amazing!",
    rating: 5,
    backgroundImage: "https://us.123rf.com/450wm/fabrikacrimea/fabrikacrimea1704/fabrikacrimea170402313/76918446-brush-and-cosmetic-isolated-on-a-white-background-top-view.jpg?ver=6",
  },
  {
    id: 6,
    name: "James Miller",
    image: "https://cdn.openart.ai/published/RKW1ZWmq3HwFIcGfvwFI/J6kG9nNG_kQe1_1024.webp",
    comment: "Exceeded my expectations. Worth every penny!",
    rating: 5,
    backgroundImage: "https://aaftonline.com/blog/wp-content/uploads/2024/01/Advantages-of-Makeup-Complete-Overview.png",
  },
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const visibleReviews = reviewsData.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <div className="animate-on-scroll">
    <div className="reviews-container">
      <h2 className="reviews-title">Our Client Reviews</h2>
      <div className="reviews-dots">
        {Array.from({ length: Math.ceil(reviewsData.length / 3) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <div className="reviews-slider">
        {visibleReviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-card review-${index + 1}`}
            style={{ backgroundImage: `url(${review.backgroundImage})` }}
          >
            <div className="review-content">
              <img src={review.image} alt={review.name} className="client-image" />
              <h3 className="client-name">{review.name}</h3>
              <p className="client-comment">{review.comment}</p>
              <div className="client-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} color={i < review.rating ? "#f5a623" : "#ddd"} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Reviews;
