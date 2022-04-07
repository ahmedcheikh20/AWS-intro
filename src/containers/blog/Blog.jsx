import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Apr 22, 2020" text="AWS Practitioner Cheat sheet: Pricing&Billing" Link="https://www.awsboy.com/aws-cloud-practitioner-cheat-sheets-pricing-billing/" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 22, 2020" text="AWS Practitioner Cheat sheet: Cloud Concepts" Link="https://www.awsboy.com/aws-cloud-practitioner-cheat-sheets-cloud-concepts/" />
        <Article imgUrl={blog03} date="Apr 01, 2020" text="AWS Cheat Sheet: EC2" Link="https://www.awsboy.com/aws-cheat-sheet-ec2/" />
        <Article imgUrl={blog04} date="Mar 29, 2020" text="AWS Cheat Sheet: VPC" Link="https://www.awsboy.com/aws-cheat-sheet-vpc/" />
        <Article imgUrl={blog05} date="Mar 22, 2020" text="AWS Cheat Sheet: S3" Link="https://www.awsboy.com/aws-cheat-sheet-amazon-s3/" />
      </div>
    </div>
  </div>
);

export default Blog;
