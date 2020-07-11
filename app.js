import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('Hola nundo!');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Example app listening on port '+app.get('port')+'!');
});