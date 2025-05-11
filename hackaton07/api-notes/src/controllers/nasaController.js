const { fetchPhotosByMars } = require("../services/fetchPhotos");

const getPhotosByMars = async (req, res) => {
    try {
        
        const data = await fetchPhotosByMars();

        if (!data) {
            return res.status(404).json({ error: 'Mars rover not found' });
        }

        const photos = data.map(photo => ({
            id: photo.id,
            imgSrc: photo.img_src,
            earthDate: photo.earth_date,
            roverName: photo.rover.name,
            cameraName: photo.camera.full_name
        }));

        return res.status(200).json(photos);

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getPhotosByMars };