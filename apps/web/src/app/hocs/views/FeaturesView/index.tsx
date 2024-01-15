'use client';
import React from 'react';
import Feature from '@/components/Feature';
import ContentBox from '@/components/ContentBox';

function FeaturesView(): JSX.Element {
  return (
    <div className="mt-24 mb-40">
      <ContentBox
        align="center"
        description=" We have smart features to help you throughout your skill
              enhancement journey"
        tag="Smart Features"
        title="All-Tech For Learning Effectively."
      />
      <div className="flex flex-col lg:flex-row justify-between w-4/5 mx-auto mt-16">
        <Feature
          description="With our Adaptive Learning - tailoring content to your pace and preferences for a truly customized educational experience."
          svg={
            <svg
              fill="none"
              height="24"
              stroke="#7F56D9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
          title="Adaptive Learning"
        />
        <Feature
          description="Dive into an immersive Interactive Learning Experience that captivates and engages learning and retention."
          svg={
            <svg
              fill="none"
              height="25"
              viewBox="0 0 24 25"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2.90625L3 14.9062H12L11 22.9062L21 10.9062H12L13 2.90625Z"
                stroke="#7F56D9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          }
          title="Interactive Learning Experience"
        />{' '}
        <Feature
          description="Our robust Performance Analysis tools empower you to track and enhance your progress with utmost precision."
          svg={
            <svg
              fill="none"
              height="24"
              stroke="#7F56D9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" x2="18" y1="20" y2="10" />
              <line x1="12" x2="12" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="14" />
            </svg>
          }
          title="Performance Analysis"
        />
      </div>
    </div>
  );
}

export default FeaturesView;
