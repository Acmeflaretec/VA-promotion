const Payment = require('../models/payment')


const createPayment = async (req, res) => {
  const { title,subtitle,url } = req.body
  const image = req?.file?.filename

  try {
      const payment = new Payment({title,subtitle,url,paymentimage:image});
      await channel.save();
      res.status(201).json({ message: ' created successfully', data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const updatePaymentById = async (req, res) => {
  try {
      const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: ' updated successfully', data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getPayment = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const payment = await Payment.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const deletePaymentById = async (req, res) => {
  try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      res.json({ message: ' deleted successfully', data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
      const payment = await Payment.findById(req.params.id);
      
      if (!payment) {
          return res.status(404).json({ message: ' not found' });
      }
      
      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports ={
  createPayment,
  updatePaymentById,
  getPayment,
  deletePaymentById,
  getPaymentById,
  
}