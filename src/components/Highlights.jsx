import React from "react";

const highlights = [
  { title: "Ruggedized Design", desc: "IP67-rated frames and EMI-hardened electronics." },
  { title: "AI-Powered Autonomy", desc: "Edge inference for real-time decision-making." },
  { title: "Rapid Deploy", desc: "Quick field setup and low-logistics footprint." },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 px-6 bg-[#121416]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-white mb-8">Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="card p-6 rounded-lg">
              <h4 className="font-semibold text-white text-lg mb-2">{h.title}</h4>
              <p className="text-gray-300 text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
