export interface Wallpaper {
  url: string;
  name: string;
}

export function useWallpapers(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/LrZNaX61Tpm8Bksb3Fiu0A",
      name: "Heritage",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/-1jwonINTDu3gh7Ittr7bw",
      name: "Vintage",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/D0nSWjmPQT2pMn-le4P0bg",
      name: "Aesthetic",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/hqC-q1QCSniEKW7UpJChiA",
      name: "Gold",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6RAfHysBQOuUZx4S-uW2QA",
      name: "Sunset",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zU4A5IhESHSngQaQL9_2xg",
      name: "Morning",
    },
  ];
}
