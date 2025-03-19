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
    <main className="w-full">
      <VideoList videos={videos} />
    </main>
  );
} 