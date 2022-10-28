import axios from "axios";
import {getGameDetailsUrl, gameScreenshotURL} from "../api";

export const loadDetail = (gameId) => async (dispatch) => {
    const detailData = await axios.get(getGameDetailsUrl(gameId));
    const screenshotData = await axios.get(gameScreenshotURL(gameId));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screenshots: screenshotData.data
        }
    })
}