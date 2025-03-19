"use client";

import dynamic from "next/dynamic";
import { CrtNoise } from "@/components/crt-noise";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Dynamically import the video components for better performance
const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});
const MainVideoPlayer = dynamic(() => import("@/components/main-video-player"), {
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

export default function HomePage() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/videos', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  // Always use the hardcoded main video ID
  const mainVideoId = "486ad295feb60d67e77f2a77d09c04c8";

  return (
    <div className="space-y-24">
      {/* Hero Video Section (Full Width) */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <div className="w-full aspect-video relative">
          <CrtNoise />
          <MainVideoPlayer videoId={mainVideoId} />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="space-y-8 relative pt-[56.25vw]">
        {/* Portfolio Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-7xl mx-auto px-4">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div 
                key={video._id} 
                className="aspect-video relative rounded-none overflow-hidden group"
              >
                <VideoPlayer videoId={video.bannerVideoId} />
                <button
                  onClick={() => router.push(`/my-work/${video.fullVideoId}`)}
                  className="absolute inset-0 w-full h-full z-10 cursor-pointer bg-transparent hover:bg-black/20 transition-colors"
                />
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-white py-8">
              No videos available. Please check back later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}