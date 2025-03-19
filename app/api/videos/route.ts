import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import connectDB from "@/lib/mongodb";
import { Video } from "@/models/video";

export const dynamic = 'force-dynamic'; // This makes the route dynamic instead of static
export const revalidate = 0; // This prevents caching

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();

    const video = await Video.create({
      title: body.title,
      description: body.description,
      fullVideoId: body.fullVideoId,
      bannerVideoId: body.bannerVideoId,
      order: await Video.countDocuments(), // Add to end of list
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("Video creation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create video" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log('Attempting to connect to MongoDB...');
    await connectDB();
    console.log('Connected to MongoDB successfully');
    
    // Get the fullVideoId from query params if it exists
    const { searchParams } = new URL(request.url);
    const fullVideoId = searchParams.get('fullVideoId');
    
    console.log('Fetching videos...');
    let query = {};
    if (fullVideoId) {
      query = { fullVideoId };
    }
    
    const videos = await Video.find(query)
      .sort({ order: 1, createdAt: -1 })
      .lean();
    console.log(`Found ${videos.length} videos`);
    
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Detailed error in GET /api/videos:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch videos' },
      { status: 500 }
    );
  }
} 