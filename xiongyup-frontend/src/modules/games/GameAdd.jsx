import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GameAdd = () => {
    const [game, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [finished, setFinished] = useState('');
    const [date, setDate] = useState('');

    const redirect = useNavigate();

    const addGame = async () => {
        const newGame = { game, amount, finished, date };
        const response = await fetch('/games', {
            method: 'post',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert(`You were able to successfully add a new game to the list.`)
        } else {
            alert(`You were able to successfully add a new game to the list. = ${response.status}`);
        }
        redirect("/gamePage");
    };

    return (
        <>
            <h2>Add a Game to the List</h2>
            <article>
                <p>
                    This page is used to add, delete, and edit games titles you played in the list. 
                </p>
                <form id="" onSubmit={addGame} ></form>
                <table>
                    <caption>Which movie are you adding?</caption>
                    <thead>
                        <tr>
                            <th>GameTitle</th>
                            <th>Amount of Times Played</th>
                            <th>Completion</th>
                            <th>Date</th>
                            <th>Commit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="game"></label>
                                <input type="game" placeholder="Title of the game." id="game"
                                    value={game}
                                    required
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </td>
                            <td><label htmlFor="amount"></label>
                                <input type="amount" placeholder="Amount of time played." id="amount"
                                    value={amount}
                                    required
                                    onChange={e => setAmount(e.target.value)}
                                />
                            </td>
                            <td><label htmlFor="finished"></label>
                                <input type="finished" placeholder="Finished the game?" id="finished"
                                    value={finished}
                                    required
                                    onChange={e => setFinished(e.target.value)}
                                />
                            </td>
                            <td><label htmlFor="date"></label>
                                <input type="date" placeholder="Date when game was played." id="date"
                                    value={date}
                                    required
                                    onChange={e => setDate(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="submit"></label>
                                <button
                                    type="submit"
                                    onClick={addGame}
                                    id="submit"
                                >Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}

export default GameAdd;