import React from "react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-20 bg-[#0b0c0d] border-t border-gray-800 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h4 className="text-2xl font-bold text-white mb-3">Contact VyomGarud</h4>
          <p className="text-gray-400 mb-6">
            For demos, partnerships, or procurement inquiries, send us a message or request a demo.
          </p>
          <p className="text-gray-500 text-sm">
            📞 +91 11111111<br />
            📧 hello@DDDDDDD.example
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demo request submitted (static form).");
          }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-1 p-3 rounded-md bg-[#141617] border border-gray-700 text-gray-200"
              placeholder="Name"
              required
            />
            <input
              className="flex-1 p-3 rounded-md bg-[#141617] border border-gray-700 text-gray-200"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <textarea
            className="w-full p-3 rounded-md bg-[#141617] border border-gray-700 text-gray-200"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="btn-accent px-6 py-3 rounded-lg font-semibold text-sm shadow-md"
          >
            Send
          </button>
        </form>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Yuvraj creations ALL RIGHT RESERVED.
      </div>
    </footer>
  );
}
