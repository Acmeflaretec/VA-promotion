const Video = require('../models/video')

const createVideo = async (req, res) => {
  const { title,subtitle,url } = req.body
  const image = req?.file?.filename

  try {
      const video = new Video({title,subtitle,url,image});
      await video.save();
      res.status(201).json({ message: 'Video created successfully', data: video });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const updateVideoById = async (req, res) => {
  const {title,subtitle,url,status } = req.body
  const image = req.file?.filename;
  try {
      const video = await Video.findById(req.params.id);
      if(!video){
        return res.status(404).json({ message: ' not found' });
      }
      if(title) video.title = title
      if(subtitle) video.subtitle = subtitle
      if(url) video.url = url
      if(status) video.status = status
      if(image) video.image = image

      await video.save()

      res.json({ message: ' updated successfully', data: video });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getVideos = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const videos = await Video.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: videos });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const deleteVideoById = async (req, res) => {
  try {
      const video = await Video.findByIdAndDelete(req.params.id);
      res.json({ message: 'Video deleted successfully', data: video });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
      const video = await Video.findById(req.params.id);
      
      if (!video) {
          return res.status(404).json({ message: 'Video not found' });
      }
      
      res.json({ data: video });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports ={
  createVideo,
  updateVideoById,
  getVideos,
  deleteVideoById,
  getVideoById,

}