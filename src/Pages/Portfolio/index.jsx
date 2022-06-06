import React from "react";
import { Link } from "react-router-dom";

const portfolio = [
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://media.istockphoto.com/photos/closeup-focus-on-persons-hands-typing-on-the-desktop-computer-show-picture-id1356364268?b=1&k=20&m=1356364268&s=170667a&w=0&h=YibLOYYDkERhgK4BvRw3TzIlPYQAo4nbMnFA-5CvZ0k=",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
  },

  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta cum ut excepturi omnis necessitatibus optio tempora laborum mollitia animi",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OVrQeGEry0g9Xm72XU3XHGaLn5s2NrkRBf3mye8iuR5Vd6lI_89_h_6iNAP8_TCYw_w&usqp=CAU",
    liveLink: "http://github.com/",
    gitLink: "https://github.com/",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {portfolio.map((item, index) => (
          <div
            key={index}
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="h-44 flex justify-center items-center overflow-hidden">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src={item.imageLink}
                alt=""
              />
            </div>
            <div className="my-2">
              <h5 class="px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </div>
            <div class="p-2 flex flex-col justify-between h-auto">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex justify-around text">
                <a
                  href={item.liveLink}
                  target="_blank"
                  class="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
                <a
                  href={item.gitLink}
                  target="_blank"
                  class="inline-flex items-center py-2 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
