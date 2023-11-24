import { SFetchAirportInformation } from '@/app/api/pilot/airport/module/service';
import { SFetchMetar } from '../../../../weather/module/service';
import STakeoffInformationsDTO from '../dto/STakeoffDTO';
import TakeoffModuleErrors from './errors';

export const STakeoffInformations = async ({ depICAO, arrICAO }: STakeoffInformationsDTO) => {
     if (!depICAO) return { error: 'TM01', description: TakeoffModuleErrors['TM01'] };
     if (!arrICAO) return { error: 'TM02', description: TakeoffModuleErrors['TM02'] };

     // Weather requests
     const depMetar = await SFetchMetar({ icao: depICAO });
     const arrMetar = await SFetchMetar({ icao: arrICAO });

     // Airport information requests
     const depAirportInformation = await SFetchAirportInformation({ icao: depICAO });
     const arrAirportInformation = await SFetchAirportInformation({ icao: arrICAO });

     console.log(depAirportInformation, arrAirportInformation);
     // Runway information requests
     // Navaid information requests

     return { depMetar, arrMetar };
};
