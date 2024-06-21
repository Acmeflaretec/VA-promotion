const Channel = require('../models/channel')

const createChannel = async (req, res) => {
  const { title,subtitle,url } = req.body
  const image = req?.file?.filename

  try {
      const channel = new Channel({title,subtitle,url,image});
      await channel.save();
      res.status(201).json({ message: ' created successfully', data: channel });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const updateChannelById = async (req, res) => {
  try {
      const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: ' updated successfully', data: channel });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getChannel = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const channel = await Channel.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: channel });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const deleteChannelById = async (req, res) => {
  try {
      const channel = await Channel.findByIdAndDelete(req.params.id);
      res.json({ message: ' deleted successfully', data: channel });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getChannelById = async (req, res) => {
  try {
      const channel = await Channel.findById(req.params.id);
      
      if (!channel) {
          return res.status(404).json({ message: ' not found' });
      }
      
      res.json({ data: channel });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


module.exports ={
  createChannel,
  updateChannelById,
  getChannel,
  deleteChannelById,
  getChannelById,
  
}