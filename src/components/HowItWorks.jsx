import React from 'react';
import { Rocket, Trophy, BookOpenCheck } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold">The 3-step Hiring Module</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">Designed to showcase real skills and match you to real jobs. Learn, compete, and connect with recruiters—all in one flow.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <StepCard
            icon={<BookOpenCheck size={28} />}
            title="1) Live Class with MKV"
            desc="A secret topic delivered by legendary mentor MKV. Learn cutting-edge concepts in a power-packed session."
            accent="#ef4444"
          />
          <StepCard
            icon={<Trophy size={28} />}
            title="2) Contest on the Topic"
            desc="Apply what you learned right away in a timed contest. Your performance builds your job-match profile."
            accent="#f59e0b"
          />
          <StepCard
            icon={<Rocket size={28} />}
            title="3) Get Paired with Jobs"
            desc="Based on performance and interests, meet the right recruiters and opportunities on the spot."
            accent="#22c55e"
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, desc, accent }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6 border-4 border-black shadow-[10px_10px_0_0_var(--shadow)]" style={{ ['--shadow']: accent }}>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl border-2 border-black" style={{ backgroundColor: accent }}>
          {icon}
        </div>
        <h3 className="text-xl font-extrabold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-800">{desc}</p>
    </div>
  );
}
