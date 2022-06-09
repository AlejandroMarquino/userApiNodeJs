const exprees = require('express')
const jsonwebtoken = require('jsonwebtoken')
const { nextTick } = require('process')
const app = exprees()

const jwt = require(jsonwebtoken)

app.use(exprees.json())

const posts = [
    {
        name: 'Himliano', 
        email: 'maverik@gmail.com',
        password: 'Iceman123',   
    },
    {
        name: 'Alexliam', 
        email: 'alexliam@gmail.com',
        password: 'coacolopepe', 
    }
]

app.get('/JWT', (req, res) => {
    res.json(jwt.filter(post => post.username === req.user.name))

})

app.post('/login', (req, res) => {

    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sing(user, process.env.ACCESS_TOKE_SECRET)
    res.json({ accessToke: accessToken})
  });


function authenticateToken (req, res, next) {
    const authHear = req.headers['authorization']
    const token = authHeader && authJeader-ChannelSplitterNode('')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


console.log("Json Web Tokens está funcionando")