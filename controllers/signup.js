const handleSignup = (req, res, postgresDB, bcrypt ) => {
    const { email, crypted_password, name } = req.body;
    if (!email || !crypted_password) {
        return res.status(400).json('incorrect form submission')
    }
    const hash = bcrypt.hashSync(crypted_password);
    postgresDB.transaction(trx => {
        trx.insert({
            email: email,
            joined: new Date(),
            name: name,
        })
        .into('users')
        .then(trx.commit)
        .catch(trx.rollback)
    }).catch(err => res.status(400).json('unable to signup'))
    postgresDB.transaction(trx => {
        trx.insert({
            crypted_password: hash,
            email: email,
        })
        .into('login')
        .then(trx.commit)
        .catch(trx.rollback)
    }).catch(err => res.status(400).json('unable to signup'))
    return postgresDB.select('*').from('users')
    .where('email', '=', email)
    .then(user => {
        res.json(user[0])
    })
    .catch(err => res.status(400).json(`unable to get user`))
}

module.exports = {
    handleSignup,
}