import { WeatherModuleErrors } from './errors';
import SIFetchAirportInformation from './interfaces/SFetchAirportInformation';
import SeperateCSVData from './connections/seperateCSVData';
import IAirportInformation from './interfaces/IAirportInformation';

export const SFetchAirportInformation = async ({ icao }: SIFetchAirportInformation) => {
     // Check ICAO validation
     if (!icao) return { error: 'WM01', description: WeatherModuleErrors['WM01'] };
     if (icao.length != 4) return { error: 'WM02', description: WeatherModuleErrors['WM02'] };
     const airportsData = await SeperateCSVData({ file: 'airports' });
     return await airportsData.find((airport: IAirportInformation) => airport.icao === icao);
};
