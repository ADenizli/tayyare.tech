import * as fs from 'fs';
import IAirportInformation from '../interfaces/IAirportInformation';

interface IProps {
     file: 'airports';
}

async function file_get_contents(uri: string) {
     let res = await fetch(uri);
     let ret = await res.text();
     return ret;
}

export default async function SeperateCSVData({ file }: IProps): Promise<any[]> {
     switch (file) {
          case 'airports':
               const convertedAirportData: any[] | PromiseLike<IAirportInformation[]> = [];
               const rawData = await file_get_contents('https://davidmegginson.github.io/ourairports-data/airports.csv');
               const splittedAirports = rawData.split('\n');
               splittedAirports.forEach(splittedAirport => {
                    const seperatedAirport = splittedAirport.split(',');

                    if (!seperatedAirport[12]) return null;
                    convertedAirportData.push({
                         icao: seperatedAirport[12].replaceAll('"', ''),
                         status: seperatedAirport[2],
                         lat: seperatedAirport[3],
                         lon: seperatedAirport[4],
                         elevation: seperatedAirport[5],
                         country: seperatedAirport[7],
                         city: seperatedAirport[8],
                         wikipedia: seperatedAirport[15],
                    });
               });
               return convertedAirportData;
          default:
               return [];
     }
}
