// const express = require('express')
import express from 'express'
const app: express.Express = express()
app.get('/server', (req: express.Request, res: express.Response) => {
    res.send('hello!')
})
app.listen(5000, () => {
    console.log("start")
})