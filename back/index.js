const express = require('express')
const {MongoClient} = require('mongodb');
const {v1: uuidv1} = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const secret = require('./secret')
const uri = `mongodb+srv://PaladinStanislav:${secret.password}@cluster0.qro10.mongodb.net/test`
console.log(uri);

const PORT = 8000
const app = express()
app.use(cors())
app.use(express.json())


app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    const generateUserId = uuidv1();
    const hashePassword = await bcrypt.hash(password, 10);

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({email})
        if (existingUser) {
            return res.status(409).send('User already exists. Please login')
        }
        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateUserId,
            email: sanitizedEmail,
            hashed_password: hashePassword
        }

        const insertedUser =  await users.insertOne(data)
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60*24,
        })
        res.status(201).json({token, userId: generateUserId, email: sanitizedEmail})
    }
    catch (e) {
        console.log(e);
    }
})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')
        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        await client.close()
    }
})



app.listen(PORT, () => console.log('server running on PORT ' + PORT))