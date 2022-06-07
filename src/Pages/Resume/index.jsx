import React from "react";

const skills = [
  { title: "Html" },
  { title: "Css" },
  { title: "Javascript" },
  { title: "React js" },
  { title: "Node js" },
  { title: "MongoDb" },
];

const experience = [];

function Resume() {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="">
        <p className="text-2xl font-bold">Resume</p>
      </div>
      {/* <div className="">
        <a
          href="/assets/resume/"
          download
          className="px-4 py-2 border-2 border-fuchsia-600 rounded-xl hover:border-fuchsia-400 hover:bg-fuchsia-400 hover:text-black"
        >
          Download Resume
        </a>
      </div> */}
      {/* <div className="flex justify-center items-center">
        <img src="/assets/resume.png" alt="" />
      </div> */}
      <div className="my-2">
        <p className="text-2xl font-bold">Skills</p>
        <ul className="list-disc list-inside">
          {skills.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="my-2">
        <p className="text-2xl font-bold">Experience</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experience &&
            experience.map((item, index) => (
              <div
                key={index}
                className="col-span-1 grid grid-cols-1 md:grid-cols-2"
              >
                <div className="col-span-1 flex flex-col">
                  <p className="font-semibold text-xl text-gray-400">
                    {item.company}
                  </p>
                </div>
                <div className="col-span-1 flex md:justify-end">
                  <p>{item.duration}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium text-lg text-gray-500">
                    {item.title}
                  </p>
                </div>
                <ul className="list-disc list-inside col-span-2">
                  {item.responsibilities.map((res, index) => (
                    <li key={index}>{res.name}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
