const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  if (req.session.login) {
    res.redirect("/home");
  } else {
    res.render("login", { loginError: req.session.loginError });
    req.session.loginError = false;
  }                                           
});

const name = "Faris";
const passwordDb = '12345678';

router.post("/login", (req, res) => {

  let {userName, password} = req.body
  console.log(req.body)


  // let userName = req.body.name;
  // let Password = req.body.password;
  // console.log(userName, Password);

  if (userName == name && password == passwordDb) {
    req.session.login = true;
    res.redirect("/home");
  } else {
    req.session.loginError = true;
    res.redirect("/");
  }
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
