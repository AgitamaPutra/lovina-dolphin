import React from "react";
import VideoDolphin from "../asset/video.mp4"; // Import the video file

export const Video = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center ">
        Our Beautiful Activity
      </h2>
      <div className="flex justify-center items-center ">
        <video
          controls
          className="rounded-lg shadow-lg max-w-full"
          style={{
            height: "600px", // Set a smaller height explicitly
            objectFit: "cover", // Crop the video to fill the height/width without distortion
          }}
        >
          <source src={VideoDolphin} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
