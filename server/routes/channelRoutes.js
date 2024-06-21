const { Router } = require('express');
const router = Router();
const {
  createChannel,
  updateChannelById,
  getChannel,
  deleteChannelById,
  getChannelById,
} = require('../controllers/channelController')
const { upload } = require('../middlewares/multer');

router.get('/',getChannel)
router.post('/',upload.single('channel'),createChannel)
router.put('/:id',upload.single('channel'),updateChannelById)
router.delete('/:id',deleteChannelById)
router.get('/getchannel/:id',getChannelById)


module.exports = router;