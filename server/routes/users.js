const {getUsersInformation} = require("../user-information/user-info");
let express = require('express');
let router = express.Router();

router.post('/information', async function (req, res) {
  let userInfo = req.body;
  try {
    let usersInfo=await getUsersInformation(userInfo);
    res.send(usersInfo)
  } catch (error) {
    res.send(error)
  }
});


module.exports = router;
