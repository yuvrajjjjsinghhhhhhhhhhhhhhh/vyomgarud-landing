import React from "react";

const items = [
  {
    title: "Autonomous Recon",
    desc: "Persistent surveillance with automated target detection and low-latency telemetry.",
  },
  {
    title: "Payload Integration",
    desc: "Modular payload bays for sensors, comms, and mission-specific hardware.",
  },
  {
    title: "Secure Comms",
    desc: "End-to-end encrypted links with redundant communication channels.",
  },
  {
    title: "Tactical Endurance",
    desc: "Extended range and endurance powered by advanced energy systems.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-[#0f1214] px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-semibold text-white mb-2">Capabilities</h3>
        <p className="text-gray-400">Mission-ready solutions engineered for precision and resilience.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="card p-6 rounded-xl hover:scale-105 transition-transform duration-200"
          >
            <h4 className="font-semibold text-white text-lg mb-3">
              {item.title}
            </h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
