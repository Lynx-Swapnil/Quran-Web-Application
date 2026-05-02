'use client';

import Link from 'next/link';
import { Search, Bell, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RamadanPage() {
  const [countdown, setCountdown] = useState({
    days: 281,
    hours: 0,
    minutes: 8,
    seconds: 56,
  });

  useEffect(() => {
    // Calculate real countdown to Ramadan 2026 (March 30, 2026)
    const ramadanDate = new Date('2026-03-30T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = ramadanDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = ramadanDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ق</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Quran Mazid</h1>
              <p className="text-xs text-slate-600">Read, Study, and Learn The Quran</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/1" className="text-slate-600 hover:text-slate-900 transition-colors">
              Read Quran
            </Link>
            <Link href="/prayer-times" className="text-slate-600 hover:text-slate-900 transition-colors">
              Prayer Time
            </Link>
            <Link href="/ramadan" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              Ramadan 2026
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
              Support Us
            </button>
          </div>
        </div>
      </nav>

      {/* Decorative Lanterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-32 border-2 border-slate-400 rounded-b-lg"></div>
        <div className="absolute top-20 right-10 w-24 h-32 border-2 border-slate-400 rounded-b-lg"></div>
        <div className="absolute bottom-40 left-20 w-20 h-28 border-2 border-slate-400 rounded-b-lg"></div>
        <div className="absolute bottom-40 right-20 w-20 h-28 border-2 border-slate-400 rounded-b-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Main Title */}
        <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-widest">
          Ramadan Mubarak<br />2026
        </h1>

        {/* Location & Date Info */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium text-lg">CHATTOGRAM, BANGLADESH</span>
          </div>
          <p className="text-slate-600 text-lg">Dhu al-Qi'dah 15, 1447 AH</p>
        </div>

        {/* Countdown Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">RAMADAN COUNTDOWN</h2>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {/* Days */}
            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {String(countdown.days).padStart(3, '0')}
              </div>
              <p className="text-slate-600 font-medium">Days</p>
            </div>

            {/* Hours */}
            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <p className="text-slate-600 font-medium">Hours</p>
            </div>

            {/* Minutes */}
            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <p className="text-slate-600 font-medium">Minutes</p>
            </div>

            {/* Seconds */}
            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <p className="text-slate-600 font-medium">Seconds</p>
            </div>
          </div>

          <p className="text-slate-600 text-lg mb-8">
            Until the start of the Holy Month of Ramadan
          </p>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 text-left max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">About Ramadan 2026</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ramadan is the ninth month of the Islamic calendar and is considered the holiest month for Muslims around the world. It is a month of fasting, prayer, and reflection.
          </p>
          <p className="text-slate-700 leading-relaxed">
            During Ramadan, Muslims fast from dawn to sunset, commemorating the revelation of the Quran to the Prophet Muhammad. It is also a time for increased spiritual devotion, charity, and community gathering.
          </p>
        </div>
      </div>
    </div>
  );
}
