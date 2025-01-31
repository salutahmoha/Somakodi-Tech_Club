import React from "react";
import "./Testimonials.css";
import testimonials from "../Data/testimonialData";
import Carousel from "react-elastic-carousel";

function Testimonials() {
  return (
    <section id="testimonials">
      <h3>Testimonials from Alumni</h3>
      <div className="testimonial-container">
        <Carousel
          className="carousel"
          enableAutoPlay={true}
          autoPlaySpeed={3000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-content">
              <div className="user-details">
                <img src={testimonial.image} alt="" />
                <h5>{testimonial.name}</h5>
              </div>
              <div className="user-feedback">
                <h4>{testimonial.title}</h4>
                <p>{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
