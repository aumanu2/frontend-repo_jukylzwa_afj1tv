import React from 'react';
import { Users, ShoppingBag, Calendar, Camera, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Priest CRM',
    desc: 'Manage schedules, bookings, and community relationships with ease and transparency.'
  },
  {
    icon: ShoppingBag,
    title: 'Pooja Stores Ecommerce',
    desc: 'Curated sacred essentials, delivered. Verified vendors for authentic ritual supplies.'
  },
  {
    icon: Calendar,
    title: 'Event Diary',
    desc: 'Plan poojas, weddings, and life ceremonies with shared calendars and smart reminders.'
  },
  {
    icon: Camera,
    title: 'Creative Collaboration',
    desc: 'Connect photographers and creators to capture rituals with cultural sensitivity.'
  },
  {
    icon: BookOpen,
    title: 'Daily Ritual Guidance',
    desc: 'Personalized nitya karma, muhurtas, and mantras rooted in tradition and scripture.'
  }
];

const FeatureGrid = () => {
  return (
    <section id="modules" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold text-gray-900 sm:text-4xl">A seamless spiritual ecosystem</h2>
        <p className="mt-3 text-gray-600">Technology and tradition in harmony — built for communities, families, and professionals.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl border border-amber-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-700">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
