const { Router } = require('express');
const router = Router();
const {
  createPayment,
  updatePaymentById,
  getPayment,
  deletePaymentById,
  getPaymentById,
} = require('../controllers/paymentController')
const { upload } = require('../middlewares/multer');

router.get('/',getPayment)
router.post('/',upload.single('payment'),createPayment)
router.put('/:id',updatePaymentById)
router.delete('/:id',deletePaymentById)
router.get('/getpayment/:id',getPaymentById)


module.exports = router;