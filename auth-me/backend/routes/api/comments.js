const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Comment } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    res.json(comments);
  }));

const validateComment = [
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a post.'),
    handleValidationErrors
];

router.post(
  '/',
  validateComment,
  asyncHandler(async (req, res) => {
    const { description, sessionUser, PostId } = req.body;
    const userId = sessionUser.id;
    const comment = await Comment.create({ description, userId, PostId });

    return res.json(comment);
  })
);

router.delete(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  console.log("req--- ", commentId);
  const comment = await Comment.findByPk(commentId)
  console.log("comment1---", comment)
  if (comment) {
    await comment.destroy();
    return res.json(commentId)
  } else {
    throw new Error('Cannot find comment.');
  }
}));



module.exports = router;