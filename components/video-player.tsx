"use client";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
    return (
        <iframe
          src={`https://customer-jot89waup74lm7h1.cloudflarestream.com/${videoId}/iframe?autoplay=true&muted=true&controls=false&loop=true&quality=high&preload=auto&maxResolution=4k`}
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

export default VideoPlayer;