const { Router } = require('express');
const router = Router();
const {
  createVideo,
  updateVideoById,
  getVideos,
  deleteVideoById,
  getVideoById,

} = require('../controllers/videoController')
const { upload } = require('../middlewares/multer');

router.get('/',getVideos)
router.post('/',upload.single('video'),createVideo)
router.put('/:id',upload.single('video'),updateVideoById)
router.delete('/:id',deleteVideoById)
router.get('/getvideo/:id',getVideoById)


module.exports = router;