import React from 'react';
import Illustration from '@assets/illustration-intro.png';
import Button from '@components/Button';

const Intro = () => (
  <div className="lg:bg-curvy-desktop bg-curvy-mobile bg-bottom bg-contain bg-no-repeat bg-midnight-50">
    <div className="flex items-center justify-center flex-col p-10 gap-5 mx-10">
      <img alt="Intro" src={Illustration} />
      <h1 className="text-center sm:text-3xl lg:text-5xl font-extrabold max-w-lg">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-center text-lg lg:w-2/5">
        Fylo stores all your most important files in one secure location. Access wherever you need, share and
        collaborate with friends family, and coworkers.
      </p>
      <Button text="Get Started" />
    </div>
  </div>
);

export default Intro;
