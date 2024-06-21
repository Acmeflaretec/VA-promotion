const Ads = require('../models/ads')

const createAds = async (req, res) => {
  const { title,subtitle,url } = req.body
  const image = req?.file?.filename

  try {
      const ads = new Ads({title,subtitle,url,image});
      await ads.save();
      res.status(201).json({ message: ' created successfully', data: ads });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const updateAdsById = async (req, res) => {
  const {title,subtitle,url,status } = req.body
  const image = req.file?.filename;
  try {
      const ads = await Ads.findById(req.params.id);
      if(!ads){
        return res.status(404).json({ message: ' not found' });
      }
      if(title) ads.title = title
      if(subtitle) ads.subtitle = subtitle
      if(url) ads.url = url
      if(status) ads.status = status
      if(image) ads.image = image

      await ads.save()

      res.json({ message: ' updated successfully', data: ads });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getAds = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const ads = await Ads.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: ads });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const deleteAdsById = async (req, res) => {
  try {
    const ads = await Ads.deleteOne({_id:req.params.id});
    fs.unlink(`public/uploads/${ads?.image}`, (err) => {
      if (err) {
        console.error('Error deleting image:', err);
        return;
      }
      console.log('Image deleted successfully.');
    });
    res.status(200).json({ message: ' deleted successfully', data: ads });

} catch (error) {
    res.status(400).json({ error: error.message });
}
};

const getAdsById = async (req, res) => {
  try {
      const ads = await Ads.findById(req.params.id);
      
      if (!ads) {
          return res.status(404).json({ message: ' not found' });
      }
      
      res.json({ data: ads });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


module.exports ={
  createAds,
  updateAdsById,
  getAds,
  deleteAdsById,
  getAdsById,
  
}