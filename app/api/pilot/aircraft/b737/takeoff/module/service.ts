import { SFetchAirportInformation, SFetchAirportRunwayInformations } from '@/app/api/pilot/airport/module/service';
import { SFetchMetar } from '../../../../weather/module/service';
import STakeoffInformationsDTO from '../dto/STakeoffDTO';
import TakeoffModuleErrors from './errors';
import { IFetchedMetar, IMetarData } from '@/app/api/pilot/weather/module/interfaces/IMetar';

export const STakeoffInformations = async ({ depICAO, arrICAO }: STakeoffInformationsDTO) => {
     if (!depICAO) return { error: 'TM01', description: TakeoffModuleErrors['TM01'] };
     if (!arrICAO) return { error: 'TM02', description: TakeoffModuleErrors['TM02'] };

     // Weather requests
     const depMetar: IFetchedMetar = await SFetchMetar({ icao: depICAO });
     const arrMetar: IFetchedMetar = await SFetchMetar({ icao: arrICAO });

     // Airport information requests
     const depAirportInformation = await SFetchAirportInformation({ icao: depICAO });
     const arrAirportInformation = await SFetchAirportInformation({ icao: arrICAO });

     // Runway information requests
     const depAirportRunwayInformations = await SFetchAirportRunwayInformations({ icao: depICAO });
     const arrAirportRunwayInformations = await SFetchAirportRunwayInformations({ icao: arrICAO });

     // Active runway choosing
     const depMetarSeperatedWind = depMetar.data.wind;

     // Navaid information requests

     return {
          depMetar,
          arrMetar,
          depAirportInformation,
          arrAirportInformation,
          depAirportRunwayInformations,
          arrAirportRunwayInformations,
     };
};
