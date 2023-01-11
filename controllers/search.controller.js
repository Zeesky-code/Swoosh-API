const Crawler = require('crawler');


async function getSpotifyLink(req,res){

    const url = req.body.url;
    let title = await getTitle(url);
    title = title.replace(/[\u{0080}-\u{FFFF}]/gu,"");
    res.status(200).json({
        "status": true,
        "title": title
    })
    

    
}

async function getTitle(url) {
    const c = new Crawler();
    return new Promise(function (resolve, reject) {
    // Queue just one URL, with default callback
        c.direct({
            uri: url,
            skipEventRequest: false, // default to true, direct requests won't trigger Event:'request'
            callback: (error, response, done) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(response.$('title').text());
                    return response.$('title').text();
                }
            }
        });
    })
}
module.exports = {getSpotifyLink}