const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000; 

const blogRouter = require('./src/routes/blogRoutes');
const User = require('./models/user');
const contact = require('./models/contact')

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use('/', blogRouter);

app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`);
});


app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/contact', async (req, res) => {
    try {
        const { fullName, email, message } = req.body;
        const newContact = new Contact({ fullName, email, message });
        await newContact.save();
        res.status(201).send('Message received successfully!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/contact', async (req, res) => {
    try {

        const { fullName, email, message } = req.body;


        const newContact = new Contact({
            fullName,
            email,
            message
        });

        await newContact.save();


        res.status(201).send('Message received and saved!');
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).send('Error saving contact');
    }
});


mongoose.connect('mongodb+srv://jackdone1:ETz1n1feFJfMr89P@cluster1.6bgrr6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => {
        debug('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
});
