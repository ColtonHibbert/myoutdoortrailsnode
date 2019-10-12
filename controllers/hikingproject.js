const fetch = require("node-fetch");

const handleHikingProject = (req, res ) => {
    const {lat, lon} = req.body
    if(!lat  || !lon) {
        return res.json(`unable to get hiking project api data`)
    }
    console.log(lat, lon)
    // async function hikes() {
    //     const getHikes = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             },
    //     })
    //     .catch("fetch didn't work");
    //     console.log(getHikes.json())
    //     return getHikes;
    // }
    // const hikesValues = hikes();
    //res.json("works")
    //console.log(hikesValues);
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`
    // , {
    //     method: "POST",
    //     headers: {
    //               'Access-Control-Allow-Origin': '*'
    //     }
    // }
    ).then(data => res.json(data))
    //.then(data => JSON.stringify(data))
    console.log("after hiking project fetch")
    //.catch(err => res.status(400).json('hiking project request failed'))
    // try async, send res at end, put await value in the res, maybe res.send 

}

module.exports = {
    handleHikingProject
}