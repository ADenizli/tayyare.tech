import IAirportInformation from '../interfaces/IAirportInformation';
import * as Papa from 'papaparse';

interface IProps {
     file: 'airports' | 'runways';
}

async function file_get_contents(uri: string) {
     let res = await fetch(uri);
     let ret = await res.text();
     return ret;
}

export default async function SeperateCSVData({ file }: IProps): Promise<any[]> {
     switch (file) {
          case 'airports':
               const rawAirportData = await file_get_contents('https://davidmegginson.github.io/ourairports-data/airports.csv');
               const parsedAirportData = Papa.parse(rawAirportData, { header: true });
               return parsedAirportData.data;
          case 'runways':
               const rawRunwayData = await file_get_contents('https://davidmegginson.github.io/ourairports-data/runways.csv');
               const parsedRunwayData = Papa.parse(rawRunwayData, { header: true });
               return parsedRunwayData.data;

          default:
               return [];
     }
}
