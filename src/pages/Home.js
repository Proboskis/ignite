import {useEffect} from "react";
// REDUX
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
// Components
import Game from "../Components/Game";
// Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion";
import game from "../Components/Game";

const Home = () => {
    // FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // Get that data back
    const {popularGames, upcomingGames, newGames} = useSelector((state) => state.rootReducer.games);
    // console.log(games);

    return(
        <GameList>
            <h2>Upcoming Games</h2>
                <Games>
                    {upcomingGames.map(game => (
                        <Game name={game.name}
                              released={game.released}
                              id={game.id}
                              key={game.id}
                              image={game.background_image}
                        />
                    ))}
                </Games>
            <h2>Popular Games</h2>
                <Games>
                    {popularGames.map(game => (
                        <Game name={game.name}
                              released={game.released}
                              id={game.id}
                              key={game.id}
                              image={game.background_image}
                        />
                    ))}
                </Games>
            <h2>New Games</h2>
                <Games>
                {newGames.map(game => (
                    <Game name={game.name}
                          released={game.released}
                          id={game.id}
                          key={game.id}
                          image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;