import { NextResponse } from 'next/server';
import { WeatherModuleErrors } from './errors';
import SIFetchMetar from './interfaces/SFetchMetar';
import fetchMetar from './connections/fetchMetar';

export const SFetchMetar = async ({ icao }: SIFetchMetar) => {
     // Check ICAO validation
     if (!icao) return { error: 'WM01', description: WeatherModuleErrors['WM01'] };
     if (icao.length != 4) return { error: 'WM02', description: WeatherModuleErrors['WM02'] };

     // Fetch metar information and return it
     return await fetchMetar(icao);
};
