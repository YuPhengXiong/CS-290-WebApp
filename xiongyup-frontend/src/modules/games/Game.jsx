// import React from "react";
import { MdDeleteForever, MdEdit } from 'react-icons/md'

function Game({ game, onEdit, onDelete }) {
    return (
        <tr>
            <td><MdDeleteForever onClick={() => onDelete(game._id)}/></td>
            <td><MdEdit onClick={() => onEdit(game)} /></td>
            <td>{game.game}</td>
            <td>{game.amount}</td>
            <td>{game.finished}</td>
            <td>{game.date}</td>


        </tr>
    );
}

export default Game