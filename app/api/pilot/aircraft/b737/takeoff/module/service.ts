import { SFetchAirportInformation, SFetchAirportRunwayInformations } from '@/app/api/pilot/airport/module/service';
import { SFetchMetar } from '../../../../weather/module/service';
import STakeoffInformationsDTO from '../dto/STakeoffDTO';
import TakeoffModuleErrors from './errors';
import { IAirportRunwayInformations, UARunway } from '@/app/api/pilot/airport/module/interfaces/IAirportRunwayInformations';
import IError from '@/app/api/pilot/weather/module/interfaces/IError';
import B737Limits from '../../limitations';

export const STakeoffInformations = async ({ depICAO, arrICAO }: STakeoffInformationsDTO) => {
     if (!depICAO) return { error: 'TM01', description: TakeoffModuleErrors['TM01'] };
     if (!arrICAO) return { error: 'TM02', description: TakeoffModuleErrors['TM02'] };

     // Weather requests
     // TODO: Typecheck fix
     const depMetar: /* IMetarData | IError */ any = await SFetchMetar({ icao: depICAO });
     const arrMetar: /* IMetarData | IError */ any = await SFetchMetar({ icao: arrICAO });
     if (depMetar.error) return depMetar;
     if (arrMetar.error) return arrMetar;

     // Airport information requests
     const depAirportInformation = await SFetchAirportInformation({ icao: depICAO });
     const arrAirportInformation = await SFetchAirportInformation({ icao: arrICAO });

     // Runway information requests
     const depAirportRunwayInformations: IAirportRunwayInformations[] | IError = await SFetchAirportRunwayInformations({ icao: depICAO });
     const arrAirportRunwayInformations: IAirportRunwayInformations[] | IError = await SFetchAirportRunwayInformations({ icao: arrICAO });

     // Active runway choosing
     const depWindDir: number = depMetar.wind.degrees;
     const possibleActiveRunways: UARunway[] = [];

     if (!Array.isArray(depAirportRunwayInformations)) return depAirportRunwayInformations;

     for (let runway of depAirportRunwayInformations) {
          if (runway.closed) break;
          if (runway.width_ft < B737Limits.minRnwWidth) break;

          const he = runway.he_heading_degT;
          const le = runway.le_heading_degT;

          const absHe = he - depWindDir < 0 ? -(he - depWindDir) : he - depWindDir;
          const absLe = le - depWindDir < 0 ? -(le - depWindDir) : le - depWindDir;

          if (absHe < absLe) {
               possibleActiveRunways.push({
                    run_apt: runway.airport_ident,
                    run_ident: runway.he_ident,
                    run_lat: runway.he_latitude_deg,
                    run_log: runway.he_longitude_deg,
                    run_elv: runway.he_elevation_ft,
                    run_hdg: runway.he_heading_degT,
                    run_lng: runway.length_ft,
                    run_wid: runway.width_ft,
               });
          } else if (absHe > absLe) {
               possibleActiveRunways.push({
                    run_apt: runway.airport_ident,
                    run_ident: runway.le_ident,
                    run_lat: runway.le_latitude_deg,
                    run_log: runway.le_longitude_deg,
                    run_elv: runway.le_elevation_ft,
                    run_hdg: runway.le_heading_degT,
                    run_lng: runway.length_ft,
                    run_wid: runway.width_ft,
               });
          } else {
               if (runway.he_displaced_threshold_ft < runway.le_displaced_threshold_ft) {
                    possibleActiveRunways.push({
                         run_apt: runway.airport_ident,
                         run_ident: runway.he_ident,
                         run_lat: runway.he_latitude_deg,
                         run_log: runway.he_longitude_deg,
                         run_elv: runway.he_elevation_ft,
                         run_hdg: runway.he_heading_degT,
                         run_lng: runway.length_ft,
                         run_wid: runway.width_ft,
                    });
               } else {
                    possibleActiveRunways.push({
                         run_apt: runway.airport_ident,
                         run_ident: runway.le_ident,
                         run_lat: runway.le_latitude_deg,
                         run_log: runway.le_longitude_deg,
                         run_elv: runway.le_elevation_ft,
                         run_hdg: runway.le_heading_degT,
                         run_lng: runway.length_ft,
                         run_wid: runway.width_ft,
                    });
               }
          }
     }

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
