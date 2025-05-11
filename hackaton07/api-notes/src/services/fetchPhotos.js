const fetchPhotosByMars = async (mars) => {
    const apiKey = process.env.PUBLIC_API_KEY_NASA;
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Mars rover not found');
        }
        const data = await response.json();
        return data.photos;
    } catch (error) {
        throw error;
    }
}

module.exports = { fetchPhotosByMars };