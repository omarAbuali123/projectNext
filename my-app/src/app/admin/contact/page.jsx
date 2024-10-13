// src/app/admin/contact/page.jsx

"use client";

import ContactMessages from '../components/ContactMessages';

const ContactMessagesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <ContactMessages />
    </div>
  );
};

export default ContactMessagesPage;
