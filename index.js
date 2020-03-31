const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key')

const { User } = require('./models/user');

mongoose.connect(config.mongoURI,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() =>console.log('DB connected'))
                              .catch(err => console.error(err));


app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json("hi")
})


app.post('/api/users/register', (req, res) => {
        const user = new User(req.body);

        user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            userData: doc
        })
    })
})

app.post('/login', (req, res) => {
    //요청된 이메일을 데이터베이스에 있는지 확인

    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
    })

    //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인

    user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch) {
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다. "})
        }
        
        

    })

    // 비밀번호까지 같다면 Token을 생성

})



app.listen(5000);