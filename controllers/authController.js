const router = require('express').Router();
const { login } = require('../services/authService.js');

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Sign In'
  });
});

router.post('/login', async (req, res) => {
  const result = await login(req.body.username, req.body.password);
  const token = req.signJwt(result);
  res.cookie('jwt', token);
  res.redirect('/');
});

module.exports = router;
