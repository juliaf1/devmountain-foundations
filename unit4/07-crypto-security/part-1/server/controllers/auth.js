const bcrypt = require('bcryptjs');
const users = [];

module.exports = {
    login: (req, res) => {
      console.log('Logging In User');
      console.log(users);
      console.log(req.body);
      const { username, password } = req.body;
      const user = users.filter(user => user.username == username)[0];
      const correctInput = bcrypt.compareSync(password, user.password);
      if (correctInput) {
        res.status(200).send(user);
      } else {
        res.status(400).send("User not found");
      };
    },
    register: (req, res) => {
        console.log('Registering User')
        const { password } = req.body;
        const salt = bcrypt.genSaltSync(5);
        const hashedPass = bcrypt.hashSync(password, salt);
        req.body.password = hashedPass;
        console.log(req.body);
        users.push(req.body);
        res.status(200).send(req.body);
    }
}