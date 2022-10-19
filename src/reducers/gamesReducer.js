const initialState = {
    popular : [],
    newGames : [],
    upcomingGames : [],
    searched : []
}

const gamesReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular}
        default:
            return {...state}
    }
}

export default gamesReducer;