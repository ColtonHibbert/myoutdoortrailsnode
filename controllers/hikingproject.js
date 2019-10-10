const fetch = require("node-fetch");

const handleHikingProject = (req, res ) => {
    const {lat, lon} = req.body
    if(!lat  || !lon) {
        return res.json(`unable to get hiking project api data`)
    }
    console.log(lat, lon)
    async function hikes() {
        const getHikes = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`);
        return getHikes;
    }
    const hikesValues = hikes();
    console.log(hikesValues);
    // fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`
    // // , {
    // //     method: "POST",
    // //     headers: {'Content-type': 'application/json'},
    // //     mode: "no-cors" 
    // // }
    // ).then(data => console.log(data.json()))
    // .catch(err => res.status(400).json('hiking project request failed'))
    // try async, send res at end, put await value in the res, maybe res.send 

}

module.exports = {
    handleHikingProject
}