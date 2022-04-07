import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Advertising & Marketing',
    text: 'Achieve cost-efficiency for petabyte-scale analytics and single-digit millisecond latency workloads..',
  },
  {
    title: 'Financial Services',
    text: 'Less cost. More resiliency. Explore AWS solutions across banking, payments, capital markets, and insurance..',
  },
  {
    title: 'Game Tech',
    text: 'Create computationally ridiculous games across all genres and platforms..',
  },
  {
    title: 'Media & Entertainment',
    text: 'From content creation to distribution, purpose-built media solutions so you can move faster, smarter, and more efficiently.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
