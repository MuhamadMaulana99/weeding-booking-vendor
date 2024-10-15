const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./model/index.js')

const userRoute = require('./route/user.js')

const app = express()
const port = 4000;
app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }))

// db.sequelize.sync({ force: true }).then(() => console.log('database ready!'))
db.sequelize.sync().then(() => console.log('database ready!'))

app.use(userRoute);
app.use('*',(req, res)=> {res.status(404).json({ message: 'Not Found Error!!'})})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
