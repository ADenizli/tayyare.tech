import axios from 'axios';

export default async function fetchMetar(ICAO: string) {
     const config = {
          headers: { 'X-API-Key': process.env.WEATHER_API_KEY },
     };

     try {
          const resp = await axios.get(`https://api.checkwx.com/metar/${ICAO}/decoded`, config);
          return resp.data;
     } catch (err) {
          // Handle Error Here
          return err;
     }
}
