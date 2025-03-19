"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function VideoUploader() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fullVideo, setFullVideo] = useState<File | null>(null);
  const [bannerVideo, setBannerVideo] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullVideo || !bannerVideo || !title) {
      setError("Please fill in all required fields");
      return;
    }

    setIsUploading(true);
    setError(null);
    setSuccess(false);

    try {
      // Upload full video
      const fullVideoFormData = new FormData();
      fullVideoFormData.append("file", fullVideo);
      const fullVideoResponse = await fetch("/api/upload", {
        method: "POST",
        body: fullVideoFormData,
      });
      const fullVideoData = await fullVideoResponse.json();
      if (!fullVideoResponse.ok) throw new Error(fullVideoData.error);

      // Upload banner video
      const bannerVideoFormData = new FormData();
      bannerVideoFormData.append("file", bannerVideo);
      const bannerVideoResponse = await fetch("/api/upload", {
        method: "POST",
        body: bannerVideoFormData,
      });
      const bannerVideoData = await bannerVideoResponse.json();
      if (!bannerVideoResponse.ok) throw new Error(bannerVideoData.error);

      // Save to database
      const saveResponse = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          fullVideoId: fullVideoData.videoId,
          bannerVideoId: bannerVideoData.videoId,
        }),
      });
      const saveData = await saveResponse.json();
      if (!saveResponse.ok) throw new Error(saveData.error);

      setSuccess(true);
      setTitle("");
      setDescription("");
      setFullVideo(null);
      setBannerVideo(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullVideo">Full Video *</Label>
        <Input
          id="fullVideo"
          type="file"
          accept="video/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFullVideo(e.target.files?.[0] || null)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bannerVideo">Banner Video *</Label>
        <Input
          id="bannerVideo"
          type="file"
          accept="video/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBannerVideo(e.target.files?.[0] || null)}
          required
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {success && (
        <div className="text-green-500 text-sm">Video uploaded successfully!</div>
      )}

      <Button type="submit" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload Video"}
      </Button>
    </form>
  );
} 