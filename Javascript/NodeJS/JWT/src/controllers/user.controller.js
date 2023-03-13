const colors = require('colors')
const users = require('../db/users')
const jwt = require('jsonwebtoken')

const loginUser = async(req, res) => {
    
    const {
        username,
        password
    } = req.body

    const userId = users.find(user => user.username == username && user.password == password).user_id

    if( userId != undefined){
        //console.log(colors.cyan('User Found and Correct'))
        
        //* Payload "Contenido" del TOKEN
        const payload = {userId}

        const token = jwt.sign(payload, 'secret') //? --> Firma del token

        res.send({
            token
        })
    }
}

const createNote = async(req, res, next) => {
    const tokenAuth = req.get('authorization')

    let token = ''

    if(tokenAuth && tokenAuth.toLowerCase().startsWith('bearer')){
        token = tokenAuth.split(' ')[1]            
    }

    const decodedToken = jwt.verify(token, 'secret');

    if(!token || !decodedToken.userId){
        return res.status(401).json({error: 'token missing'})
    }

    return res.status(200).json({user_id: decodedToken.userId})
}

module.exports = {
    loginUser,
    createNote
}