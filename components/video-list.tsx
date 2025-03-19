"use client";

import VideoPlayer from "@/components/video-player";
import type { IVideo } from "@/models/video";

interface VideoListProps {
  videos: IVideo[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {videos.map((video) => (
        <div 
          key={video._id} 
          id={video._id}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold">{video.title}</h2>
          {video.description && (
            <p className="text-gray-600">{video.description}</p>
          )}
          <div className="aspect-video">
            {video.fullVideoId && (
              <VideoPlayer
                videoId={video.fullVideoId}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 