import axios from 'axios'

export const getPlacesData = async (type, sw , ne) => {
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lat,
            tr_longitude: ne.lng,
          },
          headers: {
              'X-RapidAPI-Key': '750e56b799msh648a4366b6dafc5p1c66f2jsn249b54bab349',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'   
          }
        });
        
        return data;
    } 
    catch (error) {
        console.log(error)
    }
}