import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useQuranStore } from '@/lib/store';

interface FontSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FontSettingsPanel: React.FC<FontSettingsPanelProps> = ({ isOpen, onClose }) => {
  const { fontSettings, updateFontSettings } = useQuranStore();

  const handleArabicFontChange = (font: 'kfgq' | 'amiri' | 'scheherazade') => {
    updateFontSettings({ arabicFont: font });
  };

  const handleArabicFontSizeChange = (size: number) => {
    updateFontSettings({ arabicFontSize: size });
  };

  const handleTranslationFontSizeChange = (size: number) => {
    updateFontSettings({ translationFontSize: size });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end lg:items-center justify-center z-50">
      <div className="bg-white w-full lg:w-96 rounded-t-lg lg:rounded-lg border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-white">Font Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-slate-900">
          {/* Arabic Font Selection */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Arabic Font</h3>
            <div className="space-y-3">
              {[
                { id: 'kfgq', name: 'KFGQ Uthman' },
                { id: 'amiri', name: 'Amiri' },
                { id: 'scheherazade', name: 'Scheherazade' },
              ].map((font) => (
                <label key={font.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="arabicFont"
                    value={font.id}
                    checked={fontSettings.arabicFont === font.id}
                    onChange={() =>
                      handleArabicFontChange(font.id as 'kfgq' | 'amiri' | 'scheherazade')
                    }
                    className="w-4 h-4 accent-green-600"
                  />
                  <span className="text-slate-700">{font.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Arabic Font Size */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Arabic Font Size</h3>
              <span className="text-sm font-semibold text-green-500">
                {fontSettings.arabicFontSize}px
              </span>
            </div>
            <input
              type="range"
              min="16"
              max="48"
              value={fontSettings.arabicFontSize}
              onChange={(e) => handleArabicFontSizeChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-2">
              <span>16px</span>
              <span>48px</span>
            </div>
          </div>

          {/* Translation Font Size */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Translation Font Size</h3>
              <span className="text-sm font-semibold text-green-500">
                {fontSettings.translationFontSize}px
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="24"
              value={fontSettings.translationFontSize}
              onChange={(e) => handleTranslationFontSizeChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-2">
              <span>12px</span>
              <span>24px</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
