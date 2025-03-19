"use client";

import { useEffect, useRef, useState } from "react";

export function CrtNoise() {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const previousPixels = new Uint8ClampedArray(canvas.width * canvas.height * 4);

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // First pass: regular noise
      for (let i = 0; i < data.length; i += 4) {
        // 20% chance to update each pixel
        if (Math.random() > 0.8) {
          // Only set a value if random is above threshold (creating sparse grains)
          if (Math.random() > 0.9992) {
            // Calculate x,y position from pixel index
            const pixelIndex = i / 4;
            const x = pixelIndex % canvas.width;
            const y = Math.floor(pixelIndex / canvas.width);
            
            // Random radius between 0.5 and 1 pixel
            const radius = Math.random() * 0.5 + 0.5;
            
            // Create a small cluster of pixels
            for (let dy = -2; dy <= 2; dy++) {
              for (let dx = -2; dx <= 2; dx++) {
                const newX = x + dx;
                const newY = y + dy;
                
                // Check if we're within the canvas bounds
                if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
                  // Calculate distance from center
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  
                  // If within radius, set pixel to white
                  if (distance <= radius) {
                    const newIndex = (newY * canvas.width + newX) * 4;
                    data[newIndex] = 255;     // R
                    data[newIndex + 1] = 255; // G
                    data[newIndex + 2] = 255; // B
                    data[newIndex + 3] = 255; // A
                  }
                }
              }
            }
          } else {
            data[i] = 0;     // R
            data[i + 1] = 0; // G
            data[i + 2] = 0; // B
            data[i + 3] = 255; // A
          }
        } else {
          // Use previous frame's value
          data[i] = previousPixels[i];
          data[i + 1] = previousPixels[i + 1];
          data[i + 2] = previousPixels[i + 2];
          data[i + 3] = 255;
        }
      }

      // Second pass: occasional scratches and dust
      if (Math.random() > 0.95) { // 5% chance per frame
        // Random scratch
        const startX = Math.floor(Math.random() * canvas.width);
        const startY = Math.floor(Math.random() * canvas.height);
        const length = Math.random() * 20 + 5; // 5-25 pixels long
        const angle = Math.random() * Math.PI * 2; // Random angle

        for (let i = 0; i < length; i++) {
          const x = Math.floor(startX + Math.cos(angle) * i);
          const y = Math.floor(startY + Math.sin(angle) * i);
          
          if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            const index = (y * canvas.width + x) * 4;
            data[index] = 255;     // R
            data[index + 1] = 255; // G
            data[index + 2] = 255; // B
            data[index + 3] = 255; // A
          }
        }

        // Random dust cluster
        const dustX = Math.floor(Math.random() * canvas.width);
        const dustY = Math.floor(Math.random() * canvas.height);
        const dustSize = Math.random() * 3 + 1; // 1-4 pixels

        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const x = dustX + dx;
            const y = dustY + dy;
            
            if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance <= dustSize) {
                const index = (y * canvas.width + x) * 4;
                data[index] = 255;     // R
                data[index + 1] = 255; // G
                data[index + 2] = 255; // B
                data[index + 3] = 255; // A
              }
            }
          }
        }
      }

      // Store current frame for next iteration
      previousPixels.set(data);
      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className={`absolute top-0 left-0 w-full aspect-video bg-black ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          )
        `,
        backgroundSize: '100% 100%, 100% 100%',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        width={512}
        height={512}
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
} 