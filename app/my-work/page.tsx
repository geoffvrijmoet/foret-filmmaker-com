import { Video } from "@/models/video";
import connectDB from "@/lib/mongodb";
import VideoList from "@/components/video-list";

async function getVideos() {
  await connectDB();
  return Video.find().sort({ order: 1 });
}

export default async function MyWork() {
  const videos = await getVideos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">My Work</h1>
        <VideoList videos={videos} />
      </div>
    </main>
  );
} 