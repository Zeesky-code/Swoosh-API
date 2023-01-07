const jssoup = require('@aghajari/jssoup');


async function getSpotifyLink(req,res){
    const url = req.body.url;
    const doc = await jssoup.loadFromURL(url);
    const title = doc.title();
    res.status(200).json({
        "title: ": title,
    })


}


module.exports = {getSpotifyLink}