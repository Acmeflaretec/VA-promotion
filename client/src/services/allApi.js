import axios from 'axios';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BackendApi}/api/v1/payment/video`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
