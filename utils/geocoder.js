const axios = require("axios");

async function getCoordinates(location){

    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`,
        {
            params: {
                q: location,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "Wanderlust-App"
            }
        }
    );

    if(response.data.length === 0){
        return null;
    }

    return {
        lat: response.data[0].lat,
        lon: response.data[0].lon
    };
}

module.exports = getCoordinates;