import React from "react";
import { Link } from "react-router-dom";

const portfolio = [
  {
    title: "Find A Pet",
    description:
      "A website that allows users to search for a dog up for adoption in their area. The webite provides information for the dog inlcuding the breed, age, gender, and email contact. Users can also learn a random fact about dogs which is matched with a random picture of different dogs",
    imageLink: "/assets/findpet.png",
    liveLink: "https://sonnytedesco26.github.io/find-a-pet/",
    gitLink: "https://github.com/sonnytedesco26/find-a-pet",
  },

  {
    title: "Run Buddy",
    description: "A website that offers fitness training services",
    imageLink: "/assets/runbuddy.png",
    liveLink: "https://lernantino.github.io/run-buddy/",
    gitLink: "https://github.com/Xcamaj/run-buddy",
  },
  {
    title: "Taskmaster Pro",
    description: "Taskmaster website that offers fitness training services",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OVrQeGEry0g9Xm72XU3XHGaLn5s2NrkRBf3mye8iuR5Vd6lI_89_h_6iNAP8_TCYw_w&usqp=CAU",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/Xcamaj/taskmaster-pro",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://woz-u.com/wp-content/uploads/2021/01/woz-what-is-coding-women-in-coding-perspective.jpg",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://media.istockphoto.com/photos/debugging-during-the-dark-hours-picture-id1139080118?k=20&m=1139080118&s=612x612&w=0&h=e8HqOqSWmB5QVb90uKlhFXFT5ttwl5TCp3YyCT59Zdw=",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://media.istockphoto.com/photos/on-call-to-get-through-the-code-picture-id1135957645?k=20&m=1135957645&s=612x612&w=0&h=ZD4ROaKZ-fbDFhvzXNgwYc7vb6Val0EBOHKdxMhzHno=",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
  },
];

function Portfolio() {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="">
        <p className="text-2xl font-bold">Portfolio</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="col-span-1 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            <div className="h-44 flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105"
                src={item.imageLink}
                alt=""
              />
            </div>
            <div className="my-2">
              <h5 className="px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </div>
            <div className="p-2 flex flex-col justify-between h-auto">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[70px] overflow-hidden after:content-['...']">
                {item.description}
              </p>
              <div className="flex justify-around text">
                <a
                  href={item.liveLink}
                  target="_blank"
                  className="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
                <a
                  href={item.gitLink}
                  target="_blank"
                  className="inline-flex items-center py-2 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
