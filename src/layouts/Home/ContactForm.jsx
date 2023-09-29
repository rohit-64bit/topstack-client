// ContactForm.js
import React from 'react';
const ContactForm = () => {
  return (
    <div className='mx-20'>
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">Name</label>
          <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email</label>
          <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
