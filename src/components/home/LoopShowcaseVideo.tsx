"use client";

import { useState } from "react";

export default function LoopShowcaseVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black mb-3">
            See Our Collection in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the latest jerseys and footwear from top clubs and brands
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-w-5xl mx-auto">
          {!videoError ? (
            <video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              poster="/showcase-poster.jpg"
              onError={() => setVideoError(true)}
            >
              <source src="/showcase-video.mp4" type="video/mp4" />
              <source src="/showcase-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Video Showcase</h3>
                <p className="text-sm text-muted-foreground">
                  Check out our latest collection of jerseys and footwear
                </p>
              </div>
            </div>
          )}
          
          {/* Optional overlay gradient for better text visibility if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Instructions for adding video */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-5xl mx-auto">
          <p className="text-sm text-blue-900">
            <strong>📹 To add your video:</strong> Place your showcase video files in the{" "}
            <code className="bg-blue-100 px-1 py-0.5 rounded">public/</code> folder as{" "}
            <code className="bg-blue-100 px-1 py-0.5 rounded">showcase-video.mp4</code> and{" "}
            <code className="bg-blue-100 px-1 py-0.5 rounded">showcase-video.webm</code>. 
            Also add a poster image as{" "}
            <code className="bg-blue-100 px-1 py-0.5 rounded">showcase-poster.jpg</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
