// src/types/index.ts

export type Platform = 
  | 'youtube'
  | 'tiktok'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'vimeo';

export type DownloadFormat = 'mp3' | 'mp4';

export type DownloadStatus = 
  | 'pending'
  | 'downloading'
  | 'completed'
  | 'failed'
  | 'paused';

export type VideoQuality = {
  label: string;        // '1080p (Full HD)'
  value: string;        // '1080'
  formatId: string;     // Format code for yt-dlp
  filesize: number | null;
};

export type VideoInfo = {
  url: string;
  platform: Platform;
  title: string;
  thumbnail: string;
  duration: number;     // in seconds
  uploader: string;
  availableQualities: VideoQuality[];
};

export type DownloadProgress = {
  progress: number;     // 0-100
  speed: string | null; // '2.5MB/s'
  eta: string | null;   // '00:15'
  downloadedBytes: number | null;
  totalBytes: number | null;
};

export type Download = {
  id: string;
  videoInfo: VideoInfo;
  format: DownloadFormat;
  quality: string;      // '1080' or 'audio'
  status: DownloadStatus;
  progress: DownloadProgress;
  downloadUrl: string | null;
  filename: string | null;
  error: string | null;
  startedAt: number;    // timestamp
  completedAt: number | null;
};