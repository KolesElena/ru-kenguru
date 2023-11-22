require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const profilesRouter = require('./routes/profiles');
const authRouter = require('./routes/auth');
const express = require('express');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
mongoose.set('strictQuery', true);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
db.on('connected', () => console.log('Connected to database'));

app.use(express.json());
app.use(cors()); // Use this after the variable declaration

app.use('/profiles', profilesRouter);
app.use('/auth', authRouter);

app.listen(3000, () => console.log('Server started'));
