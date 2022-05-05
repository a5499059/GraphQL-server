require('dotenv').config();
const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const mongoose = require("mongoose")
const schema = require('./schema/schema')
const cors = require("cors")
const app = express()

app.use(cors())
let DBCONNSTRING ="mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASSWORD+"@cluster0.cyyun.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(DBCONNSTRING)
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected!!')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true    
}))

app.listen(8080,() => {
    console.log('listening port 8080')
})