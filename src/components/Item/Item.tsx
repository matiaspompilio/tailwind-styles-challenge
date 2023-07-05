import React from 'react';

type ItemProps = {
  icon: string;
  title: string;
  description: string;
};

const Item = ({ icon, title, description }: ItemProps) => (
  <div className="flex items-center justify-center flex-col gap-2">
    <img className="pb-6" src={icon} alt={title} />
    <p className="font-bold text-lg">{title}</p>
    <p className="text-center max-w-sm">{description}</p>
  </div>
);

export default Item;
