"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { VideoUploader } from "@/components/video-uploader";

export default function AdminPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <VideoUploader />
    </div>
  );
} 