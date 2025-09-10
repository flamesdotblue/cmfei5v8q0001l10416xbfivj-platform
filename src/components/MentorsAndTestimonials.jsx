import React, { useEffect, useMemo, useState } from 'react';
import { Users, Quote, Play, Ticket, Clock } from 'lucide-react';

const mentors = [
  { name: 'MKV', title: 'Legendary Teacher', tag: 'Secret Topic Host' },
  { name: 'Ishita', title: 'SWE @ FinPeak', tag: 'Interview Coach' },
  { name: 'Karthik', title: 'Staff Engineer @ CloudSutra', tag: 'Systems Mentor' },
];

const textTestimonials = [
  {
    name: 'Ananya',
    text: 'The live class + contest combo is brilliant. I got 2 interviews the same week.',
  },
  {
    name: 'Samar',
    text: 'Neo-brutal vibe, tight schedule, real outcomes. Loved the energy at JNTUH last season!',
  },
  {
    name: 'Meera',
    text: 'Finally, a hiring event that rewards actual skill building. Highly recommend.',
  },
];

const videoTestimonials = [
  { name: 'Rahul', id: 't1' },
  { name: 'Nitya', id: 't2' },
  { name: 'Vikram', id: 't3' },
];

export default function MentorsAndTestimonials() {
  return (
    <section className="relative py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-3">
          <div className="p-3 bg-white text-black rounded-xl border-4 border-black shadow-[6px_6px_0_0_#f472b6]">
            <Users size={20} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">Mentors & Testimonials</h2>
        </header>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {mentors.map((m, i) => (
            <MentorCard key={m.name} {...m} index={i} />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((v, i) => (
            <VideoTestimonial key={v.id} name={v.name} index={i} />
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {textTestimonials.map((t, i) => (
            <TextTestimonial key={i} {...t} index={i} />
          ))}
        </div>

        <CTA />
      </div>
    </section>
  );
}

function MentorCard({ name, title, tag, index }) {
  const accents = ['#fca5a5', '#93c5fd', '#86efac'];
  const accent = accents[index % accents.length];
  return (
    <div className="bg-white text-black border-4 border-black rounded-2xl p-5 shadow-[10px_10px_0_0_var(--shadow)]" style={{ ['--shadow']: accent }}>
      <div className="h-20 w-20 rounded-xl bg-black text-white grid place-items-center font-extrabold text-xl border-4 border-black shadow-[6px_6px_0_0_#000]">
        {name.substring(0, 2)}
      </div>
      <div className="mt-3">
        <div className="text-xl font-extrabold">{name}</div>
        <div className="text-sm text-zinc-700">{title}</div>
        <div className="mt-2 text-xs uppercase tracking-widest bg-black text-white px-2 py-1 rounded w-max">{tag}</div>
      </div>
    </div>
  );
}

function VideoTestimonial({ name, index }) {
  const colors = ['#22d3ee', '#a78bfa', '#34d399'];
  const accent = colors[index % colors.length];
  return (
    <div className="overflow-hidden bg-white text-black border-4 border-black rounded-2xl shadow-[10px_10px_0_0_var(--shadow)]" style={{ ['--shadow']: accent }}>
      <div className="aspect-video bg-zinc-900 relative flex items-center justify-center">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}33, transparent 60%)` }} />
        <button className="z-10 inline-flex items-center gap-2 bg-emerald-400 px-4 py-2 border-4 border-black rounded-xl font-bold shadow-[6px_6px_0_0_#10b981]">
          <Play size={18} /> Play testimonial
        </button>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-lg font-extrabold">{name}</div>
          <div className="text-sm text-zinc-700">Participant</div>
        </div>
        <div className="text-[10px] uppercase tracking-wider bg-black text-white px-2 py-1 rounded">Video Review</div>
      </div>
    </div>
  );
}

function TextTestimonial({ name, text, index }) {
  const accents = ['#fde68a', '#c7d2fe', '#fda4af'];
  const accent = accents[index % accents.length];
  return (
    <div className="bg-white text-black border-4 border-black rounded-2xl p-5 shadow-[8px_8px_0_0_var(--shadow)]" style={{ ['--shadow']: accent }}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-black text-white rounded">
          <Quote size={16} />
        </div>
        <div>
          <p className="text-sm text-zinc-800">{text}</p>
          <div className="mt-3 font-bold">— {name}</div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  const [deadline] = useState(() => Date.now() + 1000 * 60 * 60 * 48); // 48 hours from mount
  const timeLeft = useCountdown(deadline);

  return (
    <section id="tickets" className="mt-16">
      <div className="bg-white text-black border-4 border-black rounded-2xl p-6 md:p-8 shadow-[12px_12px_0_0_#22d3ee]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm uppercase tracking-widest">Limited time</div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Early-bird tickets for the AU Hiring Tournament</h3>
            <p className="mt-2 text-zinc-800 max-w-2xl">Join us in-person at JNTUH, Hyderabad on 21st Sept, 12:00 PM. Secure your seat for MKV's live class, the contest, and on-ground job pairing.</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <PriceTag price="₹399" label="Early-bird" />
              <div className="text-xs text-zinc-700">Regular price: ₹799</div>
            </div>
          </div>

          <div className="md:min-w-[320px]">
            <div className="bg-black text-white border-4 border-black rounded-2xl p-5 relative">
              <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, #22d3ee55, transparent 60%)' }} />
              <div className="relative">
                <div className="text-sm uppercase tracking-widest text-zinc-300 mb-1 flex items-center gap-2">
                  <Clock size={16} /> Ends in
                </div>
                <div className="text-3xl font-extrabold tabular-nums">{timeLeft.d}d : {timeLeft.h}h : {timeLeft.m}m : {timeLeft.s}s</div>
                <a href="#register" className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-400 text-black font-bold px-5 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0_0_#10b981] hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_#10b981] transition-transform w-full">
                  <Ticket size={18} /> Get Ticket
                </a>
              </div>
            </div>
          </div>
        </div>

        <form id="register" className="mt-8 grid md:grid-cols-4 gap-3">
          <input required placeholder="Full name" className="md:col-span-1 px-4 py-3 rounded-xl border-4 border-black focus:outline-none" />
          <input required type="email" placeholder="Email" className="md:col-span-1 px-4 py-3 rounded-xl border-4 border-black focus:outline-none" />
          <input required placeholder="Phone" className="md:col-span-1 px-4 py-3 rounded-xl border-4 border-black focus:outline-none" />
          <button className="md:col-span-1 inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-5 py-3 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#22d3ee] hover:translate-y-0.5 transition-transform">
            <Ticket size={18} /> Reserve Early-bird
          </button>
        </form>
      </div>
    </section>
  );
}

function PriceTag({ price, label }) {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-300 px-3 py-1.5 rounded-lg border-4 border-black font-extrabold shadow-[4px_4px_0_0_#10b981]">
      {price}
      <span className="text-xs bg-black text-white px-2 py-0.5 rounded">{label}</span>
    </div>
  );
}

function useCountdown(deadline) {
  const get = useMemo(() => () => {
    const diff = Math.max(0, deadline - Date.now());
    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return { d: pad(d), h: pad(h), m: pad(m), s: pad(sec) };
  }, [deadline]);

  const [state, setState] = useState(get());
  useEffect(() => {
    const id = setInterval(() => setState(get()), 1000);
    return () => clearInterval(id);
  }, [get]);
  return state;
}

function pad(n) {
  return String(n).padStart(2, '0');
}
