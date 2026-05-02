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
  ...Array.from({ length: 113 }, (_, i) => {
    const number = i + 2;
    const surahs: {[key: number]: {arabicName: string; englishName: string; englishTranslation: string; revelation: 'Makkah' | 'Madinah'; totalAyahs: number}} = {
      2: { arabicName: "البقرة", englishName: "Al-Baqarah", englishTranslation: "The Cow", revelation: "Madinah", totalAyahs: 286 },
      3: { arabicName: "آل عمران", englishName: "Al-Imran", englishTranslation: "The Family of Imran", revelation: "Madinah", totalAyahs: 200 },
      4: { arabicName: "النساء", englishName: "An-Nisa", englishTranslation: "The Women", revelation: "Madinah", totalAyahs: 176 },
      5: { arabicName: "المائدة", englishName: "Al-Ma'idah", englishTranslation: "The Table Spread", revelation: "Madinah", totalAyahs: 120 },
      6: { arabicName: "الأنعام", englishName: "Al-An'am", englishTranslation: "The Cattle", revelation: "Makkah", totalAyahs: 165 },
      7: { arabicName: "الأعراف", englishName: "Al-A'raf", englishTranslation: "The Heights", revelation: "Makkah", totalAyahs: 206 },
      8: { arabicName: "الأنفال", englishName: "Al-Anfal", englishTranslation: "The Spoils of War", revelation: "Madinah", totalAyahs: 75 },
      9: { arabicName: "التوبة", englishName: "At-Tawbah", englishTranslation: "The Repentance", revelation: "Madinah", totalAyahs: 129 },
      10: { arabicName: "يونس", englishName: "Yunus", englishTranslation: "Jonah", revelation: "Makkah", totalAyahs: 109 },
      11: { arabicName: "هود", englishName: "Hud", englishTranslation: "Hud", revelation: "Makkah", totalAyahs: 123 },
      12: { arabicName: "يوسف", englishName: "Yusuf", englishTranslation: "Joseph", revelation: "Makkah", totalAyahs: 111 },
      13: { arabicName: "الرعد", englishName: "Ar-Ra'd", englishTranslation: "The Thunder", revelation: "Madinah", totalAyahs: 43 },
      14: { arabicName: "إبراهيم", englishName: "Ibrahim", englishTranslation: "Abraham", revelation: "Makkah", totalAyahs: 52 },
      15: { arabicName: "الحجر", englishName: "Al-Hijr", englishTranslation: "The Rocky Tract", revelation: "Makkah", totalAyahs: 99 },
      16: { arabicName: "النحل", englishName: "An-Nahl", englishTranslation: "The Bees", revelation: "Makkah", totalAyahs: 128 },
      17: { arabicName: "الإسراء", englishName: "Al-Isra", englishTranslation: "The Night Journey", revelation: "Makkah", totalAyahs: 111 },
      18: { arabicName: "الكهف", englishName: "Al-Kahf", englishTranslation: "The Cave", revelation: "Makkah", totalAyahs: 110 },
      19: { arabicName: "مريم", englishName: "Maryam", englishTranslation: "Mary", revelation: "Makkah", totalAyahs: 98 },
      20: { arabicName: "طه", englishName: "Ta-Ha", englishTranslation: "Ta-Ha", revelation: "Makkah", totalAyahs: 135 },
      21: { arabicName: "الأنبياء", englishName: "Al-Anbiya", englishTranslation: "The Prophets", revelation: "Makkah", totalAyahs: 112 },
      22: { arabicName: "الحج", englishName: "Al-Hajj", englishTranslation: "The Pilgrimage", revelation: "Madinah", totalAyahs: 78 },
      23: { arabicName: "المؤمنون", englishName: "Al-Mu'minun", englishTranslation: "The Believers", revelation: "Makkah", totalAyahs: 118 },
      24: { arabicName: "النور", englishName: "An-Nur", englishTranslation: "The Light", revelation: "Madinah", totalAyahs: 64 },
      25: { arabicName: "الفرقان", englishName: "Al-Furqan", englishTranslation: "The Criterion", revelation: "Makkah", totalAyahs: 77 },
      26: { arabicName: "الشعراء", englishName: "Ash-Shu'ara", englishTranslation: "The Poets", revelation: "Makkah", totalAyahs: 227 },
      27: { arabicName: "النمل", englishName: "An-Naml", englishTranslation: "The Ants", revelation: "Makkah", totalAyahs: 93 },
      28: { arabicName: "القصص", englishName: "Al-Qasas", englishTranslation: "The Stories", revelation: "Makkah", totalAyahs: 88 },
      29: { arabicName: "العنكبوت", englishName: "Al-'Ankabut", englishTranslation: "The Spider", revelation: "Makkah", totalAyahs: 69 },
      30: { arabicName: "الروم", englishName: "Ar-Rum", englishTranslation: "The Romans", revelation: "Makkah", totalAyahs: 60 },
      31: { arabicName: "لقمان", englishName: "Luqman", englishTranslation: "Luqman", revelation: "Makkah", totalAyahs: 34 },
      32: { arabicName: "السجدة", englishName: "As-Sajdah", englishTranslation: "The Prostration", revelation: "Makkah", totalAyahs: 30 },
      33: { arabicName: "الأحزاب", englishName: "Al-Ahzab", englishTranslation: "The Confederates", revelation: "Madinah", totalAyahs: 73 },
      34: { arabicName: "سبأ", englishName: "Saba", englishTranslation: "Sheba", revelation: "Makkah", totalAyahs: 54 },
      35: { arabicName: "فاطر", englishName: "Fatir", englishTranslation: "The Originator", revelation: "Makkah", totalAyahs: 45 },
      36: { arabicName: "يس", englishName: "Ya-Sin", englishTranslation: "Ya-Sin", revelation: "Makkah", totalAyahs: 83 },
      37: { arabicName: "الصافات", englishName: "As-Saffat", englishTranslation: "Those Arranged in Rows", revelation: "Makkah", totalAyahs: 182 },
      38: { arabicName: "ص", englishName: "Sad", englishTranslation: "The Letter Sad", revelation: "Makkah", totalAyahs: 88 },
      39: { arabicName: "الزمر", englishName: "Az-Zumar", englishTranslation: "The Groups", revelation: "Makkah", totalAyahs: 75 },
      40: { arabicName: "غافر", englishName: "Ghafir", englishTranslation: "The Pardoner", revelation: "Makkah", totalAyahs: 85 },
      41: { arabicName: "فصلت", englishName: "Fussilat", englishTranslation: "Explained in Detail", revelation: "Makkah", totalAyahs: 54 },
      42: { arabicName: "الشورى", englishName: "Ash-Shura", englishTranslation: "The Consultation", revelation: "Makkah", totalAyahs: 53 },
      43: { arabicName: "الزخرف", englishName: "Az-Zukhruf", englishTranslation: "The Ornaments", revelation: "Makkah", totalAyahs: 89 },
      44: { arabicName: "الدخان", englishName: "Ad-Dukhan", englishTranslation: "The Smoke", revelation: "Makkah", totalAyahs: 59 },
      45: { arabicName: "الجاثية", englishName: "Al-Jathiyah", englishTranslation: "The Crouching", revelation: "Makkah", totalAyahs: 37 },
      46: { arabicName: "الأحقاف", englishName: "Al-Ahqaf", englishTranslation: "The Curved Sand-hills", revelation: "Makkah", totalAyahs: 35 },
      47: { arabicName: "محمد", englishName: "Muhammad", englishTranslation: "Muhammad", revelation: "Madinah", totalAyahs: 38 },
      48: { arabicName: "الفتح", englishName: "Al-Fath", englishTranslation: "The Victory", revelation: "Madinah", totalAyahs: 29 },
      49: { arabicName: "الحجرات", englishName: "Al-Hujurat", englishTranslation: "The Rooms", revelation: "Madinah", totalAyahs: 18 },
      50: { arabicName: "ق", englishName: "Qaf", englishTranslation: "The Letter Qaf", revelation: "Makkah", totalAyahs: 45 },
      51: { arabicName: "الذاريات", englishName: "Ad-Dhariyat", englishTranslation: "The Winds that Scatter", revelation: "Makkah", totalAyahs: 60 },
      52: { arabicName: "الطور", englishName: "At-Tur", englishTranslation: "The Mount", revelation: "Makkah", totalAyahs: 49 },
      53: { arabicName: "النجم", englishName: "An-Najm", englishTranslation: "The Star", revelation: "Makkah", totalAyahs: 62 },
      54: { arabicName: "القمر", englishName: "Al-Qamar", englishTranslation: "The Moon", revelation: "Makkah", totalAyahs: 55 },
      55: { arabicName: "الرحمن", englishName: "Ar-Rahman", englishTranslation: "The Merciful", revelation: "Madinah", totalAyahs: 78 },
      56: { arabicName: "الواقعة", englishName: "Al-Waqi'ah", englishTranslation: "The Inevitable Reality", revelation: "Makkah", totalAyahs: 96 },
      57: { arabicName: "الحديد", englishName: "Al-Hadid", englishTranslation: "The Iron", revelation: "Madinah", totalAyahs: 29 },
      58: { arabicName: "المجادلة", englishName: "Al-Mujadilah", englishTranslation: "The Pleading Woman", revelation: "Madinah", totalAyahs: 22 },
      59: { arabicName: "الحشر", englishName: "Al-Hashr", englishTranslation: "The Exile", revelation: "Madinah", totalAyahs: 24 },
      60: { arabicName: "الممتحنة", englishName: "Al-Mumtahanah", englishTranslation: "The Woman to be Examined", revelation: "Madinah", totalAyahs: 13 },
      61: { arabicName: "الصف", englishName: "As-Saff", englishTranslation: "The Row", revelation: "Madinah", totalAyahs: 14 },
      62: { arabicName: "الجمعة", englishName: "Al-Jumu'ah", englishTranslation: "The Friday Congregation", revelation: "Madinah", totalAyahs: 11 },
      63: { arabicName: "المنافقون", englishName: "Al-Munafiqun", englishTranslation: "The Hypocrites", revelation: "Madinah", totalAyahs: 11 },
      64: { arabicName: "التغابن", englishName: "At-Taghabun", englishTranslation: "The Mutual Disillusionment", revelation: "Madinah", totalAyahs: 18 },
      65: { arabicName: "الطلاق", englishName: "At-Talaq", englishTranslation: "The Divorce", revelation: "Madinah", totalAyahs: 12 },
      66: { arabicName: "التحريم", englishName: "At-Tahrim", englishTranslation: "The Prohibition", revelation: "Madinah", totalAyahs: 12 },
      67: { arabicName: "الملك", englishName: "Al-Mulk", englishTranslation: "The Sovereignty", revelation: "Makkah", totalAyahs: 30 },
      68: { arabicName: "القلم", englishName: "Al-Qalam", englishTranslation: "The Pen", revelation: "Makkah", totalAyahs: 52 },
      69: { arabicName: "الحاقة", englishName: "Al-Haqqah", englishTranslation: "The Reality", revelation: "Makkah", totalAyahs: 52 },
      70: { arabicName: "المعارج", englishName: "Al-Ma'arij", englishTranslation: "The Ways of Ascent", revelation: "Makkah", totalAyahs: 44 },
      71: { arabicName: "نوح", englishName: "Nuh", englishTranslation: "Noah", revelation: "Makkah", totalAyahs: 28 },
      72: { arabicName: "الجن", englishName: "Al-Jinn", englishTranslation: "The Jinn", revelation: "Makkah", totalAyahs: 28 },
      73: { arabicName: "المزمل", englishName: "Al-Muzzammil", englishTranslation: "The Cloaked One", revelation: "Makkah", totalAyahs: 20 },
      74: { arabicName: "المدثر", englishName: "Al-Muddaththir", englishTranslation: "The Cloaked One", revelation: "Makkah", totalAyahs: 56 },
      75: { arabicName: "القيامة", englishName: "Al-Qiyamah", englishTranslation: "The Resurrection", revelation: "Makkah", totalAyahs: 40 },
      76: { arabicName: "الإنسان", englishName: "Al-Insan", englishTranslation: "The Human", revelation: "Madinah", totalAyahs: 31 },
      77: { arabicName: "المرسلات", englishName: "Al-Mursalat", englishTranslation: "The Sent Forth", revelation: "Makkah", totalAyahs: 50 },
      78: { arabicName: "النبأ", englishName: "An-Naba", englishTranslation: "The Announcement", revelation: "Makkah", totalAyahs: 40 },
      79: { arabicName: "الناعيات", englishName: "An-Nazi'at", englishTranslation: "Those Who Pull Out", revelation: "Makkah", totalAyahs: 46 },
      80: { arabicName: "عبس", englishName: "'Abasa", englishTranslation: "He Frowned", revelation: "Makkah", totalAyahs: 42 },
      81: { arabicName: "التكوير", englishName: "At-Takwir", englishTranslation: "The Folding Up", revelation: "Makkah", totalAyahs: 29 },
      82: { arabicName: "الإنفطار", englishName: "Al-Infitar", englishTranslation: "The Cleaving", revelation: "Makkah", totalAyahs: 19 },
      83: { arabicName: "المطففين", englishName: "Al-Mutaffifin", englishTranslation: "The Stinters", revelation: "Makkah", totalAyahs: 36 },
      84: { arabicName: "الإنشقاق", englishName: "Al-Inshiqaq", englishTranslation: "The Splitting", revelation: "Makkah", totalAyahs: 25 },
      85: { arabicName: "البروج", englishName: "Al-Buruj", englishTranslation: "The Constellations", revelation: "Makkah", totalAyahs: 22 },
      86: { arabicName: "الطارق", englishName: "At-Tariq", englishTranslation: "The Morning Star", revelation: "Makkah", totalAyahs: 17 },
      87: { arabicName: "الأعلى", englishName: "Al-A'la", englishTranslation: "The Most High", revelation: "Makkah", totalAyahs: 19 },
      88: { arabicName: "الغاشية", englishName: "Al-Ghashiyah", englishTranslation: "The Overwhelming", revelation: "Makkah", totalAyahs: 26 },
      89: { arabicName: "الفجر", englishName: "Al-Fajr", englishTranslation: "The Dawn", revelation: "Makkah", totalAyahs: 30 },
      90: { arabicName: "البلد", englishName: "Al-Balad", englishTranslation: "The City", revelation: "Makkah", totalAyahs: 20 },
      91: { arabicName: "الشمس", englishName: "Ash-Shams", englishTranslation: "The Sun", revelation: "Makkah", totalAyahs: 15 },
      92: { arabicName: "الليل", englishName: "Al-Layl", englishTranslation: "The Night", revelation: "Makkah", totalAyahs: 21 },
      93: { arabicName: "الضحى", englishName: "Ad-Duha", englishTranslation: "The Morning Brightness", revelation: "Makkah", totalAyahs: 11 },
      94: { arabicName: "الشرح", englishName: "Ash-Sharh", englishTranslation: "The Relief", revelation: "Makkah", totalAyahs: 8 },
      95: { arabicName: "التين", englishName: "At-Tin", englishTranslation: "The Fig", revelation: "Makkah", totalAyahs: 8 },
      96: { arabicName: "العلق", englishName: "Al-'Alaq", englishTranslation: "The Clot", revelation: "Makkah", totalAyahs: 19 },
      97: { arabicName: "القدر", englishName: "Al-Qadr", englishTranslation: "The Power", revelation: "Makkah", totalAyahs: 5 },
      98: { arabicName: "البينة", englishName: "Al-Bayyinah", englishTranslation: "The Clear Proof", revelation: "Madinah", totalAyahs: 8 },
      99: { arabicName: "الزلزلة", englishName: "Az-Zalzalah", englishTranslation: "The Earthquake", revelation: "Madinah", totalAyahs: 8 },
      100: { arabicName: "العاديات", englishName: "Al-'Adiyat", englishTranslation: "The Courser", revelation: "Makkah", totalAyahs: 11 },
      101: { arabicName: "القارعة", englishName: "Al-Qari'ah", englishTranslation: "The Calamity", revelation: "Makkah", totalAyahs: 11 },
      102: { arabicName: "التكاثر", englishName: "At-Takathur", englishTranslation: "The Piling Up", revelation: "Makkah", totalAyahs: 8 },
      103: { arabicName: "العصر", englishName: "Al-'Asr", englishTranslation: "The Time", revelation: "Makkah", totalAyahs: 3 },
      104: { arabicName: "الهمزة", englishName: "Al-Humazah", englishTranslation: "The Slanderer", revelation: "Makkah", totalAyahs: 9 },
      105: { arabicName: "الفيل", englishName: "Al-Fil", englishTranslation: "The Elephant", revelation: "Makkah", totalAyahs: 5 },
      106: { arabicName: "قريش", englishName: "Quraysh", englishTranslation: "Quraysh", revelation: "Makkah", totalAyahs: 4 },
      107: { arabicName: "الماعون", englishName: "Al-Ma'un", englishTranslation: "The Small Kindnesses", revelation: "Makkah", totalAyahs: 7 },
      108: { arabicName: "الكوثر", englishName: "Al-Kawthar", englishTranslation: "The Abundance", revelation: "Makkah", totalAyahs: 3 },
      109: { arabicName: "الكافرون", englishName: "Al-Kafirun", englishTranslation: "The Disbelievers", revelation: "Makkah", totalAyahs: 6 },
      110: { arabicName: "النصر", englishName: "An-Nasr", englishTranslation: "The Victory", revelation: "Madinah", totalAyahs: 3 },
      111: { arabicName: "المسد", englishName: "Al-Masad", englishTranslation: "The Palm Fiber", revelation: "Makkah", totalAyahs: 5 },
      112: { arabicName: "الإخلاص", englishName: "Al-Ikhlas", englishTranslation: "The Sincerity", revelation: "Makkah", totalAyahs: 4 },
      113: { arabicName: "الفلق", englishName: "Al-Falaq", englishTranslation: "The Daybreak", revelation: "Makkah", totalAyahs: 5 },
      114: { arabicName: "الناس", englishName: "An-Nas", englishTranslation: "The Mankind", revelation: "Makkah", totalAyahs: 6 },
    };
    
    const surahInfo = surahs[number];
    return {
      number,
      arabicName: surahInfo.arabicName,
      englishName: surahInfo.englishName,
      englishTranslation: surahInfo.englishTranslation,
      revelation: surahInfo.revelation,
      totalAyahs: surahInfo.totalAyahs,
      totalWords: 0,
      totalLetters: 0,
      ayahs: Array.from({ length: Math.min(3, surahInfo.totalAyahs) }, (_, i) => ({
        number: i + 1,
        text: `أية ${i + 1} من سورة ${surahInfo.arabicName}`,
        translation: `Verse ${i + 1} of ${surahInfo.englishName}. This is a placeholder verse translation.`,
      })),
    };
  }),
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
