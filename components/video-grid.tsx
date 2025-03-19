"use client";

import Link from "next/link";
import VideoPlayer from "@/components/video-player";
import type { IVideo } from "@/models/video";

interface VideoGridProps {
  videos: IVideo[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {videos.map((video) => (
        <Link 
          key={video._id} 
          href={`/my-work#${video._id}`}
          className="relative aspect-video hover:opacity-90 transition-opacity"
        >
          {video.bannerVideoId && (
            <VideoPlayer
              videoId={video.bannerVideoId}
              className="w-full h-full object-cover"
              muted
              loop
            />
          )}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">{video.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
} 