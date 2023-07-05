import React from 'react';
import StayProductiveImg from '@assets/illustration-stay-productive.png';

const Information = () => (
  <div className="flex items-center justify-center lg:flex-row flex-col gap-16 mx-10">
    <img className="pb-6" src={StayProductiveImg} alt="Productive illustration" />
    <div className="flex flex-col gap-6">
      <p className="text-left sm:text-3xl lg:text-5xl font-extrabold max-w-lg">Stay productive, wherever you are</p>
      <p className="text-left max-w-2xl">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
        needs.
      </p>
      <p className="text-left max-w-3xl">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email
        attachments required.
      </p>
      <a className="text-accent-100" href="#">
        <span className="border-b border-accent-100 pb-1 flex flex-row items-center gap-1 w-fit">
          See how Fylo works{' '}
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="#181f2a">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
);

export default Information;
