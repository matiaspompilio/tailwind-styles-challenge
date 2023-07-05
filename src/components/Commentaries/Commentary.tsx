import React from 'react';

type CommentaryProps = {
  text: string;
  photo: string;
  name: string;
  job: string;
};

const Commentary = ({ text, photo, name, job }: CommentaryProps) => (
  <div className="p-10 rounded bg-midnight-300 shadow-lg shadow-midnight-200">
    <div className="flex flex-col gap-6">
      <p className="lg:text-sm xs:text-xs">{text}</p>
      <div className="flex flex-row gap-3 items-center">
        <img className="lg:w-10 lg:h-10 xs:w-6 h-6 rounded-full" alt={`${name} photo`} src={photo} />
        <div className="flex flex-col">
          <h4 className="font-bold lg:text-lg xs:text-xs flex-grow">{name}</h4>
          <p className="text-xs">{job}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Commentary;
