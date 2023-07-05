import React from 'react';
import Header from '@components/Header';
import Intro from '@components/Intro';
import List from '@components/List';
import Information from '@components/Information';
import Commentaries from '@components/Commentaries';
import Contact from '@components/Contact';

const Landing = () => (
  <div className="font-raleway bg-midnight-50 min-h-screen text-white">
    <Header />
    <div className="bg-midnight-100">
      <div className="flex flex-col lg:gap-36 gap-44">
        <Intro />
        <List />
        <Information />
        <Commentaries />
        <Contact />
      </div>
    </div>
  </div>
);

export default Landing;
