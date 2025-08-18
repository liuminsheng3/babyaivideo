export type JobStatus = 
  | 'queued' 
  | 'running' 
  | 'generating' 
  | 'postprocess' 
  | 'finished' 
  | 'failed' 
  | 'canceled';

export interface JobParams {
  seed: number;
  steps: number;
  guidance: number;
  strength: number;
  keepAspect: boolean;
  maxLong: number;
  fps: 'source' | number;
}

export interface Job {
  id: string;
  userId: string;
  status: JobStatus;
  fileUrl: string;
  outputUrl?: string;
  thumbUrl?: string;
  prompt: string;
  negativePrompt?: string;
  model: string;
  params: JobParams;
  progress: number;
  estimatedCredits: number;
  actualCredits?: number;
  error?: string;
  startedAt?: string;
  finishedAt?: string;
  createdAt: string;
  updatedAt: string;
  inputDurationSec?: number;
  inputResolution?: string;
  outputResolution?: string;
}

export interface User {
  id: string;
  email: string;
  credits: number;
  createdAt: string;
}

export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number;
  currency: string;
  popular?: boolean;
}

export interface VideoMetadata {
  duration: number;
  resolution: string;
  codec: string;
  frameRate: number;
  fileSize: number;
}