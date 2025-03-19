"use client";

interface VideoPlayerProps {
  videoId: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoId,
  className = "",
  muted = true,
  loop = true
}) => {
  return (
    <iframe
      src={`https://customer-jot89waup74lm7h1.cloudflarestream.com/${videoId}/iframe?autoplay=true&muted=${muted}&controls=false&loop=${loop}&quality=high&preload=auto&maxResolution=4k`}
      loading="lazy"
      className={className}
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

export default VideoPlayer;