import React from "react";

function Card({username, content="default content appears here" }) {
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://unsplash.com/photos/a-close-up-view-of-a-metallic-cloth-4ySthPVQ5VE"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {username}
          </h2>
        </div>
        <p className="text-gray-300">
          {content}
        </p>
      </div>
    </>
  );
}

export default Card;
