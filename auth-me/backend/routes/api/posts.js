const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Post } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  }));

const validatePost = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a post.'),
    handleValidationErrors
];

// Post post
router.post(
  '/',
  validatePost,
  asyncHandler(async (req, res) => {
    const { title, sessionUser } = req.body;
    const userId = sessionUser.id;
    const post = await Post.create({ title, userId });

    // await setTokenCookie(res, sessionUser);

    return res.json(post);
  })
);

router.put(
  '/:id(\\d+)',
  validatePost,
  asyncHandler(async (req, res) => {
    const postId = await Post.findByPk(req.params.body);
    const { title } = req.body;
    await postId.update({ title })
    const post = await Post.findByPk(req.params.id);
    return res.json(post);
  })
);

router.delete(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.id, 10)
  console.log("req- ", postId);
  const post = await Post.findByPk(postId)
  console.log("post1-", post)
  if (post) {
    await post.destroy();
    return res.json(postId)
  } else {
    throw new Error('Cannot find post.');
  }
}));



module.exports = router;