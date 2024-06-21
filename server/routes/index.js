const express = require('express');
const router = express.Router();
const videoRoutes = require('../routes/videoRoutes')
const channelRoutes = require('../routes/videoRoutes')


router.use('/v1/video',videoRoutes );
router.use('/v1/channel',channelRoutes );


module.exports = router;