import React, { useState } from 'react';
import Link from 'next/link';
import { useQuranStore } from '@/lib/store';
import { getAllSurahs } from '@/lib/quranData';

interface SurahSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const SurahSidebar: React.FC<SurahSidebarProps> = ({ isOpen = true, onClose }) => {
  const surahs = getAllSurahs();
  const { currentSurah } = useQuranStore();

  return (
    <>
      {/* Mobile overlay */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto transition-transform duration-300 z-40 lg:z-auto ${
          !isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
        }`}
      >
        <div className="pt-4 pb-8">
          <h2 className="px-4 py-2 text-sm font-semibold text-slate-300 uppercase tracking-wider">
            Surahs
          </h2>

          <div className="space-y-1 px-2">
            {surahs.map((surah) => (
              <Link key={surah.number} href={`/${surah.number}`}>
                <button
                  onClick={onClose}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                    currentSurah === surah.number
                      ? 'bg-green-600 text-white'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{surah.englishName}</p>
                      <p className="text-xs text-slate-400">{surah.arabicName}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {surah.number.toString().padStart(3, '0')}
                    </span>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
