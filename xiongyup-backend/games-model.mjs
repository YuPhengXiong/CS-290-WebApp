// Models for the "Amount of Times a Game has been Played" Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'You have failed the connect to MongoDB.' });
    } else  {
        console.log('Success: Connection to MongoDB is complete, Have fun!');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	game:           { type: String, required: true },
	amount:         { type: Number, required: true },
    finished:       { type: String, required: true },
	date:           { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "Games".
const games = mongoose.model('games', gameSchema);

// CREATE model *****************************************
const createGame = async (title, amount, finished, date) => {
    const game = new games({ 
        game: title, 
        amount: amount, 
        finished: finished,
        date: date
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGame = async () => {
    const query = games.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = games.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await games.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, title, amount, finished, date) => {
    const result = await games.replaceOne({_id: _id }, {
        game: title, 
        amount: amount, 
        finished: finished,
        date: date
    });
    return { 
        _id: _id, 
        game: title,
        amount: amount, 
        finished: finished,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGame, retrieveGameByID, updateGame, deleteGameById }