import mongoose, { Document } from 'mongoose';

export interface IVideo extends Document {
  _id: string;
  title: string;
  fullVideoId?: string;
  bannerVideoId?: string;
  description?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const videoSchema = new mongoose.Schema<IVideo>({
  title: { type: String, required: true },
  fullVideoId: { type: String, required: false },
  bannerVideoId: { type: String, required: false },
  description: { type: String, required: false },
  order: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
videoSchema.pre('save', function(this: IVideo, next: () => void) {
  this.updatedAt = new Date();
  next();
});

const Video = mongoose.models.Video || mongoose.model<IVideo>('Video', videoSchema);

export { Video }; 