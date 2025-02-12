'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
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

  return (
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
  );
}



