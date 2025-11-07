import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fJr8g1jKQb4P0y2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients on top of 3D (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-600" />
          <span className="font-medium text-amber-700">Nityakarma</span>
        </div>

        <h1 className="font-geist text-5xl font-bold leading-tight text-gray-900 drop-shadow-sm sm:text-6xl md:text-7xl">
          Your lifelong spiritual companion
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 sm:text-xl">
          — from daily karma to life’s celebrations.
        </p>

        <p className="mt-6 max-w-3xl text-balance text-base text-gray-600">
          A unified spiritual-tech platform connecting priests, pooja stores, event organizers, photographers, and devotees. From the smallest daily pooja to grand weddings and ceremonies — authenticity, accessibility, and community in one seamless ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#modules"
            className="rounded-full bg-amber-600 px-6 py-3 text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Explore the ecosystem
          </a>
          <a
            href="#cta"
            className="rounded-full bg-white/80 px-6 py-3 text-amber-700 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Get started
          </a>
        </div>

        <p className="mt-6 max-w-4xl text-sm text-gray-500">
          One-line pitch: Nityakarma is a unified spiritual-tech platform that brings priests, pooja stores, event managers, and devotees together — empowering every ritual from daily worship to life’s biggest milestones through one seamless ecosystem.
        </p>
      </div>
    </section>
  );
};

export default Hero3D;
