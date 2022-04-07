import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Amazon Web Services (AWS), the cloud platform offered by Amazon.com Inc (AMZN), has become a giant component of the e-commerce giant s business portfolio. In the second quarter of 2021, AWS brought in a record $14.8 billion in net sales, accounting for just over 13% of Amazon s total net sales. Having grown steadily in the 30% range the past few quarters, AWS is a frontrunner to other cloud computing platforms such as competitor Microsoft Azure.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
