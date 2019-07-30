const handleSignup = (req, res, postgresDB, bcrypt ) => {
    const { email, crypted_password } = req.body;
    if (!email || !crypted_password) {
        return res.status(400).json('incorrect form submission')
    }
    const hash = bcrypt.hashSync(crypted_password);
    postgresDB.transaction(trx => {
        trx.insert({
            crypted_password: hash,
            email: email,
            joined: new Date()
        })
        .into('users')
        .catch(err => res.status(400).json('unable to signup'))
    })
}

module.exports = {
    handleSignup,
}