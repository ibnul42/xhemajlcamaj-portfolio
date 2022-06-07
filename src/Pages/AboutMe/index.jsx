import React from "react";

function AboutMe() {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="">
        <p className="text-2xl font-bold">About Me</p>
      </div>
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          className="h-full w-full bg-white"
        >
          <path
            d="M578.2,524.3c42.7-26.5,71.4-73.7,71.5-127.9c0-83.2-67-150.7-149.7-150.7c-82.7,0-149.7,67.5-149.7,150.7c0,54.2,28.7,101.4,71.4,127.9c-85.3,32.1-146.3,114.1-146.3,211.1c0,10.4,8.4,18.8,18.7,18.8s18.7-8.4,18.7-18.8c0-104,83.8-188.3,187.1-188.3c103.3,0,187.1,84.3,187.1,188.3c0,10.4,8.4,18.8,18.7,18.8c10.3,0,18.7-8.4,18.7-18.8C724.5,638.4,663.5,556.4,578.2,524.3z M387.7,396.4c0-62.4,50.3-113,112.3-113c62,0,112.3,50.6,112.3,113c0,62.4-50.3,113-112.3,113C438,509.4,387.7,458.8,387.7,396.4z"
            fill="#000"
          />
        </svg>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          ea soluta autem ad voluptas assumenda iusto placeat porro tempore unde
          facilis itaque vel alias, officia repellendus in libero amet quisquam
          consequuntur? Hic, veritatis? Aut quisquam adipisci iste tempora ullam
          ipsam fuga sint veritatis expedita tenetur facilis provident,
          consequatur possimus accusantium
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          ea soluta autem ad voluptas assumenda iusto placeat porro tempore unde
          facilis itaque vel alias, officia repellendus in libero amet quisquam
          consequuntur? Hic, veritatis? Aut quisquam adipisci iste tempora ullam
          ipsam fuga sint veritatis expedita tenetur facilis provident,
          consequatur possimus accusantium Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Doloribus perferendis impedit in animi
          incidunt. Quis architecto obcaecati odio quidem culpa.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
