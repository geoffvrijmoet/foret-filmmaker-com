"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});

interface Video {
  _id: string;
  title: string;
  fullVideoId: string;
  bannerVideoId: string;
  description?: string;
  order: number;
}

export default function VideoPage() {
  const params = useParams();
  const videoId = params.videoId as string;
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(`/api/videos?fullVideoId=${videoId}`, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const data = await response.json();
        setVideo(data[0]); // Assuming the API returns an array and we want the first match
      } catch (err) {
        console.error('Error fetching video:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch video');
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [videoId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error || 'Video not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="aspect-video relative rounded-none overflow-hidden">
          <VideoPlayer videoId={video.fullVideoId} />
        </div>
      </div>
    </div>
  );
} 