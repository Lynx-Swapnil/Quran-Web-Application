import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useQuranStore } from '@/lib/store';
import { searchAyahs } from '@/lib/quranData';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useQuranStore();
  const searchResults = query.trim() ? searchAyahs(query) : [];

  const handleSearch = (q: string) => {
    setQuery(q);
    setSearchQuery(q);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-4 lg:pt-20">
      <div className="bg-slate-900 w-full lg:w-2xl rounded-lg border border-slate-800 shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <input
            type="text"
            placeholder="Search surahs or translations..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400">
              <p>Type to search surahs and ayahs...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800">
              {searchResults.slice(0, 10).map((result, index) => (
                <Link
                  key={index}
                  href={`/${result.surah.number}#ayah-${result.ayah.number}`}
                  onClick={onClose}
                >
                  <div className="p-4 hover:bg-slate-800 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">
                          {result.surah.englishName} · Ayah {result.ayah.number}
                        </p>
                        <p className="text-slate-300 mt-1 text-sm">
                          {result.ayah.translation.substring(0, 100)}...
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-green-500 whitespace-nowrap">
                        {result.surah.number}:{result.ayah.number}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              {searchResults.length > 10 && (
                <div className="p-4 text-center text-slate-400 text-sm">
                  Showing 10 of {searchResults.length} results
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
