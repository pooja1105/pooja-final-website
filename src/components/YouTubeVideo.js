import React from "react";

const YouTubeVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100">

      <h1
        className="text-center font-bold mb-8"
        style={{
          color: "#06a34e",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
          marginTop: "50px",
        }}
      >
        PROJECT VIDEO
      </h1>


      <div className="relative w-full max-w-2xl" style={{ paddingTop: "20%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
