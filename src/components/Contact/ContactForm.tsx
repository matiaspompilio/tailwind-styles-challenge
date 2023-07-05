import React from 'react';
import Button from '@components/Button';

const ContactForm = () => (
  <div className="flex lg:flex-row xs:flex-col gap-6">
    <input placeholder="email@example.com" className="rounded-full" type="text" />
    <Button size="medium" text="Get started for free" />
  </div>
);

export default ContactForm;
