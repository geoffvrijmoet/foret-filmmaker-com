"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import { useState } from "react";

type VideoType = "directed" | "edited";

// Color constants for easy updating
const COLORS = {
  directed: { 
    color: "text-brand-green", 
    shadow: "#71eb99"
  },
  edited: { 
    color: "text-brand-yellow", 
    shadow: "#ffffa9"
  },
} as const;

interface PortfolioVideo {
  id: string;
  title: string;
  type: VideoType[];
  videoId: string;
}

// Dynamically import the video components for better performance
const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});
const MainVideoPlayer = dynamic(() => import("@/components/main-video-player"), {
  ssr: false,
});

const portfolioVideos: PortfolioVideo[] = [
  {
    id: "1",
    title: "pl-420",
    type: ["directed"],
    videoId: "23c2045bd121fa5d6189e856bcd55e5d",
  },
  {
    id: "2",
    title: "tcu-trailer",
    type: ["edited"],
    videoId: "68a4fe62af9c19e90b895e7d870cd240",
  },
  {
    id: "3",
    title: "hola-nola-30-second-spec-ad",
    type: ["directed"],
    videoId: "922f5e4c6c0cdf28d5387918163e7737",
  },
  {
    id: "4",
    title: "d-reel-after-flashback",
    type: ["directed"],
    videoId: "c9f680d7245fb575b9bcd32c57e2e9f0",
  },
  {
    id: "5",
    title: "in-fine-print",
    type: ["edited"],
    videoId: "df56b53a68b24a628dc6515d07faa665",
  },
  {
    id: "6",
    title: "foret-editing-reel",
    type: ["edited"],
    videoId: "ce062e0fc20e023bd25efa5115a4b2f4",
  },
  {
    id: "7",
    title: "d-reel-scene-29-30",
    type: ["directed"],
    videoId: "1462cf37e8d47569ecb340b3d8531d67",
  },
  {
    id: "8",
    title: "20210802-dis-online",
    type: ["edited"],
    videoId: "6ce54b0eefff01e833ed3998c10a6510",
  },
  {
    id: "9",
    title: "just-chill-online",
    type: ["directed"],
    videoId: "0744a817c95d7aa9a8ece8021dabc470",
  },
  {
    id: "10",
    title: "ccm-promo",
    type: ["edited"],
    videoId: "30861c2ad598c2627e62562af01f4c60",
  },
  {
    id: "11",
    title: "online-unsweet",
    type: ["directed"],
    videoId: "de711d7ac2e1a57cf8a62277915a2f00",
  },

  {
    id: "12",
    title: "online-unsweet",
    type: ["directed"],
    videoId: "de711d7ac2e1a57cf8a62277915a2f00",
  },

  

  

];

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<VideoType>("edited");
  const mainVideoId = "486ad295feb60d67e77f2a77d09c04c8";

  const getButtonStyle = (type: VideoType, selectedType: VideoType) =>
    clsx(
      "relative px-6 py-2 text-[60px] font-extralight transition-all duration-1",
      selectedType === type
        ? [
            COLORS[type].color,
            "after:content-[attr(data-content)] after:absolute after:left-0 after:top-0 after:translate-x-[28px] after:translate-y-[10px] after:opacity-0 after:scale-105 after:-z-10",
            type === "directed" ? "after:text-brand-green" : "after:text-brand-yellow"
          ]
        : "text-muted-foreground hover:text-primary"
    );

  const getRingStyle = (video: PortfolioVideo, selectedType: VideoType) =>
    clsx(
      "aspect-video relative rounded-lg overflow-hidden",
      video.type.includes(selectedType) && "border-[1px]",
      selectedType === "directed" && "border-brand-green",
      selectedType === "edited" && "border-brand-yellow"
    );

  return (
    <div className="space-y-24">
      {/* Hero Video Section (Full Width) */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1080px]">
          <div className="relative w-full pt-[56.25%]">
            <div className="absolute top-0 left-0 w-full h-full">
              <MainVideoPlayer videoId={mainVideoId} />
            </div>
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
              data-content={type.toUpperCase()}
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