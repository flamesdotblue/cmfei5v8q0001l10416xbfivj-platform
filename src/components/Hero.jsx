import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch min-h-[80vh]">
        <div className="relative h-[60vh] lg:h-auto">
          <Spline
            scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="px-6 lg:px-10 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full w-max border-4 border-black shadow-[6px_6px_0_0_#22d3ee]">New-age hiring module</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            AU Hiring Tournament
          </h1>
          <p className="mt-4 text-zinc-300 max-w-xl">
            AlgoUniversity presents a bold, in-person hiring experience in Hyderabad. Learn live, compete, and get matched to the right jobs—fast.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <InfoPill icon={<Calendar size={16} />} text="21 Sept" sub="Saturday" />
            <InfoPill icon={<Clock size={16} />} text="12:00 PM" sub="IST" />
            <InfoPill icon={<MapPin size={16} />} text="JNTUH" sub="Hyderabad" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#tickets" className="inline-flex items-center justify-center gap-2 bg-emerald-400 text-black font-semibold px-6 py-4 rounded-xl border-4 border-black shadow-[8px_8px_0_0_#10b981] hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_#10b981] transition-transform">
              <Ticket className="" size={18} /> Buy Early-bird Ticket <ArrowRight size={18} />
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-4 rounded-xl border-4 border-black shadow-[8px_8px_0_0_#a78bfa] hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_#a78bfa] transition-transform">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({ icon, text, sub }) {
  return (
    <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#22d3ee]">
      <span>{icon}</span>
      <div className="leading-tight">
        <div className="font-bold text-sm">{text}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-70">{sub}</div>
      </div>
    </div>
  );
}
