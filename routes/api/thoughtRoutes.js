const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/').get(getThoughts).post(createThought);

// /api/applications/:applicationId
router.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


// /api/applications/:applicationId/tags
router.route('/:thoughtID/reactions').post(createReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtID/reactions/:reactionID').delete(deleteReaction);

module.exports = router;
