import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="mx-auto w-full max-w-5xl px-6 pb-24">
      <div className="rounded-2xl border border-amber-100 bg-white/70 p-8 text-center shadow-sm backdrop-blur">
        <h3 className="text-2xl font-semibold text-gray-900">Begin your journey with Nityakarma</h3>
        <p className="mt-2 text-gray-600">Join the waitlist and get early access to modules tailored for priests, stores, organizers, and families.</p>
        <form
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get('email');
            alert(`Thanks! We'll reach out at ${email}`);
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full max-w-md rounded-full border border-amber-200 bg-white/90 px-5 py-3 text-gray-800 shadow-sm outline-none placeholder:text-gray-400 focus:border-amber-400"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-amber-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-amber-700 sm:w-auto"
          >
            Join waitlist
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">We respect traditions and your inbox. No spam — ever.</p>
      </div>
    </section>
  );
};

export default CTA;
