"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  videoId: string;
  className?: string;
  width?: string;
  height?: string;
}

export function LazyVideo({
  videoId,
  className = "",
  width = "100%",
  height = "350px",
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (!isInView) {
    return (
      <div
        ref={ref}
        className={`${className} bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center`}
        style={{ width, height }}
      >
        <div className="text-gray-500 text-sm">Loading video...</div>
      </div>
    );
  }

  return (
    <div className={className} style={{ width, height }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0&fs=1&iv_load_policy=3&autohide=1&theme=dark&color=white&loading=lazy`}
        frameBorder="0"
        allowFullScreen
        title="Video Player"
        className="w-full h-full rounded-lg "
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
}
