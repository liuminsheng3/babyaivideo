import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { AlertTriangle, Info, Lightbulb } from 'lucide-react';

export default function NotesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">AI Limitations & Best Practices</h1>
          
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-3">Known Limitations</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Occasional flickering in fast-moving scenes</li>
                    <li>• Motion blur may affect transformation quality</li>
                    <li>• Complex backgrounds might show artifacts</li>
                    <li>• Side profiles may not transform as accurately as front faces</li>
                    <li>• Very dark or overexposed videos may have reduced quality</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-3">Recommended Input Quality</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Minimum resolution: 720p (1280×720)</li>
                    <li>• Good lighting conditions</li>
                    <li>• Steady camera movement</li>
                    <li>• Clear, visible faces</li>
                    <li>• MP4 or MOV format with H.264 codec</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-3">Tips for Best Results</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use videos with front-facing subjects</li>
                    <li>• Ensure faces are at least 10% of the frame</li>
                    <li>• Avoid extreme angles or rotations</li>
                    <li>• Keep videos under 30 seconds for optimal processing</li>
                    <li>• Use the preview feature before finalizing</li>
                    <li>• Try different strength settings (0.3-0.5 recommended)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Failure Cases & Solutions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">No faces detected</h3>
                  <p className="text-gray-600">Ensure faces are clearly visible and at least 64×64 pixels</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Processing timeout</h3>
                  <p className="text-gray-600">Try reducing video length or resolution</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Poor quality output</h3>
                  <p className="text-gray-600">Check input video quality and lighting conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}