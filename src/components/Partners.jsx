import React from 'react';
import { Play, Star } from 'lucide-react';

const recruiterVideos = [
  { company: 'TechNova', rep: 'Asha — Senior Recruiter', id: 'vid1' },
  { company: 'DataForge', rep: 'Rohit — Talent Partner', id: 'vid2' },
  { company: 'CloudSutra', rep: 'Sana — Hiring Lead', id: 'vid3' },
  { company: 'QuarkLabs', rep: 'Arjun — Engineering Manager', id: 'vid4' },
];

const companies = [
  'TechNova','DataForge','CloudSutra','QuarkLabs','FinPeak','OrbitPay','NeuroMesh','BrightByte','StackRail','BlueComet','GreenOps','NovaAI','ShipNow','CoreChain','MetaSoft'
];

export default function Partners() {
  return (
    <section className="relative py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold">Recruiters & Companies</h2>
            <p className="mt-3 text-zinc-300 max-w-2xl">Hear directly from recruiters and discover companies scouting for top performers at the AU Hiring Tournament.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {recruiterVideos.map((v, i) => (
            <VideoCard key={v.id} {...v} index={i} />
          ))}
        </div>

        <div className="mt-12">
          <div className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Featuring 15+ modern tech companies</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {companies.map((c, i) => (
              <div key={c} className="bg-white text-black border-4 border-black rounded-xl px-4 py-3 font-bold flex items-center gap-2 shadow-[6px_6px_0_0_#38bdf8]">
                <Star size={16} className="text-yellow-500" /> {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ company, rep, index }) {
  const colors = ['#22d3ee', '#a78bfa', '#f472b6', '#34d399'];
  const accent = colors[index % colors.length];
  return (
    <div className="relative overflow-hidden bg-white text-black border-4 border-black rounded-2xl shadow-[10px_10px_0_0_var(--shadow)]" style={{ ['--shadow']: accent }}>
      <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(100% 120% at 0% 0%, ${accent}22 0%, transparent 60%)` }} />
        <button className="z-10 inline-flex items-center gap-2 bg-emerald-400 px-4 py-2 border-4 border-black rounded-xl font-bold shadow-[6px_6px_0_0_#10b981]">
          <Play size={18} /> Play message
        </button>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-lg font-extrabold">{company}</div>
          <div className="text-sm text-zinc-700">{rep}</div>
        </div>
        <div className="text-[10px] uppercase tracking-wider bg-black text-white px-2 py-1 rounded">Recruiter Message</div>
      </div>
    </div>
  );
}
