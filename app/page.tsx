'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

type VideoType = 'directed' | 'edited';

interface PortfolioVideo {
  id: string;
  title: string;
  type: VideoType[];
  fileId: string;
}

const portfolioVideos: PortfolioVideo[] = [
  {
    id: '1',
    title: 'in-fine-print',
    type: ['directed'],
    fileId: '1I_V8uW57GDaWR-CPUhRAoA9gmUKl4go7'
  },
  {
    id: '2',
    title: 'tcu-trailer',
    type: ['edited'],
    fileId: '166B2LM--9srKemweCXGmgw8mCjnmU4rV'
  },
  {
    id: '3',
    title: 'pl-420',
    type: ['directed'],
    fileId: '1upiBeNlUZU4G0ZLavZ4lJ3SDLfc-YxBU'
  },
  {
    id: '4',
    title: 'hola-nola-30-second-spec-ad',
    type: ['directed'],
    fileId: '1Gmh5IOqjVzbSeCHGZqMAi6-eitKEgzi5'
  },
  {
    id: '5',
    title: 'd-reel-scene-29-30',
    type: ['directed'],
    fileId: '1yoJk6i48SeizRoq9ME7dKR3ypLfLsk5A'
  },
  {
    id: '6',
    title: 'd-reel-after-flashback',
    type: ['directed'],
    fileId: '1LFk4J3SvvrNCsrkDdkMu4awcNYQ9MIhG'
  },
  {
    id: '7',
    title: 'just-chill-online',
    type: ['edited'],
    fileId: '1Qdo-8BNCH-AUO3Cf6tuSOxoMAurUD-J6'
  },
  {
    id: '8',
    title: 'ccm-promo',
    type: ['edited'],
    fileId: '1HD3jS81I6q-dVquV3vgavnlzJsoqjKsh'
  },

  // Add more videos here with their Google Drive fileIds
];

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<VideoType>('edited');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const fileId = '1YbteP511s8wg6saD2Gb8-n-gO0uRZnLR';
    console.log('API Key available:', !!key);
    
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${key}`;
    setVideoUrl(url);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setError('Error loading video');
      });

      videoRef.current.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });

      videoRef.current.addEventListener('play', () => {
        console.log('Video started playing');
      });
    }
  }, [videoUrl]);

  const getVideoUrl = (fileId: string) => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    return `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${key}`;
  };

  const filteredVideos = portfolioVideos.filter(video => 
    video.type.includes(selectedType)
  );

  return (
    <div className="space-y-24">
      {/* Hero Video Section */}
      <div className="space-y-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            opacity: { duration: 0.3 }
          }}
        >
        </motion.div>

        <div className="relative aspect-video w-full max-w-[1080px] mx-auto">
          {videoUrl ? (
            <video 
              ref={videoRef}
              className="w-full h-full rounded-lg shadow-lg object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center h-full rounded-lg bg-muted">
              <p className="text-muted-foreground">Loading video...</p>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80 rounded-lg">
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="space-y-8">
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setSelectedType('directed')}
            className={`px-6 py-2 text-lg font-medium transition-colors ${
              selectedType === 'directed'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            DIRECTED
          </button>
          <button
            onClick={() => setSelectedType('edited')}
            className={`px-6 py-2 text-lg font-medium transition-colors ${
              selectedType === 'edited'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            EDITED
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {filteredVideos.map((video) => (
            <div key={video.id} className="aspect-video">
              <video
                className="w-full h-full rounded-lg shadow-lg object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={getVideoUrl(video.fileId)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



