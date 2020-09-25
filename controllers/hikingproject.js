const fetch = require("node-fetch");

const handleHikingProject = (req, res ) => {
    const {lat, lon} = req.body
    if(!lat  || !lon) {
        return res.json(`unable to get hiking project api data`)
    }
    //console.log(lat, lon)
    //console.log(hikesValues);
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`
    ).then(data => data.json())
    .then( (trails) => res.send(trails))
    console.log("after hiking project fetch")
    .catch(err => res.status(400).json('hiking project request failed'))


}

module.exports = {
    handleHikingProject
}