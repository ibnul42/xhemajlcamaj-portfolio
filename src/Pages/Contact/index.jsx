import React, { useState } from "react";

function Contact() {
  const [emptyName, setEmptyName] = useState(null);
  const [emptyEmail, setEmptyEmail] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const onChange = (e) => {
    if (e.target.value !== "") {
      if (e.target.name === "name") {
        setEmptyName(null);
      }
      if (e.target.name === "email") {
        setEmptyEmail(null);
      }
      if (e.target.name === "message") {
        setEmptyMessage(null);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const onBlur = (e) => {
    if (e.target.value === "") {
      if (e.target.name === "name") {
        setEmptyName("Name is empty");
      }
      if (e.target.name === "email") {
        setEmptyEmail("Email is empty");
      }
      if (e.target.name === "message") {
        setEmptyMessage("Message is empty");
      }
    } else {
      if (e.target.name === "name") {
        setEmptyName(null);
      }
      if (e.target.name === "email") {
        setEmptyEmail(null);
      }
      if (e.target.name === "message") {
        setEmptyMessage(null);
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="">
        <p className="text-2xl font-bold">Contact</p>
      </div>
      <div className="">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              onBlur={onBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2"
              required
            />
            {emptyName ? <p className="text-red-500">{emptyName}</p> : null}
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              onBlur={onBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2"
              required
            />
            {emptyEmail ? <p className="text-red-500">{emptyEmail}</p> : null}
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="message">Message:</label>
            <textarea
              rows="10"
              placeholder="message"
              name="message"
              id="message"
              value={message}
              onChange={onChange}
              onBlur={onBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2"
              required
            />
            {emptyMessage ? (
              <p className="text-red-500">{emptyMessage}</p>
            ) : null}
          </div>
          <div className="">
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
