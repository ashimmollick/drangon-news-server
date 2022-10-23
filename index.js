const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const catagories = require('./data/Catagories.json')
app.get('/', (req, res) => {
    res.send('News API Runnign')
});
app.get('/news-catagories', (req, res) => {
    res.send(catagories)
});
app.listen(port, () => {
    console.log('Dragon News', port)
})