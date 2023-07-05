import React from 'react';
import Item from '@components/Item';
import AccessIcon from '@assets/icon-access-anywhere.svg';
import SecureIcon from '@assets/icon-security.svg';
import CollaborationIcon from '@assets/icon-collaboration.svg';
import FileIcon from '@assets/icon-any-file.svg';

type Item = {
  icon: string;
  title: string;
  description: string;
};

const items: Array<Item> = [
  {
    icon: AccessIcon,
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: SecureIcon,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: CollaborationIcon,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: FileIcon,
    title: 'Store any type of file',
    description:
      "Whether you're sharing holydays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const List = () => (
  <div className="flex items-center justify-center mx-10">
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-row-2 gap-36">
      {items.map((item, index) => (
        <Item key={index} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </div>
  </div>
);

export default List;
