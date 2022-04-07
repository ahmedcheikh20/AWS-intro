import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Cloud" text="The Cloud refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud servers are located in data centers all over the world." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="AWS" text="AWS is architected to be the most flexible and secure cloud computing environment available today." />
      <Feature title="Knowledgebase" text="Amazon Web Services (AWS) is a comprehensive cloud computing platform that includes infrastructure as a service (IaaS) and platform as a service (PaaS) offerings." />
      <Feature title="Education" text="AWS has a huge array of employee-led and leadership-supported affinity groups that make it easy for our builders to connect and network with others" />
    </div>
  </div>
);

export default WhatGPT3;
