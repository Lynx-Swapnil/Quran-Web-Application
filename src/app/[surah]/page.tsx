'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { IconSidebar } from '@/components/IconSidebar';
import { SurahSidebar } from '@/components/SurahSidebar';
import { FontSettingsPanel } from '@/components/FontSettingsPanel';
import { SearchModal } from '@/components/SearchModal';
import { AyahCard } from '@/components/AyahCard';
import { getSurahByNumber } from '@/lib/quranData';
import { useQuranStore } from '@/lib/store';

interface SurahPageProps {
  params: {
    surah: string;
  };
}

export default function SurahPage({ params }: SurahPageProps) {
  const surahNumber = parseInt(params.surah, 10);
  const surah = getSurahByNumber(surahNumber);
  const { fontSettings, setCurrentSurah } = useQuranStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFontSettings, setShowFontSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  React.useEffect(() => {
    setCurrentSurah(surahNumber);
  }, [surahNumber, setCurrentSurah]);

  if (!surah) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Surah Not Found</h1>
          <p className="text-slate-400 mb-4">The surah you are looking for does not exist.</p>
          <Link href="/1" className="text-green-500 hover:text-green-400">
            Return to Al-Fatiha
          </Link>
        </div>
      </div>
    );
  }

  const previousSurah = surahNumber > 1 ? surahNumber - 1 : null;
  const nextSurah = surahNumber < 114 ? surahNumber + 1 : null;

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Icon Sidebar */}
      <IconSidebar
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearchClick={() => setShowSearch(true)}
        onSettingsClick={() => setShowFontSettings(true)}
      />

      {/* Surah Sidebar */}
      <SurahSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 ml-16 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 bg-slate-900 border-b border-slate-800 z-40">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center gap-4 mb-4">
              {surah.revelation === 'Makkah' ? (
                <div className="flex-shrink-0 w-20 h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-slate-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
              ) : (
                <div className="flex-shrink-0 w-20 h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-slate-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-white">{surah.englishName}</h1>
                <p className="text-slate-400">
                  Ayah-{surah.totalAyahs}, {surah.revelation}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Ayahs */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {surah.ayahs.map((ayah) => (
            <AyahCard
              key={ayah.number}
              surahNumber={surah.number}
              ayah={ayah}
              arabicFontSize={fontSettings.arabicFontSize}
            />
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
          {previousSurah ? (
            <Link href={`/${previousSurah}`}>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300">
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
            </Link>
          ) : (
            <button disabled className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-600 cursor-not-allowed opacity-50">
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
          )}

          {nextSurah && (
            <Link href={`/${nextSurah}`}>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors text-white">
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          )}
        </div>
      </main>

      {/* Modals */}
      <FontSettingsPanel isOpen={showFontSettings} onClose={() => setShowFontSettings(false)} />
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </div>
  );
}
