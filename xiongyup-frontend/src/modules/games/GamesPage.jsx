import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GameList from './GameList';
import { Link } from 'react-router-dom';

function GamesPage({setGame}) {
    const redirect = useNavigate();
    const [games, setGames] = useState([]);

    const loadGames = async () => {
        const response = await fetch ('/games');
        const games = await response.json();
        setGames(games);
         }
    
    const onEditGame = async game => {
        setGame(game);
        redirect("/update");
    }

    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, {method: 'DELETE'});
            if (response.status === 200) {
                const getResponse = await fetch('/games');
                const games = await getResponse.json();
                setGames(games);

            } else {
                console.error(`You have successfully deleted an _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <>
            <h2>List of Games</h2>
            <article>
                <p>These are most of the game I have and are playing. Feel free to incorperate your games and see how the program works when adding, deleting, and editing games.</p>

                <Link to="/create">Add Game</Link>

                <GameList
                    games={games}
                    onEdit={onEditGame}
                    onDelete={onDeleteGame}
                />
            </article>
        </>
    );
}

export default GamesPage;