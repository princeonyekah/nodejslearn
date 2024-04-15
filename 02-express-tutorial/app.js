const express = require('express');


const app = express();
let {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
res.json(products)
})

app.get('/api/people', (req, res) =>{
res.status(200).json({success:true, data: people})
})

app.post('/login', (req, res) =>{
    console.log(req.body)
    res.send('POST')
})






app.all('*',(req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})