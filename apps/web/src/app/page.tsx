"use client"
import React, { useEffect } from 'react';
import { Button } from '@repo/ui';
import CompanyLogo from '@repo/icons/src/components/company-logo';
import { faqAnswers, faqQuestions } from '@repo/ui/src/constants/faq-data';
import avatarSrc from '@repo/icons/src/images/Avatar.svg';
import CompanyName from '@repo/icons/src/images/CompanyName.svg';
import BannerView from '@/app/hocs/views/BannerView';
import SocialProofView from '@/app/hocs/views/SocialProofView';
import FeaturesView from '@/app/hocs/views/FeaturesView';
import Faq from '@/components/Faq';
import Testimonial from '@/components/testimonial';
import CoursesTabView from '@/app/hocs/views/CoursesTabView';
import MetricsView from '@/app/hocs/views/MetricsView';
import { initGA, logPageView, trackButtonClick } from './analytics';

/* eslint-disable -- random */


function Home(): JSX.Element {
  useEffect(() => {
    initGA();
    logPageView(); 
  }, []);
  const handleButtonClick = () => {
    // console.log("home")
    trackButtonClick('Home Button');
  };
  return (
    <div>
      <BannerView />
      <SocialProofView />
      <FeaturesView />
      <CoursesTabView />
      <Testimonial
        CompanyName={CompanyName}
        avatarSrc={avatarSrc}
        companyLogo={<CompanyLogo />}
        employeeDesignation="Product Manager, Sisyphus"
        employeeName="Candice Wu"
        quote="We’ve been using Untitled to kick start every new project and can’t imagine working without it."
      />
      <Faq answers={faqAnswers} questions={faqQuestions} />
      <MetricsView />
      <div className="flex flex-col items-center justify-center mt-40 mb-24 w-4/5 mx-auto rounded">
        <div className="mt-4">
          <p className="text-ui-fg-base text-2xl sm:text-4xl font-semibold">
            Start your free trial
          </p>
        </div>
        <div className="mt-4">
          <div className="mt-3">
            <p className="text-gray-500 text-base sm:text-xl font-normal mb-5 text-center">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
        </div>{' '}
        <div>
          {' '}
          <Button className="my-4 mr-3" size="xlarge" variant="secondary">
            Learn More
          </Button>
          <button
          onClick={handleButtonClick}
            className="my-4 txt-compact-large-plus gap-x-1.5 px-5 py-3.5 bg-purple-600 text-white rounded-md focus:outline-none focus:ring focus:border-purple-700"
            type="button"
          >
            {' '}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
