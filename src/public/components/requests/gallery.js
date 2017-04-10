import axios from 'axios';

const queryGallery = async function(imgURL) {
  try {
    const { data } = await axios.post('/kairosGalleryRecognize', { img: imgURL });
    return data;
  } catch (err) {
    // todo: handle client errors better
    console.warn(err);
  }
};

const storeInGallery = async function(imgURL) {
  try {
    await post('galleryStore', { img: imgURL });
  } catch (err) {
    // todo: handle client errors better
    console.warn(err);
  }
};



export { queryGallery };