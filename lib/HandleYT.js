import React, { useState, useEffect } from "react";

const HandleYT = ({ videoId }) => {
  const [loading, setLoading] = useState(true);
  const [videoExists, setVideoExists] = useState(false);

  useEffect(() => {
    const fetchVideoSrc = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
        );
        if (response.ok) {
          setVideoExists(true);
        } else {
          setVideoExists(false);
        }
      } catch (error) {
        setVideoExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoSrc();
  }, [videoId]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[300px] md:h-[500px] rounded-2xl bg-white bg-opacity-0">
          <div className="loader"></div>
        </div>
      ) : videoExists ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0&fs=1&iv_load_policy=3&autohide=1&theme=dark&color=white`}
          frameBorder="0"
          allowFullScreen
          title="Video Player"
          className="w-full h-[300px] md:h-[500px] rounded-2xl"
          onLoad={() => setLoading(false)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-[300px] md:h-[500px] rounded-2xl bg-white bg-opacity-25">
          <p>Video not available</p>
        </div>
      )}
    </div>
  );
};

export default HandleYT;
