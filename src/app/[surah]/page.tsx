'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AyahCard } from '@/components/AyahCard';
import { getAllSurahs, getSurahByNumber } from '@/lib/quranData';
import { useQuranStore } from '@/lib/store';

export default function SurahPage() {
  const params = useParams();
  const surahParam = params.surah as string;
  const surahNumber = parseInt(surahParam, 10);
  const surah = getSurahByNumber(surahNumber);
  const { fontSettings, setCurrentSurah, updateFontSettings } = useQuranStore();
  const allSurahs = getAllSurahs();

  const [activeTab, setActiveTab] = useState<'Surah' | 'Juz' | 'Page'>('Surah');
  const [showSettings, setShowSettings] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFontDropdown, setShowFontDropdown] = useState(false);

  useEffect(() => {
    if (!isNaN(surahNumber)) {
      setCurrentSurah(surahNumber);
    }
  }, [surahNumber, setCurrentSurah]);

  if (!surah || isNaN(surahNumber)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Surah Not Found</h1>
          <p className="text-slate-600 mb-4">The surah you are looking for does not exist.</p>
          <Link href="/" className="text-green-600 hover:text-green-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const filteredSurahs = searchQuery.trim()
    ? allSurahs.filter(s =>
        s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.arabicName.includes(searchQuery)
      )
    : allSurahs;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
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

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-50 border-r border-slate-200 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            {(['Surah', 'Juz', 'Page'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-slate-900 border-b-2 border-green-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="p-4 border-b border-slate-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search Surah"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Surah List */}
          <div className="flex-1 overflow-y-auto">
            {filteredSurahs.map((s) => (
              <Link key={s.number} href={`/${s.number}`}>
                <div
                  className={`p-3 border-l-4 cursor-pointer transition-colors ${
                    surahNumber === s.number
                      ? 'bg-green-600 border-green-600 text-white'
                      : 'border-transparent text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm ${
                        surahNumber === s.number
                          ? 'bg-green-700'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {s.number}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{s.englishName}</p>
                      <p className="text-xs text-slate-500">{s.arabicName}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Header */}
          <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
            <h2 className="text-3xl font-bold text-white mb-2">{surah.englishName}</h2>
            <p className="text-slate-400">Ayah-{surah.totalAyahs}, {surah.revelation}</p>

            {/* Content Tabs */}
            <div className="flex gap-6 mt-6">
              <button className="text-white pb-2 border-b-2 border-green-600 font-medium">
                Translation
              </button>
              <button className="text-slate-400 hover:text-white pb-2 transition-colors">
                Reading
              </button>
            </div>
          </div>

          {/* Ayahs */}
          <div className="flex-1 overflow-y-auto px-8 py-6 bg-slate-950">
            {surah.ayahs.map((ayah) => (
              <AyahCard
                key={ayah.number}
                surahNumber={surah.number}
                ayah={ayah}
                arabicFontSize={fontSettings.arabicFontSize}
              />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Settings */}
        {showSettings && (
          <div className="w-80 bg-slate-900 border-l border-slate-800 p-6 overflow-y-auto">
            {/* Reading Settings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  📖 Reading Settings
                </h3>
                <button className="text-slate-400 hover:text-white">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Font Settings */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-green-600 font-semibold">Font Settings</h3>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-slate-400 hover:text-white"
                >
                  ↑
                </button>
              </div>

              {/* Arabic Font Size */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-slate-700 text-sm">Arabic Font Size</label>
                  <span className="text-green-600 font-semibold">{fontSettings.arabicFontSize}</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="48"
                  value={fontSettings.arabicFontSize}
                  onChange={(e) =>
                    updateFontSettings({
                      ...fontSettings,
                      arabicFontSize: Number(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg accent-green-600"
                />
              </div>

              {/* Translation Font Size */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-slate-700 text-sm">Translation Font Size</label>
                  <span className="text-green-600 font-semibold">{fontSettings.translationFontSize}</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSettings.translationFontSize}
                  onChange={(e) =>
                    updateFontSettings({
                      ...fontSettings,
                      translationFontSize: Number(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg accent-green-600"
                />
              </div>

              {/* Arabic Font Face */}
              <div className="mb-6">
                <label className="text-slate-700 text-sm block mb-2">Arabic Font Face</label>
                <div className="relative">
                  <button
                    onClick={() => setShowFontDropdown(!showFontDropdown)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 text-sm flex items-center justify-between hover:border-slate-300"
                  >
                    <span>{fontSettings.arabicFont === 'kfgq' ? 'KFGQ' : fontSettings.arabicFont}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showFontDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                      {['kfgq', 'amiri', 'scheherazade'].map((font) => (
                        <button
                          key={font}
                          onClick={() => {
                            updateFontSettings({
                              ...fontSettings,
                              arabicFont: font as 'kfgq' | 'amiri' | 'scheherazade',
                            });
                            setShowFontDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 text-sm"
                        >
                          {font === 'kfgq' ? 'KFGQ' : font.charAt(0).toUpperCase() + font.slice(1)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-slate-900 font-semibold mb-2">Help spread the knowledge of Islam</h3>
              <p className="text-slate-600 text-sm mb-4">
                Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors">
                Support Us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
