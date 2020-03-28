const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb://yuri:yuri1123@ds141766.mlab.com:41766/movie', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world!ffffff'))


app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어준다

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))