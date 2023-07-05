import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="flex justify-center items-center">
    <div className="rounded-xl bg-midnight-50 shadow-lg shadow-midnight-200 py-16 flex justify-center items-center flex-col gap-6 w-3/4">
      <h1 className="sm:text-2xl lg:text-4xl font-extrabold lg:w-1/2 text-center">Get early access today</h1>
      <p className="text-center text-lg lg:w-2/3">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
