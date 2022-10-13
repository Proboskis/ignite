// Base url
const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`;

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

 const popularGamesUrl = () => `${BASE_URL}${POPULAR_GAMES_URL}`;
 console.log(process.env.REACT_APP_RAWG_API);
 console.log(popularGamesUrl());