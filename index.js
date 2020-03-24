const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://yuri:yuri1123@ds141766.mlab.com:41766/movie', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))