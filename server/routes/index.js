const express = require('express');
const router = express.Router();
const videoRoutes = require('../routes/videoRoutes')
const channelRoutes = require('../routes/videoRoutes')
const adsRoutes = require('../routes/adsRoutes')
const paymentRoutes = require('../routes/paymentRoutes')


   

router.use('/v1/video',videoRoutes );
router.use('/v1/channel',channelRoutes );
router.use('/v1/ads',adsRoutes );
router.use('/v1/payment',paymentRoutes );

module.exports = router;