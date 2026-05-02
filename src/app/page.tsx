'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Settings, Globe } from 'lucide-react';
import { getAllSurahs, getSurahByNumber } from '@/lib/quranData';

const QUICK_SURAHS = [
  { number: 67, name: 'Al Mulk' },
  { number: 36, name: 'Yasin' },
  { number: 18, name: 'Al Kahf' },
  { number: 112, name: 'Al Ikhlas' },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [randomAyah, setRandomAyah] = useState<any>(null);

  useEffect(() => {
    // Get a random ayah to display
    const surah = getSurahByNumber(19); // Maryam (like in the reference)
    if (surah && surah.ayahs.length > 0) {
      const randomIndex = Math.floor(Math.random() * surah.ayahs.length);
      setRandomAyah({
        ...surah.ayahs[randomIndex],
        surahName: surah.englishName,
      });
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/1?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleQuickSurah = (surahNumber: number) => {
    router.push(`/${surahNumber}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ق</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Quran Mazid</h1>
              <p className="text-xs text-slate-600">Read, Study, and Learn The Quran</p>
            </div>
          </Link>

          {/* Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/1" className="text-slate-600 hover:text-slate-900 transition-colors">
              Read Quran
            </Link>
            <Link href="/prayer-times" className="text-slate-600 hover:text-slate-900 transition-colors">
              Prayer Time
            </Link>
            <Link href="/ramadan" className="text-slate-600 hover:text-slate-900 transition-colors">
              Ramadan 2026
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                Others
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Globe className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Settings className="w-5 h-5 text-slate-600" />
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
              Support Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with lanterns decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-24 h-32 border-2 border-slate-400 rounded-b-lg"></div>
          <div className="absolute top-20 right-10 w-24 h-32 border-2 border-slate-400 rounded-b-lg"></div>
          <div className="absolute bottom-20 left-20 w-20 h-28 border-2 border-slate-400 rounded-b-lg"></div>
          <div className="absolute bottom-20 right-20 w-20 h-28 border-2 border-slate-400 rounded-b-lg"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          {/* Main Title */}
          <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-12 tracking-wider">
            QURAN MAZID
          </h2>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="mb-16 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="What do you want to read?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-12 pr-16 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                Ctrl+k
              </span>
            </div>
          </form>

          {/* Quick Surahs */}
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {QUICK_SURAHS.map((surah) => (
              <button
                key={surah.number}
                onClick={() => handleQuickSurah(surah.number)}
                className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {surah.name}
              </button>
            ))}
          </div>

          {/* Random Ayah Display */}
          {randomAyah && (
            <div className="max-w-2xl mx-auto">
              <p className="text-slate-700 text-lg mb-6">
                {randomAyah.translation}
              </p>
              <p className="text-slate-600">
                [ {randomAyah.surahName} : {randomAyah.number} ]
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Search</h3>
            <p className="text-slate-600">
              Quickly search through translations and find any ayah you're looking for
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v9.28c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V7h4V3h-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Audio Recitation</h3>
            <p className="text-slate-600">
              Listen to beautiful recitations from renowned Quran readers
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.08-2.59L6.5 17h11l-3.54-4.71z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Customization</h3>
            <p className="text-slate-600">
              Adjust font sizes and choose your preferred translation style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
