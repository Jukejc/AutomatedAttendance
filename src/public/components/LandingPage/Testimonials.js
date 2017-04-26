import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials-container">

      <div className="container">

        <h1 className="text-center testimonials-text testimonials-title"> See what people are saying </h1>

        <div className="block works-step works-step-right">
          <div className="row">
            <div className="span4">
              <img className="img-left img-circle" src="https://res.cloudinary.com/automatedattendance/image/upload/v1493176209/testimonialimage1_ykgrzd.jpg" alt="testimonial one" />
              <div className="content-heading testimonials-text"><h4>Jason Chambers, Software Engineer</h4></div>
              <hr/>
              <p className="testimonials-text testimonials-text-p"> Not having to check in every morning has increased my morning productivity by a thousand times. 
              As soon as I walk through the door I get an email saying I have been checked in for the day. It's one less thing to tackle every morning which is great.
               This app is the greatest thing since the internet.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Testimonials;
