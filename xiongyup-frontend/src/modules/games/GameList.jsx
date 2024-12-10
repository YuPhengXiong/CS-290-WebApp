// import React from 'react';
import Game from './Game.jsx';

function GameList({games, onDelete, onEdit}) {
    return (
        <table id="games">
            <caption>Add and Edit Games</caption>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>GameTitle</th>
                    <th>Amount of Times Played</th>
                    <th>Completion</th>
                    <th>Date</th>

                </tr>
            </thead>
            <tbody>
                {games.map((game, i) =>
                    <Game
                        game={game}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>

    );
}

export default GameList;