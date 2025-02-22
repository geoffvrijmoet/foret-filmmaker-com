"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import { useState } from "react";

type VideoType = "directed" | "edited";

// Color constants for easy updating
const COLORS = {
  directed: "amber-400",
  edited: "red-500",
} as const;

interface PortfolioVideo {
  id: string;
  title: string;
  type: VideoType[];
  videoId: string;
}

// Dynamically import the video component for better performance
const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});

const portfolioVideos: PortfolioVideo[] = [
  // {
  //   id: "1",
  //   title: "in-fine-print",
  //   type: ["directed"],
  //   videoId: "1I_V8uW57GDaWR-CPUhRAoA9gmUKl4go7",
  // },
  {
    id: "3",
    title: "hola-nola-30-second-spec-ad",
    type: ["directed"],
    videoId: "922f5e4c6c0cdf28d5387918163e7737",
  },

  {
    id: "2",
    title: "tcu-trailer",
    type: ["edited"],
    videoId: "68a4fe62af9c19e90b895e7d870cd240",
  },
];

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<VideoType>("edited");
  const mainVideoId = "486ad295feb60d67e77f2a77d09c04c8";

  const getButtonStyle = (type: VideoType, selectedType: VideoType) =>
    clsx("px-6 py-2 text-lg font-medium transition-colors", {
      [`text-${COLORS[type]}`]: selectedType === type,
      "text-muted-foreground hover:text-primary": selectedType !== type,
    });

    const getRingStyle = (video: PortfolioVideo, selectedType: VideoType) =>
      clsx(
        "aspect-video relative rounded-lg overflow-hidden transition-all duration-300",
        video.type.includes(selectedType) && "ring-4 ring-offset-2",
        selectedType === "directed" && "ring-amber-400",
        selectedType === "edited" && "ring-red-500"
      );

  return (
    <div className="space-y-24">
      {/* Hero Video Section (Full Width) */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <VideoPlayer videoId={mainVideoId} />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="space-y-8">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-8">
          {(["directed", "edited"] as VideoType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={getButtonStyle(type, selectedType)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Portfolio Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {portfolioVideos.map((video) => (
            <div key={video.id} className={getRingStyle(video, selectedType)}>
              <VideoPlayer videoId={video.videoId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}