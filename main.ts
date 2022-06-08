import express from 'express'
import bodyParser from 'body-parser'
const app: express.Express = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/server', (req: express.Request, res: express.Response) => {
    res.send('hello!')
})
app.post('/server', (req: express.Request, res: express.Response) => {
    res.send('testpost')
})
app.listen(5000, () => {
    console.log("start")
})