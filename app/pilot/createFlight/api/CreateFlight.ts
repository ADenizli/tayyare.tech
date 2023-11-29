import axios from 'axios';

export interface CreateFlightDTO {
     flightNumber: string;
     callsign: string;
     date: Date;
     depICAO: string;
     arrICAO: string;
     alt1ICAO: string;
     alt2ICAO: string;
}

const serviceHeader = {
     headers: {
          'content-type': 'application/json',
     },
};

async function CreateFlight(dto: CreateFlightDTO) {
     try {
          const response = await axios.post(process.env.ROOT_URL + 'api/pilot/flight/createFlight', dto, serviceHeader);
          return response.data;
     } catch (error: any) {
          if (error.response) {
               return error.response.status;
          }
          console.error('Error on pack product-management:', error);
          throw error;
     }
}

export default CreateFlight;
