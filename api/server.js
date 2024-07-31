require('dotenv').config();
const Roles = require('./models/roles');
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
db.on('connected', async () => {
  console.log('Connected to database');
  const roles = await Roles.find();
  if (!roles.length) {
    new Roles({
      name: 'User',
    }).save();
    new Roles({
      name: 'Admin',
      deleteProfile: true
    }).save();
  }
});

app.use(express.json());
app.use(cors()); // Use this after the variable declaration

app.use('/profiles', profilesRouter);
app.use('/auth', authRouter);
app.use('/uploads', express.static('uploads'));

app.listen(3001, () => console.log('Server started'));
