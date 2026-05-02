'use client';

import Link from 'next/link';
import { Search, Bell, MapPin } from 'lucide-react';

export default function PrayerTimesPage() {
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const prayerTimes = [
    { name: 'Fajr', time: '05:12 AM', arabicName: 'الفجر' },
    { name: 'Dhuhr', time: '12:35 PM', arabicName: 'الظهر' },
    { name: 'Asr', time: '03:47 PM', arabicName: 'العصر' },
    { name: 'Maghrib', time: '06:45 PM', arabicName: 'المغرب' },
    { name: 'Isha', time: '08:10 PM', arabicName: 'العشاء' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top Navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ق</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Quran Mazid</h1>
              <p className="text-xs text-slate-400">Read, Study, and Learn The Quran</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/1" className="text-slate-400 hover:text-white transition-colors">
              Read Quran
            </Link>
            <Link href="/prayer-times" className="text-white hover:text-white transition-colors font-medium">
              Prayer Time
            </Link>
            <Link href="/ramadan" className="text-slate-400 hover:text-white transition-colors">
              Ramadan 2026
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
              <Search className="w-5 h-5 text-slate-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5 text-slate-400" />
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
              Support Us
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Islamic Prayer Times</h1>
          <div className="flex items-center gap-2 text-slate-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Chattogram, Bangladesh</span>
            <button className="text-green-600 hover:text-green-700 ml-2">(Change)</button>
          </div>
          <p className="text-slate-400 text-lg">{dateStr}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-slate-800">
          <button className="pb-4 text-white font-medium border-b-2 border-green-600">
            Daily Prayers
          </button>
          <button className="pb-4 text-slate-400 hover:text-white transition-colors">
            Other Times
          </button>
          <button className="pb-4 text-slate-400 hover:text-white transition-colors">
            Current Time
          </button>
          <button className="pb-4 text-slate-400 hover:text-white transition-colors">
            Weather
          </button>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {prayerTimes.map((prayer) => (
            <div key={prayer.name} className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🕌
              </div>
              <p className="text-slate-400 text-sm mb-2">{prayer.arabicName}</p>
              <h3 className="text-xl font-bold text-white mb-1">{prayer.name}</h3>
              <p className="text-2xl font-bold text-green-600">{prayer.time}</p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-slate-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Prayer Times</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Prayer times are calculated based on your location and the position of the sun. These times are used by Muslims to determine when to perform their five daily prayers.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The calculation method used here is widely accepted and provides accurate prayer times for your location.
          </p>
        </div>
      </div>
    </div>
  );
}
