"use client";

interface MainVideoPlayerProps {
  videoId: string;
}

const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({ videoId }) => {
  return (
    <iframe
      src={`https://customer-jot89waup74lm7h1.cloudflarestream.com/${videoId}/iframe?autoplay=true&muted=true&controls=false&loop=true&quality=high&preload=auto&maxResolution=1080p`}
      loading="lazy"
      style={{
        border: "none",
        width: "100%",
        height: "100%",
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
    ></iframe>
  );
};

export default MainVideoPlayer; 