import React, { useState } from 'react';
import { Play, Pause, BookOpen, Share2, Copy } from 'lucide-react';
import { Ayah } from '@/lib/quranData';
import { useQuranStore } from '@/lib/store';

interface AyahCardProps {
  surahNumber: number;
  ayah: Ayah;
  arabicFontSize: number;
}

export const AyahCard: React.FC<AyahCardProps> = ({
  surahNumber,
  ayah,
  arabicFontSize,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { fontSettings } = useQuranStore();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // Audio playback can be integrated with a Quran audio API
  };

  const handleCopy = () => {
    const text = `${ayah.text}\n\n${ayah.translation}`;
    navigator.clipboard.writeText(text);
  };

  const handleShare = () => {
    // Share functionality
    if (navigator.share) {
      navigator.share({
        title: `Quran ${surahNumber}:${ayah.number}`,
        text: ayah.translation,
      });
    }
  };

  return (
    <div
      id={`ayah-${ayah.number}`}
      className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-4 hover:border-slate-600 transition-colors"
    >
      {/* Ayah Number */}
      <div className="text-sm font-semibold text-slate-400 mb-4">
        {surahNumber}:{ayah.number}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={handlePlay}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-green-500" />
          ) : (
            <Play className="w-5 h-5 text-slate-400" />
          )}
        </button>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          title="Copy"
        >
          <Copy className="w-5 h-5 text-slate-400" />
        </button>
        <button
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          title="Bookmark"
        >
          <BookOpen className="w-5 h-5 text-slate-400" />
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          title="Share"
        >
          <Share2 className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Arabic Text */}
      <div className="mb-6 text-right">
        <p
          className="leading-relaxed text-slate-100"
          style={{
            fontSize: `${arabicFontSize}px`,
            fontFamily: fontSettings.arabicFont === 'amiri' ? 'Amiri, serif' : 'serif',
            lineHeight: '2.5',
            direction: 'rtl',
          }}
        >
          {ayah.text}
        </p>
      </div>

      {/* Translation */}
      <div className="border-t border-slate-700 pt-4">
        <p className="text-xs font-semibold text-green-500 mb-2">SAHEEH INTERNATIONAL</p>
        <p
          className="text-slate-300 leading-relaxed"
          style={{
            fontSize: `${fontSettings.translationFontSize}px`,
          }}
        >
          {ayah.translation}
        </p>
      </div>
    </div>
  );
};
