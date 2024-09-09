const { signup, login } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');

const router = require('express').Router();


router.post('/signup',signupValidation, signup)//first call signupValidation middleware and then signup func
router.post('/login',loginValidation, login)

module.exports = router;