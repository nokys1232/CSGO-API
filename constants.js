const getLanguageUrl = language => {
    return `https://raw.githubusercontent.com/ByMykel/counter-strike-file-tracker/main/static/csgo_${language}.json`;
};

export const getImageUrl = path => {
    return `https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/${path}_png.png`;
};

export const getImageUrlSvg = path => {
    return `https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/${path}.svg`;
};

export const ITEMS_GAME_URL =
    "https://raw.githubusercontent.com/ByMykel/counter-strike-file-tracker/main/static/items_game.json";

export const IMAGES_BASE_URL =
    "https://raw.githubusercontent.com/steamdatabase/gametracking-csgo/108f1682bf7eeb1420caaf2357da88b614a7e1b0/csgo/pak01_dir/resource/flash/";

export const CSGO_ENGLISH_URL =
    "https://raw.githubusercontent.com/ByMykel/counter-strike-file-tracker/main/static/csgo_english.json";

export const IMAGES_INVENTORY_URL =
    "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/images.json";

export const LANGUAGES_URL = [
    {
        language: "english",
        folder: "en",
        url: getLanguageUrl("english"),
    },
    {
        language: "ukrainian",
        folder: "uk",
        url: getLanguageUrl("ukrainian"),
    },
];
