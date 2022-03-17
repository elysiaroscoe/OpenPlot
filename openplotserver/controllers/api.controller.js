const axios = require('axios');
const _PHOTO_URL = 'https://api.nookipedia.com/nh/photos';
const _VILLAGER_URL = 'https://api.nookipedia.com/villagers';
const header = {
    "X-API-KEY": process.env.NOOKIPEDIA_SECRET_KEY,
    "Accept-Version": "1.5.0"
}

module.exports = {
    photoAPI: (req,res) => {
        axios(_PHOTO_URL, {headers: header})
        .then(response => res.json(response.data))
        .catch(err => res.json(err))
    },

    villagerAPI: (req,res) => {
        axios(_VILLAGER_URL, {headers: header})
        .then(response => res.json(response.data))
        .catch(err => res.json(err))
    }
}
