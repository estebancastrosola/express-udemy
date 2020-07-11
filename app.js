import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const mongoose = require('mongoose');

const app = express();


// Conexión a DB
// const uri = 'mongodb://localhost:27017/udemy'
// Conexión en la nube
const uri = 'mongodb+srv://usuarioapp:PLbYlGtuqyB17Td4@myapp.amyxo.mongodb.net/MyApp?retryWrites=true&w=majority'
    

const options = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a mongoDB') },
    err => { err }
);

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes/nota'));

app.get('/', function (req, res) {
    res.send('Hola nundo!');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Example app listening on port '+app.get('port')+'!');
});