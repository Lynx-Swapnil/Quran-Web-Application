import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FontSettings {
  arabicFont: 'kfgq' | 'amiri' | 'scheherazade';
  arabicFontSize: number;
  translationFontSize: number;
  theme: 'dark' | 'light';
}

interface QuranStore {
  currentSurah: number;
  currentAyah: number | null;
  fontSettings: FontSettings;
  isSearching: boolean;
  searchQuery: string;
  isAudioPlaying: boolean;
  currentAudioAyah: number | null;
  
  setCurrentSurah: (surah: number) => void;
  setCurrentAyah: (ayah: number | null) => void;
  updateFontSettings: (settings: Partial<FontSettings>) => void;
  setSearching: (searching: boolean) => void;
  setSearchQuery: (query: string) => void;
  setAudioPlaying: (playing: boolean, ayah?: number) => void;
}

export const useQuranStore = create<QuranStore>()(
  persist(
    (set) => ({
      currentSurah: 1,
      currentAyah: null,
      fontSettings: {
        arabicFont: 'kfgq',
        arabicFontSize: 28,
        translationFontSize: 16,
        theme: 'dark',
      },
      isSearching: false,
      searchQuery: '',
      isAudioPlaying: false,
      currentAudioAyah: null,
      
      setCurrentSurah: (surah) => set({ currentSurah: surah }),
      setCurrentAyah: (ayah) => set({ currentAyah: ayah }),
      updateFontSettings: (settings) =>
        set((state) => ({
          fontSettings: { ...state.fontSettings, ...settings },
        })),
      setSearching: (searching) => set({ isSearching: searching }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setAudioPlaying: (playing, ayah) =>
        set({ isAudioPlaying: playing, currentAudioAyah: ayah || null }),
    }),
    {
      name: 'quran-storage',
    }
  )
);
