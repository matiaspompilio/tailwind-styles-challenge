import React from 'react';
import Commentary from './Commentary';
import Profile1 from '@assets/profile-1.jpg';
import Profile2 from '@assets/profile-2.jpg';
import Profile3 from '@assets/profile-3.jpg';
import Quotes from '@assets/bg-quotes.png';

type CommentaryType = {
  text: string;
  photo: string;
  name: string;
  job: string;
  adornment?: string;
};

const commentaries: Array<CommentaryType> = [
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    photo: Profile1,
    name: 'Satish Patel',
    job: 'Founder & CEO, Huddle',
    adornment: Quotes,
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    photo: Profile2,
    name: 'Bruce McKenzie',
    job: 'Founder & CEO, Huddle',
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    photo: Profile3,
    name: 'Iva Boyd',
    job: 'Founder & CEO, Huddle',
  },
];

const Commentaries = () => (
  <div className="mx-10">
    <div className="flex items-center justify-center">
      <div className="flex lg:flex-row flex-col gap-10 lg:w-5/6 sm:w-11/12 bg-quotes bg-no-repeat bg-top-2 p-10">
        {commentaries.map((commentary, index) => (
          <Commentary
            key={index}
            text={commentary.text}
            photo={commentary.photo}
            name={commentary.name}
            job={commentary.job}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Commentaries;
