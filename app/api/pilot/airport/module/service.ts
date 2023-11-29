import AirportModuleErrors from './errors';
import SIFetchAirportInformation from './interfaces/SFetchAirportInformation';
import SeperateCSVData from './connections/seperateCSVData';
import IAirportInformation from './interfaces/IAirportInformation';
import { IAirportRunwayInformations } from './interfaces/IAirportRunwayInformations';

export const SFetchAirportInformation = async ({ icao }: SIFetchAirportInformation) => {
     // Check ICAO validation
     if (!icao) return { error: 'WM01', description: AirportModuleErrors['WM01'] };
     if (icao.length != 4) return { error: 'WM02', description: AirportModuleErrors['WM02'] };
     const airportsData = await SeperateCSVData({ file: 'airports' });
     return await airportsData.find((airport: IAirportInformation) => airport.ident === icao);
};

export const SFetchAirportRunwayInformations = async ({ icao }: SIFetchAirportInformation) => {
     // Check ICAO validation
     if (!icao) return { error: 'WM01', description: AirportModuleErrors['WM01'] };
     if (icao.length != 4) return { error: 'WM02', description: AirportModuleErrors['WM02'] };
     const runways = await SeperateCSVData({ file: 'runways' });
     const icaoAirportRunways = runways.filter((runway: IAirportRunwayInformations) => runway.airport_ident === icao);
     return icaoAirportRunways;
};
