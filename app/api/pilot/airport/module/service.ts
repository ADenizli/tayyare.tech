import { NextResponse } from 'next/server';
import { WeatherModuleErrors } from './errors';
import SIFetchAirportInformation from './interfaces/SFetchAirportInformation';
import SeperateCSVData from './connections/seperateCSVData';

export const SFetchAirportInformation = async ({ icao }: SIFetchAirportInformation) => {
     // Check ICAO validation
     if (!icao) return { error: 'WM01', description: WeatherModuleErrors['WM01'] };
     if (icao.length != 4) return { error: 'WM02', description: WeatherModuleErrors['WM02'] };
     const allAirports = SeperateCSVData({ file: 'airports' });
};
