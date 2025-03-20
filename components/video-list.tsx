"use client";

import VideoPlayer from "@/components/video-player";
import type { IVideo } from "@/models/video";

interface VideoListProps {
  videos: IVideo[];
}

export default function VideoList({ videos }: VideoListProps) {
  // Filter out videos without fullVideoId and deduplicate based on fullVideoId
  const filteredVideos = videos
    .filter((video): video is IVideo & { fullVideoId: string } => Boolean(video.fullVideoId))
    .filter((video, index, self) => 
      index === self.findIndex((v) => v.fullVideoId === video.fullVideoId)
    );

  return (
    <div className="grid grid-cols-1 gap-4 max-w-[2000px] mx-auto">
      {filteredVideos.map((video) => (
        <div 
          key={video._id} 
          id={video._id}
          className="w-full"
        >
          <div className="aspect-video w-full">
            <VideoPlayer
              videoId={video.fullVideoId}
              className="w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 