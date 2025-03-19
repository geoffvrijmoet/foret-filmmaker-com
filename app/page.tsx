"use client";

import dynamic from "next/dynamic";
import { CrtNoise } from "@/components/crt-noise";

// Dynamically import the video components for better performance
const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});
const MainVideoPlayer = dynamic(() => import("@/components/main-video-player"), {
  ssr: false,
});

interface PortfolioVideo {
  id: string;
  title: string;
  videoId: string;
}

const portfolioVideos: PortfolioVideo[] = [
  {
    id: "1",
    title: "pl-420",
    videoId: "23c2045bd121fa5d6189e856bcd55e5d",
  },
  {
    id: "2",
    title: "tcu-trailer",
    videoId: "68a4fe62af9c19e90b895e7d870cd240",
  },
  {
    id: "3",
    title: "hola-nola-30-second-spec-ad",
    videoId: "922f5e4c6c0cdf28d5387918163e7737",
  },
  {
    id: "4",
    title: "d-reel-after-flashback",
    videoId: "c9f680d7245fb575b9bcd32c57e2e9f0",
  },
  {
    id: "5",
    title: "in-fine-print",
    videoId: "df56b53a68b24a628dc6515d07faa665",
  },
  {
    id: "6",
    title: "foret-editing-reel",
    videoId: "ce062e0fc20e023bd25efa5115a4b2f4",
  },
  {
    id: "7",
    title: "d-reel-scene-29-30",
    videoId: "1462cf37e8d47569ecb340b3d8531d67",
  },
  {
    id: "8",
    title: "20210802-dis-online",
    videoId: "6ce54b0eefff01e833ed3998c10a6510",
  },
  {
    id: "9",
    title: "just-chill-online",
    videoId: "0744a817c95d7aa9a8ece8021dabc470",
  },
  {
    id: "10",
    title: "ccm-promo",
    videoId: "30861c2ad598c2627e62562af01f4c60",
  },
  {
    id: "11",
    title: "online-unsweet",
    videoId: "de711d7ac2e1a57cf8a62277915a2f00",
  },
  {
    id: "12",
    title: "online-unsweet",
    videoId: "de711d7ac2e1a57cf8a62277915a2f00",
  },
];

export default function HomePage() {
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
          {portfolioVideos.map((video) => (
            <div key={video.id} className="aspect-video relative rounded-none overflow-hidden">
              <VideoPlayer videoId={video.videoId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}