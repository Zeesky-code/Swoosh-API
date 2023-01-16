const Crawler = require('crawler');


async function getSpotifyLink(req,res){

    const url = req.body.url;
    let title = await getTitle(url);
    title = title.replace(/[\u{0080}-\u{FFFF}]/gu,"");
    switch (req.body.source){
        case "YouTube Music":
            title = title.replace("- YouTube Music", "")
            title = title.replace("Taraycnz kullanmdan kaldrlm. Ltfen yeni srme gein.", "")
            break;
        case "Deezer":
            title = title.replace(": listen with lyrics | Deezer","")
            break;
        case "Apple Music":
            title = title.replace("on AppleMusic", "")
            break;
        default:
            title = title;
    }
    
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
            forceUTF8: false,
            skipEventRequest: false,
             // default to true, direct requests won't trigger Event:'request'
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