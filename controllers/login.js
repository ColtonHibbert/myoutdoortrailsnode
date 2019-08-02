const handleLogin = ( req, res, postgresDB, bcrypt ) => {
    const { email, crypted_password } = req.body;
    console.log(req.body)
    if(!email  || !crypted_password) {
        return res.json(`unable to login`)
    }
    postgresDB.select('email', 'crypted_password').from('users')
    .where('email', '=', email) 
    .then(data => {
        const isValid = bcrypt.compareSync(data[0].crypted_password);
        if(isValid) {
            return postgresDB.select('*').from('users')
            .where('email', '=', email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json(`unable to get user`))
        } else {
            res.status(400).json('unable to get user')
        }
    }).catch(err => res.status(400).json(`received wrong credentials`))
}


module.exports = {
    handleLogin,
}