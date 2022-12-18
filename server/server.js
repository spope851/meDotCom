import express from 'express';
const app = express()
import fetch from 'node-fetch';
import Cube from 'cubejs';
import { shuffle } from './utils/shuffle.js';
import { pool } from './utils/postgres.js';

app.get('/getTruths', async (req, res) => {
    console.log('GET truths  ', req.query)
    const truths = await pool.query(`SELECT * FROM truths WHERE is_true = CAST(1 as BIT) ORDER BY random() LIMIT 2;`)
    const lie = await pool.query(`SELECT * FROM truths WHERE is_true != CAST(1 as BIT) ORDER BY random() LIMIT 1;`)
    const twoTruths = truths.rows
    twoTruths.push(lie.rows[0])
    res.status(200).send(shuffle(twoTruths))
})

app.get('/solveCube', async (req, res) => {
    console.log('GET cube  ', req.query)
    const myCube = new Cube(Cube.fromString(req.query.facelets))
    Cube.initSolver()
    const solution = myCube.solve();
    res.status(200).send(solution.split(' '))
})

app.get('/getContent', async (req, res) => {
    console.log('GET content  ', req.query)
    const data = await pool.query(`SELECT * FROM content ORDER BY id DESC LIMIT 1;`)
    res.status(200).send(data.rows[0])
})

app.get('/getMandarin', async (req, res) => {
    console.log('GET mandarin  ', req.query)
    const data = await pool.query(`SELECT * FROM mandarin;`)
    res.status(200).send(data.rows)
})

app.get('/getTweets', async (req, res) => {
    console.log('GET tweets  ', req.query)
    await fetch(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=s_pop3&count=${req.query.count}&tweet_mode=extended`,
        {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
        },
        }
    ).then(data => data.json()).then(r => res.send(r))
})

app.listen(5000, () => console.log(`Listening on port 5000`))