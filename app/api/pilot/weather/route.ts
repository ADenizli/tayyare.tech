import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import fetchMetar from './module/connections/fetchMetar';
import { WeatherModuleErrors } from './module/errors';
import { SFetchMetar } from './module/service';

export async function GET(req: NextApiRequest, res: NextApiResponse<any>) {
     // TODO: after heartbeat development, connect all modules
     return NextResponse.json({ status: 'module router is active and checked' }, { status: 200 });
}

export async function POST(request: Request) {
     const { icao } = await request.json();
     const serviceResponse = await SFetchMetar({ icao });

     return NextResponse.json(serviceResponse);
}
