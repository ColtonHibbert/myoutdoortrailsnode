const fetch = require("node-fetch");

const handleHikingProject = (req, res ) => {
    const {lat, lon} = req.body
    if(!lat  || !lon) {
        return res.json(`unable to get hiking project api data`)
    }
    console.log(lat, lon)
    ( () => fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`
    // , {
    //     method: "POST",
    //     headers: {'Content-type': 'application/json'},
    //     mode: "no-cors" 
    // }
    )
    .then(data => {
        console.log(data);
        console.log( data.json());
        return data.json();
    })
    .catch(err => res.status(400).json('hiking project request failed'))
    )(lat, lon)
}

module.exports = {
    handleHikingProject
}