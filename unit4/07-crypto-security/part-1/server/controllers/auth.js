const bcrypt = require('bcryptjs');
const users = [];

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const { password } = req.body;
        const salt = bcrypt.genSaltSync(5) // adds extra characters to hash
        const hashedPass = bcrypt.hashSync(password, salt); // hashes pass passing salt as argument
        req.body.password = hashedPass;
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}