import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const GameEdit = ({ gameToEdit }) => {
    const [game, setTitle] = useState(gameToEdit.title);
    const [amount, setAmount] = useState(gameToEdit.amount);
    const [finished, setFinished] = useState(gameToEdit.finished);
    const [date, setDate] = useState(gameToEdit.date);

    const redirect = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                game: game,
                amount: amount,
                finished: finished,
                date: date
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/gamePage");
    }

    return (
        <>
            <h2>Edit a game</h2>
            <article>
                <p>Paragraph about this page.</p>
                <table>
                    <caption>Edit this Game:</caption>
                    <thead>
                        <tr>
                            <th>GameTitle</th>
                            <th>Amount of Times Played</th>
                            <th>Completion</th>
                            <th>Date</th>
                            <th>Commit</th>
                        </tr>
                    </thead>
                    <td>
                        <label htmlFor="game"></label>
                        <input type="text" placeholder="Title of the game." id="game"
                            value={game}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="amount"></label>
                        <input type="text" placeholder="Amount of times played." id="amount"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="finished"></label>
                        <input type="text" placeholder="Finished the game?" id="finished"
                            value={finished}
                            onChange={e => setFinished(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="date"></label>
                        <input type="text" placeholder="Date when game was played." id="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="submit">
                            <button 
                                type="submit" 
                                id="submit" 
                                onClick={editGame}
                                >Save Edit</button>
                        </label>
                    </td>
                </table>
            </article>
        </>
    );
}

export default GameEdit;