import axios from "axios";
import {popularGamesUrl} from '../api';

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
    // FETCH WITH AXIOS
    const popularGames = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.data.results,
        }
    });
}