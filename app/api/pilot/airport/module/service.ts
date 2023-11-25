import AirportModuleErrors from './errors';
import SIFetchAirportInformation from './interfaces/SFetchAirportInformation';
import SeperateCSVData from './connections/seperateCSVData';
import IAirportInformation from './interfaces/IAirportInformation';
import { IAirportRunwayInformations, UARunway } from './interfaces/IAirportRunwayInformations';

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
     // const airportRunways: any[] = [];
     const runways = await SeperateCSVData({ file: 'runways' });
     const icaoAirportRunways = runways.filter((runway: IAirportRunwayInformations) => runway.airport_ident === icao);
     // icaoAirportRunways.forEach((runway: IAirportRunwayInformations) => {
     //      const eachRunway: UARunway[] = [];
     //      eachRunway.push({
     //           run_apt: runway.airport_ident,
     //           run_ident: runway.le_ident,
     //           run_lat: runway.le_latitude_deg,
     //           run_log: runway.le_longitude_deg,
     //           run_elv: runway.le_elevation_ft,
     //           run_hdg: runway.le_heading_degT,
     //      });
     //      eachRunway.push({
     //           run_apt: runway.airport_ident,
     //           run_ident: runway.he_ident,
     //           run_lat: runway.he_latitude_deg,
     //           run_log: runway.he_longitude_deg,
     //           run_elv: runway.he_elevation_ft,
     //           run_hdg: runway.he_heading_degT,
     //      });
     //      airportRunways.push(eachRunway);
     // });
     return icaoAirportRunways;
};
