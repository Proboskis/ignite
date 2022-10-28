// Base url
const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}`;
const BASE_URL_NO_KEY = `https://api.rawg.io/api/`;

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

// Getting day/month/year
const currentYear = new Date().getFullYear();
const currenMount = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currenMount}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currenMount}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currenMount}-${currentDay}`;

// Popular Games
const POPULAR_GAMES_URL = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `&dates=${currentDay},${nextYear}&ordering=-added&page_size=10`;
const NEW_GAMES = `&dates=${currentDay},${currentDate}&ordering=-released&page_size=10`;
// Game details\
export const getGameDetailsUrl = (gameId) =>
    `${BASE_URL_NO_KEY}games/${gameId}.json?&key=${process.env.REACT_APP_RAWG_API_KEY}`;

// Games Screenshots
export const gameScreenshotURL = (gameId) =>
    `${BASE_URL_NO_KEY}games/${gameId}/screenshots?&key=${process.env.REACT_APP_RAWG_API_KEY}`;

export const popularGamesUrl = () => `${BASE_URL}${POPULAR_GAMES_URL}`;
export const upcomingGamesUrl = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesUrl = () => `${BASE_URL}${NEW_GAMES};`;

//console.log(process.env.REACT_APP_RAWG_API);
//console.log(popularGamesUrl());
//console.log(upcomingGames());
//console.log(newGames());