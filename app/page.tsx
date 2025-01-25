'use client';

import { motion } from "framer-motion";

export default function HomePage() {
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
        <h2 className="text-xl text-muted-foreground">
          I&apos;m a filmmaker, editor and cinematographer based in Brooklyn, NY.
        </h2>
      </motion.div>
      
      <div className="aspect-video">
        {/* Placeholder for Vimeo embed - we'll add the iframe when you have the link */}
        <div className="flex items-center justify-center h-full border rounded-lg bg-muted">
          <p className="text-muted-foreground">Video reel coming soon</p>
        </div>
      </div>
    </div>
  );
}
