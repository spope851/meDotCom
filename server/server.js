import express from 'express';
const app = express()
import fetch from 'node-fetch';

// app.get('/getall', async (req, res) => {
//     console.log('GET ...doing some work...  ', req.query)
//     const data = await pool.query(`SELECT * FROM unreal_data ${req.query.search && `WHERE data LIKE '%${req.query.search}%'`}`)
//     res.status(200).send(data.rows)
// })

app.get('/getTweets', async (req, res) => {
    console.log('GET tweets  ', req.query)
    await fetch(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=s_pop3&count=10`,
        {
        headers: {
            Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADj0RAEAAAAANbcQ43Jw27zlY4Hi6He4V7tVPNM%3DH0xIrAUbqSoihIZOuOpzMBatzgZ0JcgziECnosFmqIlcWr8Ycd`,
        },
        }
    ).then(data => data.json()).then(r => res.send(r))
})

app.listen(5000, () => console.log(`Listening on port 5000`))