"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

interface SplineBackgroundProps {
  scene?: string;
  className?: string;
}

export function SplineBackground({
  scene = "https://prod.spline.design/z-u0nizsml18rq9w/scene.splinecode",
  className = "",
}: SplineBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full bg-gradient-to-br from-red-900/10 via-black to-orange-900/10" />
        }
      >
        <Spline
          scene={scene}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.6,
          }}
        />
      </Suspense>
    </div>
  );
}
