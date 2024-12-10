// Controllers for the "Amount of Times a Game has been Played" Collection

import 'dotenv/config';
import express from 'express';
import * as games from './games-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/games', (req,res) => { 
    games.createGame(
        req.body.game, 
        req.body.amount, 
        req.body.finished,
        req.body.date
        )
        .then(gameTitle => {
            console.log(`"${gameTitle.game}" was added to the collection.`);
            res.status(201).json(gameTitle);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'You have failed to create a new game due to client issues.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/games', (req, res) => {
    games.retrieveGame()
        .then(gameTitle => { 
            if (gameTitle !== null) {
                console.log(`All games were retrieved from the collection.`);
                res.json(gameTitle);
            } else {
                res.status(404).json({ Error: 'An error has occurred, it seems we were not able to find the games.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error has occurred to our client, games to be retrieved have been interrupted.' });
        });
});


// RETRIEVE by ID controller
app.get('/games/:_id', (req, res) => {
    games.retrieveGameByID(req.params._id)
    .then(gameTitle => { 
        if (gameTitle !== null) {
            console.log(`"${gameTitle.game}" was retrieved, based on its ID.`);
            res.json(gameTitle);
        } else {
            res.status(404).json({ Error: 'An error has occurred, it seems we were not able to find the id.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'An error has occurred to our client, id to be retrieved have been interrupted.' });
    });

});


// UPDATE controller ************************************
app.put('/games/:_id', (req, res) => {
    games.updateGame(
        req.params._id, 
        req.body.game, 
        req.body.amount, 
        req.body.finished,
        req.body.date
    )
    .then(gameTitle => {
        console.log(`"${gameTitle.game}" was updated.`);
        res.json(gameTitle);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'An error has occurred to our client, update of the games have been interrupted.' });
    });
});


// DELETE Controller ******************************
app.delete('/games/:_id', (req, res) => {
    games.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} Game was deleted.`);
                res.status(200).send({ Success: 'You were able to connect, and the specific id was deleted.' });
            } else {
                res.status(404).json({ Error: 'An error has occurred, it seems we were not able to find the id to delete.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error has occurred, deletion of the games have been interrupted.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});