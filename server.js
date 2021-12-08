const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
const path = require('path');
const whitelist = 'https://statify-bbbaden.azurewebsites.net/';
require('dotenv').config();

const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

const port =  process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/login', cors(corsOptionsDelegate), (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        clientId: 'YOUR CLIENT ID',
        clientSecret: 'YOUR CLIENT SECRET',
        redirectUri: 'https://statify-bbbaden.azurewebsites.net/'
    })

    const code = req.body.code;
    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/refresh', cors(corsOptionsDelegate), (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        clientId: 'YOUR CLIENT ID',
        clientSecret: 'YOUR CLIENT SECRET',
        redirectUri: 'https://statify-bbbaden.azurewebsites.net/',
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch(() => {
            res.sendStatus(400)
        })
})
app.listen(port)
