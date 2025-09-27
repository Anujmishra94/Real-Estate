import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 mx-auto max-w-80 text-center mb-8">
        Ready to Make a Move? Let's Build Your Feture Together
      </p>
      
      <form className="max-w-2xl mx-auto text-gray-300 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input className="w-full border border-gry-300 rounded py-3 px-4 mt-2" type="text"
            name="name"
            placeholder="Your Name" required/>
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input className="w-full border border-gry-300 rounded py-3 px-4 mt-2" type="email"
            name="Email"
            placeholder="Your Email" required/>
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
          className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          name="Message" placeholder="Message"  required></textarea>

        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">Send message</button>
      </form>



    </div>
  );
};

export default Contact;
