export interface Ayah {
  number: number;
  text: string;
  translation: string;
  audioUrl?: string;
}

export interface Surah {
  number: number;
  arabicName: string;
  englishName: string;
  englishTranslation: string;
  revelation: 'Makkah' | 'Madinah';
  ayahs: Ayah[];
  totalAyahs: number;
  totalWords: number;
  totalLetters: number;
}

export const surahData: Surah[] = [
  {
    number: 1,
    arabicName: "الفاتحة",
    englishName: "Al-Fatiha",
    englishTranslation: "The Opening",
    revelation: "Makkah",
    totalAyahs: 7,
    totalWords: 29,
    totalLetters: 143,
    ayahs: [
      {
        number: 1,
        text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ١",
        translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      },
      {
        number: 2,
        text: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢",
        translation: "[All] praise is [due] to Allah, Lord of the worlds -",
      },
      {
        number: 3,
        text: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣",
        translation: "The Entirely Merciful, the Especially Merciful,",
      },
      {
        number: 4,
        text: "مَٰلِكِ يَوۡمِ ٱلدِّينِ ٤",
        translation: "Sovereign of the Day of Recompense.",
      },
      {
        number: 5,
        text: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ٥",
        translation: "It is You we worship and You we ask for help.",
      },
      {
        number: 6,
        text: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ٦",
        translation: "Guide us to the straight path -",
      },
      {
        number: 7,
        text: "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ٧",
        translation: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
      },
    ],
  },
  {
    number: 2,
    arabicName: "البقرة",
    englishName: "Al-Baqarah",
    englishTranslation: "The Cow",
    revelation: "Madinah",
    totalAyahs: 286,
    totalWords: 6144,
    totalLetters: 25500,
    ayahs: [
      {
        number: 1,
        text: "الم ١",
        translation: "Alif, Lam, Meem.",
      },
      {
        number: 2,
        text: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ ٢",
        translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
      },
      {
        number: 3,
        text: "الَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ ٣",
        translation: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
      },
    ],
  },
  {
    number: 3,
    arabicName: "آل عمران",
    englishName: "Al-Imran",
    englishTranslation: "The Family of Imran",
    revelation: "Madinah",
    totalAyahs: 200,
    totalWords: 3504,
    totalLetters: 14705,
    ayahs: [
      {
        number: 1,
        text: "الم ١",
        translation: "Alif, Lam, Meem.",
      },
      {
        number: 2,
        text: "ٱللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ ٢",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
      },
    ],
  },
];

// Helper function to get surah by number
export function getSurahByNumber(number: number): Surah | undefined {
  return surahData.find(surah => surah.number === number);
}

// Helper function to get all surah titles
export function getAllSurahs(): Surah[] {
  return surahData;
}

// Helper function to search ayahs
export function searchAyahs(query: string): Array<{surah: Surah; ayah: Ayah}> {
  const results: Array<{surah: Surah; ayah: Ayah}> = [];
  const lowerQuery = query.toLowerCase();
  
  surahData.forEach(surah => {
    surah.ayahs.forEach(ayah => {
      if (ayah.translation.toLowerCase().includes(lowerQuery) || 
          ayah.text.includes(query)) {
        results.push({ surah, ayah });
      }
    });
  });
  
  return results;
}
