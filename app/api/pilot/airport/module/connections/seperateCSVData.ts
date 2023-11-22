import * as fs from 'fs';

interface IProps {
     file: 'airports';
}

async function file_get_contents(uri: string) {
     let res = await fetch(uri);
     let ret = await res.text();
     return ret;
}

export default async function SeperateCSVData({ file }: IProps) {
     switch (file) {
          case 'airports':
               const rawData = await file_get_contents('https://davidmegginson.github.io/ourairports-data/airports.csv');
               const splittedAirports = rawData.split('\n');
               // Continue
               return null;

          default:
               break;
     }
}
