import express from 'express';
const app = express()
import fetch from 'node-fetch';
import * as keys from './keys.js';
import pkg from 'pg';
delete pkg.native;
const { Pool } = pkg;

const pool = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

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