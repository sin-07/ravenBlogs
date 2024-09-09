const router = require('express').Router();
const { verify } = require('jsonwebtoken');
const { signup, login, checkAuth } = require('./controllers/AuthControllers');
const verifyToken = require('./middlewares/verifyToken');
const { createBlog, getAllBlogs } = require('./controllers/BlogController');
const { getBlogById } = require('./controllers/BlogController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/checkAuth',verifyToken,checkAuth)
router.post('/createBlog',verifyToken,createBlog);
router.get('/allBlogs',getAllBlogs);
router.get('/getBlogById/:id', getBlogById);

module.exports = router;

