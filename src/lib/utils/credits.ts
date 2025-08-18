export function calculateCredits(
  durationSec: number,
  resolution: '512p' | '720p' | '1080p'
): number {
  const baseCredits = Math.ceil(durationSec / 4);
  
  const resolutionMultiplier = {
    '512p': 1,
    '720p': 1.5,
    '1080p': 2.5,
  };
  
  return Math.ceil(baseCredits * resolutionMultiplier[resolution]);
}

export function getResolutionCategory(width: number, height: number): '512p' | '720p' | '1080p' {
  const pixels = width * height;
  
  if (pixels <= 512 * 512) return '512p';
  if (pixels <= 1280 * 720) return '720p';
  return '1080p';
}